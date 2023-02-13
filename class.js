document.getElementById('click').onclick = function () {
	let fName = document.getElementById('name');
	let fMail = document.getElementById('email');
	let fDate = document.getElementById('date');
	let fHome = document.getElementById('home');
	let fPhone = document.getElementById('phone');


	document.getElementById('name2').innerHTML = fName.value;
	document.getElementById('email2').innerHTML = fMail.value;
	document.getElementById('date2').innerHTML = fDate.value;
	document.getElementById('home2').innerHTML = fHome.value;
	document.getElementById('phone2').innerHTML = fPhone.value;
}
