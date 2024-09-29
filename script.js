//your JS code here. If required.

let emailname = document.getElementById('email');
let password = document.getElementById('password');
let flag = 

function validateFrom() {
	if (emailname.value == "") {
		document.getElementById('emailname').innerHTML = "Please Correct Email address"
	}
	else if (emailname.value.length < 12) {
		document.getElementById('emailname').innerHTML = "Only 12 more than email id"
	}

	else {
		document.getElementById('emailname').innerHTML= ""
	}

	if (password.value == "") {
		document.getElementById('password'.innerHTML = "Password is not correct")
	}
	return false;
}