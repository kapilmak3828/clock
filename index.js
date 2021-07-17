

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");



setInterval(()=>{

const now =  new Date();
const second = now.getSeconds();
const seconddegree = ((second/60)*360) + 90;
const minute = now.getMinutes();
const minutedegree = ((minute/60)*360) + 90;
const hour = now.getHours();
const hourdegree = ((hour/12)*360) + 90;





minuteHand.style.transform = `rotate(${minutedegree}deg)`;
secondHand.style.transform = `rotate(${seconddegree}deg)`;
hourHand.style.transform = `rotate(${hourdegree}deg)`;

},1000)

