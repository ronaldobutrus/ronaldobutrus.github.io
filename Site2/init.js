numbers=['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];

function roll(){
	var x = String(Math.floor((Math.random() * 90) + 1));
	if(numbers.includes(x)){
		numbers.splice(numbers.indexOf(x),1);
		document.getElementById(x).style.color = "yellow";
		document.getElementById(x).style.backgroundColor = "green";
		document.getElementById("current").innerHTML = x;
		if(numbers.length==0){
			document.getElementById("current").innerHTML += "<br>END";
		};
	}
	else{
		roll();
	};
}