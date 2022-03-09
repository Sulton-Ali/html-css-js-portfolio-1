const prevBtn = document.querySelector(".blog__prev");
const nextBtn = document.querySelector(".blog__next");
const articles = document.querySelectorAll(".blog__article");
const articleList = document.querySelector(".blog__article-list");
const bulletList = document.querySelector(".blog__bullets");

articles.forEach((_, index) => {
  const bullet = document.createElement("div");
  bullet.classList.add("blog__bullet");
  if (index === 0) {
    bullet.classList.add("active");
  }
  bulletList.append(bullet);
});

const articleWidth = 576;

let currentArticle = 0;
let currentOffset = 0;

prevBtn.addEventListener("click", (e) => {
  if (currentArticle <= 0) {
    e.preventDefault();
    return;
  }
  const bullets = document.querySelectorAll(".blog__bullet");
  currentArticle--;
  currentOffset += articleWidth;
  gsap.to(articleList, { x: currentOffset });

  bullets.forEach((bullet) => bullet.classList.remove("active"));
  bullets[currentArticle].classList.add("active");
});

nextBtn.addEventListener("click", (e) => {
  if (currentArticle >= articles.length - 1) {
    e.preventDefault();
    return;
  }
  const bullets = document.querySelectorAll(".blog__bullet");
  currentArticle++;
  currentOffset -= articleWidth;
  gsap.to(articleList, { x: currentOffset });

  bullets.forEach((bullet) => bullet.classList.remove("active"));
  console.log(currentArticle, bullets[currentArticle]);
  bullets[currentArticle].classList.add("active");
});
