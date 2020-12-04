const inputMonth = +prompt('month from 1 to 12') - 1;
const inputYear = prompt('year');


const date = new Date(inputYear,inputMonth);
const dateNext = new Date(inputYear,inputMonth + 1);
const monthName = date.toString().slice(4,7);
const dayOfWeek = date.toString().slice(0,3);
const dayOfWeekNumber = date.getDay();
const lastMonthDay = +dateNext.toISOString().slice(8, 10);
const calendar = document.querySelector('#calendar');

console.log(date.toString(),date.toISOString());

let calendarElem = '<td></td>'.repeat((dayOfWeekNumber - 1) === -1 ? 6 : dayOfWeekNumber - 1);

for (let i = 1; i <= lastMonthDay; i++) {
	if (!(((dayOfWeekNumber - 1) + i) % 7) || ((dayOfWeekNumber - 1) + i) === 0) {
		calendarElem += `<td>${i}</td>`;
		calendarElem += '<tr>';
	}else {
	calendarElem += `<td>${i}</td>`;
	};
};


calendar.innerHTML += `
	<caption>${monthName}:${inputYear}</caption>
	<tr>
		<td>Mon</td>
		<td>Tue</td>
		<td>Wed</td>
		<td>Thu</td>
		<td>Fri</td>
		<td>Sat</td>
		<td>Sun</td>
	</tr>
	${calendarElem}
	`
	;


