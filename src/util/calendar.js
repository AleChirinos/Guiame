import dayjs from "dayjs";

let minuteArray = Array.from({ length: 60 }, (value, index) => index.toString());
let hoursArray = Array.from({ length: 24 }, (value, index) => index.toString());
 
function getArray(arr){
    for (let index = 0; index < arr.length; index++) {
        if (index <10) {
          arr[index] = '0'+arr[index];
        }
    }
    return arr
}

console.log(minuteArray);

export const generateDate = (
	month = dayjs().month(),
	year = dayjs().year()
) => {
	const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
	const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

	const arrayOfDate = [];

	// create prefix date
	for (let i = 0; i < firstDateOfMonth.day(); i++) {
		const date = firstDateOfMonth.day(i);

		arrayOfDate.push({
			currentMonth: false,
			date,
		});
	}

	// generate current date
	for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
		arrayOfDate.push({
			currentMonth: true,
			date: firstDateOfMonth.date(i),
			today:
				firstDateOfMonth.date(i).toDate().toDateString() ===
				dayjs().toDate().toDateString(),
		});
	}

	const remaining = 42 - arrayOfDate.length;

	for (
		let i = lastDateOfMonth.date() + 1;
		i <= lastDateOfMonth.date() + remaining;
		i++
	) {
		arrayOfDate.push({
			currentMonth: false,
			date: lastDateOfMonth.date(i),
		});
	}
	return arrayOfDate;
};

export const months = [
	"Enero",
	"Febrero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Septiembre",
	"Octubre",
	"Noviembre",
	"Diciembre",
];

export const dias= [
	"Domingo",
	"Lunes",
	"Martes",
	"Miercoles",
	"Jueves",
    "Viernes",
	"Sabado"
];

export const minutes=getArray(minuteArray);
export const hours=getArray(hoursArray);
