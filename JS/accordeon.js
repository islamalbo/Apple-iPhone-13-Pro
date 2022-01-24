const accordeon = () => {
  const chItems = document.querySelectorAll(".characteristics__item");

  chItems.forEach((item) => {
    const chButton = item.querySelector(".characteristics__title");
    const chContent = item.querySelector(".characteristics__description");

    chButton.addEventListener("click", () => {
      if (chContent.classList.contains("open")) {
        chContent.style.height = "";
      } else {
        chContent.style.height = chContent.scrollHeight + "px";
      }

      chContent.classList.toggle("open");
      chButton.classList.toggle("active");

      // if (chButton.classList.contains('active')) {
      //     chButton.classList.remove('active');
      //     chContent.classList.remove('active');
      // } else {
      //     chButton.classList.add('active');
      //     chContent.classList.add('active');
      // }
    });
  });
};

accordeon();
