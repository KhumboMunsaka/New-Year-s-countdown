// HOW IT WORKS
// First, we will get the current date.
// We will then get the current year and the last month and the last day
// we will subtract the time

const days = document.querySelector('.day');
const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const AllCalucaltions = function () {
  const currentDate = new Date();
  const newYears = new Date(currentDate.getFullYear(), 11, 31);
  const getTime = newYears.getTime() - currentDate.getTime();

  // Convert milliseconds to days
  const daysTilNy = Math.ceil(getTime / (1000 * 60 * 60 * 24));
  const hoursTilNy = Math.ceil(getTime / (1000 * 60 * 60));
  const minutesTilNy = Math.ceil(getTime / (1000 * 60));
  const secondsTilNy = Math.ceil(getTime / 1000);
  // updating the Ui
  seconds.textContent = `${secondsTilNy} seconds`;
  minutes.textContent = `${minutesTilNy} minutes`;
  days.textContent = `${daysTilNy} days`;
  hours.textContent = `${hoursTilNy} hours`;
};
AllCalucaltions();
const update = setInterval(AllCalucaltions, 1000);
