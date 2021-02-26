const currentTime = new Date();
let currentHour = currentTime.getHours();
let currentMinutes = currentTime.getMinutes();

let greeting = document.getElementById("greeting");

if (currentHour <= 11) {
    greeting.innerHTML = "Good morning Jonas";
} else if (currentHour <= 16 ) {
    greeting.innerHTML = "Good afternoon Jonas";
} else if (currentHour <=  21) {
    greeting.innerHTML = "Good evening Jonas";
} else if (currentHour <=  24 || <=  05) {
    greeting.innerHTML = "Good night Jonas";
}

if (currentHour < 10)  currentHour = '0'+currentHour;
if (currentMinutes < 10)  currentMinutes = '0'+currentMinutes;

const time = `${currentHour}:${currentMinutes}`

let firstNum = time.charAt(0);
let secondNum = time.charAt(1);
let thirdNum = time.charAt(3);
let fourthNum = time.charAt(4);

document.getElementById("firstNum").innerHTML = firstNum;
document.getElementById("secondNum").innerHTML = secondNum;
document.getElementById("thirdNum").innerHTML = thirdNum;
document.getElementById("fourthNum").innerHTML = fourthNum;
