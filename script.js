function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  var array = range(1, 100); // [1, 2, 3..., 100]
  //console.log(result);
  
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
            document.write(item + '<br/>');
        }
   }




//document.write(out);  

console.log(item); 
document.write(item);
