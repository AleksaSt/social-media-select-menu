const arrowDown = document.querySelector(".fa-angle-down");
const socialMediaIcon = document.querySelector(".social-media-icons");
const socialMediaTopElement = document.querySelector(".social-media p");
const socialMediaListElements = document.querySelectorAll(
  ".social-media-icons li"
);
console.log(socialMediaListElements);

arrowDown.addEventListener("click", () => {
  arrowDown.classList.toggle("rotate");
  socialMediaIcon.classList.toggle("hide");
});

socialMediaListElements.forEach((listElement) => {
  listElement.addEventListener("click", () => {
    socialMediaTopElement.innerHTML = listElement.innerHTML;
  });
});
