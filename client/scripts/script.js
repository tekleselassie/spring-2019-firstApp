"use strict";

$(document).ready(function (){
console.log("Jquery start");
$("#reuest-button").click( ()=> {
$.post( "http://localhost:3000",{data: "Thi is from Front"}, (response,request) => {
  console.log("The server responded");
  console.log("The server sent the folloeing: ", response.message);


});
});
});

console.log("Jquery Loaded");
