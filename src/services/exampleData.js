const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const t1 = {
  labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
  datasets: [
    {
      label: "Data 1",
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(75, 192, 192)",
        "rgb(255, 205, 86)",
        "rgb(201, 203, 207)",
        "rgb(54, 162, 235)",
      ],
    },
  ],
};

export const t2 = {
  labels: MONTHS.splice(2, 9),
  datasets: [
    {
      label: "Data 1",
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(75, 192, 192)",
        "rgb(255, 205, 86)",
        "rgb(201, 203, 207)",
        "rgb(54, 162, 235)",
      ],
      borderColor: "rgb(50, 50, 50)",
      tension: 0.1,
    },
    {
      label: "Data 1 Filled",
      data: [22, 0, 9, 17, 5, 9, 27],
      backgroundColor: "#20202050",
      borderColor: "rgb(75, 25, 192)",
      tension: 0.1,
      fill: "start",
    },
    {
      label: "Data 3 Filled",
      data: [32, 27, 14, 22, 14, 10, 5],
      backgroundColor: "#FF008050",
      borderColor: "rgb(75, 192, 47)",
      tension: 0.1,
      fill: "end",
    },
  ],
};
