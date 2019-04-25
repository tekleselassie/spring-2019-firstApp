"use strict";


$(document).ready( () =>{
console.log("Jquery start");
$("#save-serve").click( ()=> {
  var store =[];
  let value = $("#number").val();

  let dataTosendToServer ={userNumber: value};

  $.post( "http://localhost:3000/numberSaver", dataTosendToServer, (data) => {

    console.log("The number send to server");
    console.log(data);
    store.push(data);
    console.log(store);

  });


});
});
console.log("Jquery Loaded");
