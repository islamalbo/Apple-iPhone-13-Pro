const sendForm = () => {
  const btnOpenModal = document.querySelector(".card-details__button_delivery");
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".modal__close");
  const cardTitle = document.querySelector(".card-details__title");
  const modalTitle = document.querySelector(".modal__title");
  const modalForm = document.querySelector("form");

  btnOpenModal.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.textContent = cardTitle.textContent;
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const labels = modal.querySelectorAll(".modal__label");
    const sendMessage = {};

    labels.forEach((label) => {
      const span = label.querySelector("span");
      const input = label.querySelector("input");

      sendMessage[span.textContent] = input.value;
    });
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(sendMessage),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      modal.style.display = "none";
      event.target.reset();
    });
  });
};

sendForm();
