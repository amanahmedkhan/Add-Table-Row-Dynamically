const addRow = [];

let name = document.getElementsByClassName("getName")[0],
employees = document.getElementsByClassName("getEmployees")[0],
headoffice = document.getElementsByClassName("getOffice")[0],
tBody = document.getElementsByClassName("rowList")[0];

const getAddRow = () => {
	let trData = document.createElement("tr"),
	tdName = document.createElement("td"),
	tdEmployees = document.createElement("td"),
	tdOffice = document.createElement("td");

	addRow.push(
		{
			Name: name.value,
			Employees: employees.value,
			Headoffice: headoffice.value
		}
	)

	addRow.map((rowDetail) => {
		trData.insertBefore(tdOffice, trData.lastChild).innerHTML = headoffice.value;
		trData.insertBefore(tdName, trData.lastChild).innerHTML = name.value;
		trData.insertBefore(tdEmployees, trData.lastChild).innerHTML = employees.value;
		tBody.appendChild(trData);
	})
	console.log(addRow)
}
