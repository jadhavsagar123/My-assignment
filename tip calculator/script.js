window.onload = () =>
	
	{
		document.getElementById('calculate').onclick = calculateTip;
	}
function calculateTip() {
	let amount = document.getElementById('bill').value;
	let persons = document.getElementById('people').value;
	let service = document.getElementById('service').value;

	if (amount === "" || service === "0" || isNaN(amount)) {
		alert("Please enter valid values");
		return;
	}

	if (persons === '1')
		document.getElementById('hide').style.display = 'none';
	else
		document.getElementById('hide').style.display = 'block';
	let total = (amount * service) / persons;
	total = total.toFixed(2);
	document.getElementById('tip').style.display = 'block';
	document.getElementById('total').innerHTML = total;
}
