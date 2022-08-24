let array = [];

function arrayMethod(){
   
    let val = document.getElementById('pushval').value;
    array.push(val);
    arrayLop();
}

function pop(){
   array.pop();
   arrayLop(); 
}

function arrayLop(){
   document.getElementById("insertArea").innerHTML ="";
   document.getElementById("pushval").value ="";

   for(let x = 0; x < array.length; x++){

    let html = `<h1>${x+1}: ${array[x]}</h1>`
    document.getElementById("insertArea").innerHTML += html;
   }
}