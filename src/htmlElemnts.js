const htmlElements = () => {
  const levels = document.querySelectorAll(".home-page__img");
  const homePage = document.querySelector(".home-page");
  const levelsContainer = document.querySelector(".levels");
  const level = document.querySelectorAll(".home-page__level");
  const levelImg = document.querySelector(".levels__img");
  const levelImgContainer = document.querySelector(".levels__img-container");
  const levelTitle = document.querySelector(".levels__title");
  const characters = document.querySelectorAll("[id]");
  const endScreen = document.querySelector(".end-screen");
  return {
    levels,
    levelsContainer,
    homePage,
    levelImg,
    characters,
    levelTitle,
    level,
    levelImgContainer,
    endScreen,
  };
};

module.exports = htmlElements;
