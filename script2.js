
document.querySelector('#head').addEventListener('click', headClicked);

function headClicked(){
    this.innerText = "Clicked";
}


function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }

let form = document.getElementById('demo');
let end = form.elements[0]; 
let bishtal = form.elements[1]; 
 // let end = document.getElementById("slut").addEventListener("input", myFunction);
//let end = document.getElementById("slut").value;
//let bishtal = document.getElementById("bishvarde").addEventListener("input", myFunction);
//let bishtal = document.getElementById("bishvarde").value;

let start = 1;

  var array = range(start, end); // [1, 2, 3..., 100]
  //console.log(result);
  
  array.forEach(myFunction); 
  function myFunction(item, index, bishtal)  
        
        { 
        if ((item % 3 === 0) && (item % 4 === 0)) {
            //console.log("Bish-Bosh");             
            document.getElementById("demo").innerHTML = "You wrote: " + end + bishtal + "Bish-Bosh" + '<br/>'; 
            //document.write("Bish-Bosh" + '<br/>');
            
        } else if (item % bishtal === 0) { 
            //console.log("Bish");
            //document.write("Bish" + '<br/>');   
            document.getElementById("demo").innerHTML = "Loop längd: " + end + "Tal för Bish" + bishtal + "Out: " + "Bish" + '<br/>'; 
            //document.write("Bish" + '<br/>');         
        } else if (item % 4 === 0) {
            //console.log("Bosh");
            //document.write("Bosh" + '<br/>');
            document.getElementById("demo").innerHTML = "Loop längd: " + end + "Tal för Bosh" + bishtal + "Out: " + "Bosh" + '<br/>';  
            document.getElementById("demo").innerHTML = "You wrote: " + end + bishtal + "Bosh" + '<br/>'; 
            //document.write("Bosh" + '<br/>');            
        } else {
            //console.log(item + '<br/>');
            //document.write(item + '<br/>');
            document.getElementById("demo").innerHTML = "Loop längd: " + end + item + '<br/>'; 
        }
   }

