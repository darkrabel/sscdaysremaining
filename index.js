const sscDate = "6/19/2022"
const d = new Date();
let getYear = d.getFullYear();
let getMonth = d.getMonth();
let getDate= d.getDate();
// if (getMonth<10) {
//   getMonth = "0"+getMonth;
//
// }
//we don not need th

let fullDate =getMonth+"/"+getDate+"/"+getYear;
console.log(fullDate)

let t = typeof(fullDate);


const date1 = new Date(sscDate);
const date2 = new Date(fullDate);
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

console.log(diffDays + " days");
let finalremainningDay = diffDays + " days";

let underline = document.getElementById("underline");
underline.innerHTML = finalremainningDay;






// const date1 = new Date(fullDate);
// const date2 = new Date(sscDate);//this is ssc date;
