let operation = "";


function calculateNumber(entry){
   let display = document.getElementById("display");
   let existingContent = display.innerHTML;
   
   if(operation !== ""){
    //    eval executes an operation
       display.innerHTML = eval(parseInt(existingContent) + operation + parseInt(entry));
       console.log(parseInt(existingContent) + operation + parseInt(entry));
       
       return;
   }

   if (isNaN(entry) ){
       operation = entry;
   } else{
    display.innerHTML = existingContent + entry;
   }
}