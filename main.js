// // chart code
// const data = {
//   labels: [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ],
//   datasets: [
//     {
//       label: "Weekly Sales",
//       data: [18, 12, 6, 9, 12, 3, 9, 45, 24, 23, 88, 32],
//       backgroundColor: [
//         "rgba(255, 26, 104, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//         "rgba(0, 0, 0, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 26, 104, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//         "rgba(0, 0, 0, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// // config
// const config = {
//   type: "line",
//   data,
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// };

// // render init block
// const myChart = new Chart(document.getElementById("myChart"), config);

// left panel code
const burger = document.querySelector(".burger");
const main = document.querySelector(".main");

let clicked = false;

burger.addEventListener("click", () => {
  console.log("clicked");
  if (!clicked) {
    main.style.cssText = "grid-template-columns: 18rem auto";

    clicked = true;
  } else {
    main.style.cssText = "grid-template-columns: 4.375rem auto;";

    clicked = false;
  }
});

// console.log(main.classList);
