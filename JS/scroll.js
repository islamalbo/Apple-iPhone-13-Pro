const scrollFunc = () => {
  const links = document.querySelectorAll(".header-menu__item a");

  links.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();

      const id = element.getAttribute("href").substring(1);
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        seamless.elementScrollIntoView(
          document.querySelector("#characteristics "),
          {
            behavior: "smooth",
            block: "center",
            inline: "center",
          }
        );
      }
    });
  });

  const smoothLinks = document.querySelectorAll(
    ".card-details__link-characteristics"
  );

  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", (element) => {
      element.preventDefault();
      const id = smoothLink.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
};

scrollFunc();
