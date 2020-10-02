
var array = [];

let form  = document.getElementById('demo');


form.addEventListener('submit', (event) => {


    let form = document.getElementById('demo');
    let a = form.elements['slut'];
    let b = form.elements['bishvarde'];
    let end = parseInt(a.value);
    let bish = parseInt(b.value);

    let start = 1;
  
    console.log(start + '<br/>');
    console.log(end + '<br/>');
    console.log(bish + '<br/>');

  
    function range(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
      }
      var array = range(1, end); // [1, 2, 3..., 100] 
      
      array.forEach(myFunction); 
      function myFunction(item, index) 
            { 
            if ((item % 3 === 0) && (item % 4 === 0)) {
                console.log("Bish-Bosh");
                document.write("Bish-Bosh" + '<br/>');  
                
            } else if (item %3 === 0) { 
                console.log("Bish");
                document.write("Bish" + '<br/>');            
            } else if (item % 4 === 0) {
                console.log("Bosh");
                document.write("Bosh" + '<br/>');            
            } else {
                console.log(item + '<br/>');
                document.write(item + '<br/>');
            }
       }
});
