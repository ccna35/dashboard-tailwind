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
//   type: "bar",
//   data,
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// };

// render init block
// const myChart = new Chart(document.getElementById("myChart"), config);

// first chart : bar chart
const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
      {
        label: "# of Votes",
        data: [62, 79, 53, 35, 72, 93],
        borderWidth: 1,
      },
    ],
  },
  options: {
    animation: true,
    pointRadius: 10,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// second chart : line chart
const ctx2 = document.getElementById("myChart2");

new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 3,
      },
      {
        label: "# of Votes",
        data: [57, 90, 30, 45, 62, 73],
        borderWidth: 3,
      },
    ],
  },
  options: {
    animation: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// left panel code
const burger = document.querySelector(".burger");
const main = document.querySelector(".main");

let clicked = false;

burger.addEventListener("click", () => {
  console.log("clicked");
  if (!clicked) {
    main.style.cssText = "grid-template-columns: 16.25rem auto";

    clicked = true;
  } else {
    main.style.cssText = "grid-template-columns: 4.375rem auto;";

    clicked = false;
  }
});

// console.log(main.classList);

const navItems = document.querySelectorAll(".nav-item");
const navList = document.querySelector(".nav-item ul");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const subMenu = item.querySelector("ul");
    navItems.forEach((item) => {
      const subMenu = item.querySelector("ul");
      subMenu.style.maxHeight = null;
    });
    if (subMenu.style.maxHeight) {
      subMenu.style.maxHeight = null;
    } else {
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
  });
});

// fullscreen code

const fullscreenIcon = document.querySelector(".fullscreen");

let fullScreenStatus = false;

fullscreenIcon.addEventListener("click", () => {
  if (fullScreenStatus) {
    document.exitFullscreen();
    fullScreenStatus = false;
  } else {
    document.documentElement.requestFullscreen();
    fullScreenStatus = true;
  }
});
