function setDate() {
	const date = new Date();
	const month = date.getMonth();
	const dayOfMonth = date.getDate();
	const dayOfMonth10 = Math.floor(dayOfMonth / 10);
	// extract each digit of the year:
  const year = date.getFullYear(); // e.g., 2025
  const thousands = Math.floor(year / 1000);
  const hundreds  = Math.floor((year % 1000) / 100);
  const tens      = Math.floor((year % 100) / 10);
  const ones      = year % 10;

  document.querySelector('.yearPaths1000').setAttribute('transform', `translate(0 ${-(thousands * 6)})`);
  document.querySelector('.yearPaths100').setAttribute('transform', `translate(0 ${-(hundreds * 6)})`);
  document.querySelector('.yearPaths10').setAttribute('transform', `translate(0 ${-(tens * 6)})`);
  document.querySelector('.yearPaths1').setAttribute('transform', `translate(0 ${-(ones * 6)})`);
	document.querySelector('.monthPaths').setAttribute('transform', `translate(0 ${-(month * 6)})`);
	document.querySelector('.dayPaths').setAttribute('transform', `translate(0 ${-(dayOfMonth * 6) % 60})`);
	document.querySelector('.dayPaths10').setAttribute('transform', `translate(0 ${- (dayOfMonth10 * 6)})`);
}

window.addEventListener("DOMContentLoaded", setDate);