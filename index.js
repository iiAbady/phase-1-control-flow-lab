function scuberGreetingForFeet(number){
  if (number <= 400) {
	return "This one is on me!";
  } else if (number > 400 && number <= 2000) {
	return "That will be twenty bucks.";
  } else if (number > 2000 && number <= 2500 ) {
	return "I will gladly take your thirty bucks.";
  } else if (number > 2500) {
	  return "No can do.";
  }
}

function ternaryCheckCity(string){
  const res = string == "NYC" ? "Ok, sounds good." : "No go.";
  return res;
}

function switchOnCharmFromTip(string){
  let res = "";
  switch(string) {
	  case "generous":
		return res = "Thank you so much."
		break;
	  case "not as generous":
		return res = "Thank you."
		break;
	  default:
		return res = "Bye."
  }
}