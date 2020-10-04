
var array = [];

let form  = document.getElementById('demo');


form.addEventListener('submit', (event) => {


    let form = document.getElementById('demo');
    let a = form.elements['slut'];
    let b = form.elements['bishvarde'];
    let c = form.elements['boschvarde'];
    let end = parseInt(a.value);
    let bish = parseInt(b.value);
    let bosch = parseInt(c.value);

    let start = 1;
  
    console.log(start + '<br/>');
    console.log(end + '<br/>');
    console.log(bish + '<br/>');
    console.log(bosch + '<br/>');
  
    function range(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
      }
      var array = range(1, end); // [1, 2, 3..., 100] 
      
      array.forEach(myFunction); 
      function myFunction(item, index) 
            { 
            if ((item % bish === 0) && (item % bosch === 0)) {
                console.log("Bish-Bosh");
                document.write("Bish-Bosh" + '<br/>');  
                
            } else if (item % bish === 0) { 
                console.log("Bish");
                document.write("Bish" + '<br/>');            
            } else if (item % bosch === 0) {
                console.log("Bosh");
                document.write("Bosh" + '<br/>');            
            } else {
                console.log(item + '<br/>');
                document.write(item + '<br/>');
            }
       }
});
