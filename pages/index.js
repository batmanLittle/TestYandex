// window.addEventListener("resize", function () {
//   const screenWidth = window.innerWidth;
//   if (screenWidth < 900) {
//     const titleText = document.querySelector(".support-info__title-text");

//     titleText.innerHTML = "Чтобы поддержать Международный васюкинский турнир";

//     var parentElement = document.querySelector(".support-info__title");

//     var newElement = document.createElement("h2");
//     newElement.innerHTML =
//       'посетите лекцию на тему: <span class="support-info__span">"Плодотворная дебютная идея"</span>';

//     parentElement.appendChild(newElement);
//   }
// });

// посетите лекцию
//               на тему:
//               <span class="support-info__span"
//                 >«Плодотворная дебютная идея»</span
//               >

// const handleResize = () => {
//   const width = window.innerWidth;

//   if (width >= 651) {
//     if (width === 1366) {
//       x = 1;
//     } else {
//       x = width / 1366;
//     }
//   }
//   if (width <= 650) {
//     if (width === 375) {
//       x = 1;
//     } else {
//       x = width / 375;
//     }
//   }

//   const page = document.querySelector(".page");
//   page.style.zoom = `${x}`;

//   if (width >= 1367) {
//     page.style.zoom = `${1}`;
//   }
// };

// handleResize();

// window.addEventListener("resize", handleResize);

//изменение текста в зависимости от шириный экрана support-info

// const handleResizeText = () => {
//   const element = document.querySelector(".one");
//   const elementrr = document.querySelector(".one");
//   if (width <= 650) {
//     (element.textContent =
//       "Чтобы поддержать Международный васюкинский турнир") &&
//       (elementrr.textContent = "dddd");
//   }
// };
