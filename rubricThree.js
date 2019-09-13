var issaForm = document.getElementsByTagName("form");

//variable issaForm is intended to show HTML Collection in console. 
//Shows getElementByTag is working

console.log(issaForm);

//Functions with Rubric 3 requirements:
// getElementById, createElement, appendChild & createTextNode

function yourHoroscope(event){
	var dayChoice = document.getElementById("dayForm");
	var dayValue = day.options[day.selectedIndex].value;
	var month = document.getElementById("month");
	var monthValue = month.options[month.selectedIndex].value;
	

	if((monthValue == "January" && dayValue <= "19") || (monthValue == "December" && dayValue >= "22")){
		var myContainer = document.getElementById("zodiacReveal");
		var newItem = document.createElement("h2");
		var newText = document.createTextNode("You're a Capricorn");
		myContainer.appendChild(newItem); 
		newItem.appendChild(newText);
		} 

	if((monthValue == "January" && dayValue >= "20") || (monthValue == "February" && dayValue <= "18")){
		var myContainer = document.getElementById("zodiacReveal");
		var newItem = document.createElement("h2");
		var newText = document.createTextNode("You're an Aquarius");
		myContainer.appendChild(newItem); 
		newItem.appendChild(newText);
		} 

	if((monthValue == "February" && dayValue >= "19") || (monthValue == "March" && dayValue <= "20")){
		var myContainer = document.getElementById("zodiacReveal");
		var newItem = document.createElement("h2");
		var newText = document.createTextNode("You're a Pisces");
		myContainer.appendChild(newItem); 
		newItem.appendChild(newText);
		} 

	if((monthValue == "March" && dayValue >= "21") || (monthValue == "April" && dayValue <= "19")){
		var myContainer = document.getElementById("zodiacReveal");
		var newItem = document.createElement("h2");
		var newText = document.createTextNode("You're an Aries");
		myContainer.appendChild(newItem); 
		newItem.appendChild(newText);
		} 

	if((monthValue == "April" && dayValue >= "20") || (monthValue == "May" && dayValue <= "20")){
		var myContainer = document.getElementById("zodiacReveal");
		var newItem = document.createElement("h2");
		var newText = document.createTextNode("You're a Taurus");
		myContainer.appendChild(newItem); 
		newItem.appendChild(newText);
		} 

	if((monthValue == "May" && dayValue >= "21") || (monthValue == "June" && dayValue <= "20")){
		var myContainer = document.getElementById("zodiacReveal");
		var newItem = document.createElement("h2");
		var newText = document.createTextNode("You're a Gemini");
		myContainer.appendChild(newItem); 
		newItem.appendChild(newText);
		} 

	if((monthValue == "June" && dayValue >= "21") || (monthValue == "July" && dayValue <= "22")){
		var myContainer = document.getElementById("zodiacReveal");
		var newItem = document.createElement("h2");
		var newText = document.createTextNode("You're a Cancer");
		myContainer.appendChild(newItem); 
		newItem.appendChild(newText);
		} 

	if((monthValue == "July" && dayValue >= "23") || (monthValue == "August" && dayValue <= "22")){
		var myContainer = document.getElementById("zodiacReveal");
		var newItem = document.createElement("h2");
		var newText = document.createTextNode("You're a Leo");
		myContainer.appendChild(newItem); 
		newItem.appendChild(newText);
		} 

	if((monthValue == "August" && dayValue >= "23") || (monthValue == "September" && dayValue <= "22")){
		var myContainer = document.getElementById("zodiacReveal");
		var newItem = document.createElement("h2");
		var newText = document.createTextNode("You're a Virgo");
		myContainer.appendChild(newItem); 
		newItem.appendChild(newText);
		} 

	if((monthValue == "September" && dayValue >= "23") || (monthValue == "October" && dayValue <= "22")){
		var myContainer = document.getElementById("zodiacReveal");
		var newItem = document.createElement("h2");
		var newText = document.createTextNode("You're a Libra");
		myContainer.appendChild(newItem); 
		newItem.appendChild(newText);
		} 

	if((monthValue == "October" && dayValue >= "23") || (monthValue == "November" && dayValue <= "21")){
		var myContainer = document.getElementById("zodiacReveal");
		var newItem = document.createElement("h2");
		var newText = document.createTextNode("You're a Scorpio");
		myContainer.appendChild(newItem); 
		newItem.appendChild(newText);
		} 

	if((monthValue == "November" && dayValue >= "22") || (monthValue == "December" && dayValue <= "21")){
		var myContainer = document.getElementById("zodiacReveal");
		var newItem = document.createElement("h2");
		var newText = document.createTextNode("You're a Sagittarius");
		myContainer.appendChild(newItem); 
		newItem.appendChild(newText);
		} 
};