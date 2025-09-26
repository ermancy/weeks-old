const startInput = document.getElementById("startdate");
const output  = document.getElementById("weeks");

const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;

//startInput.valueAsDate = new Date(Date.now());

function weeksBetween(startDate, endDate) {
  return (endDate - startDate) / millisecondsPerWeek;
}

function updateDiff(){
  const startDate =  new Date(startInput.value);
  const endDate =  new Date();
  
  // Get how much weeks is between these dates
  const weeks = weeksBetween(startDate, endDate).toPrecision(12);
  output.innerHTML =`${weeks}`;
}

function initDiff() {
  updateDiff();
  window.setInterval("updateDiff()", 1);
}