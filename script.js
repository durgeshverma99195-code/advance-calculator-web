let buttons=document.querySelectorAll("button");
let input=document.querySelector("input");
let string="";
let arr2=["+","-","/","*","%","."];
const op = /[+\-*/%]/;
let ans=false;
let arr=Array.from(buttons);
arr.forEach( button =>{
   button.addEventListener("click",(e) =>{
      input.style.color="white";
        let tar=e.target.innerHTML;
      


        
         if(tar==="="){
            if (string === "" || !op.test(string)) return;
        string = eval(string).toString();
        input.style.color="orange";
        input.value=string;
        
        
        ans=true;
        return;

       }
       
       
       
       else if(tar==="CE"){
        string="";
        input.value=string;
       } 
       
       else if(tar==="C"){
        string=string.substring(0,string.length-1);
        input.value=string;

       } else if(tar==="00"){
         if(string==="") return;
         if (arr2.includes(string[string.length-1])) return;
         string+=tar;
        input.value=string;
        return;
       }
       else if (tar === ".") {

   
   if (string === "") {
      string = "0.";
      input.value = string;
      return;
   }

   
   if (string[string.length - 1] === "+" ||
       string[string.length - 1] === "-" ||
       string[string.length - 1] === "/" ||
       string[string.length - 1] === "*" ||
       string[string.length - 1] === "%") {

      string += "0.";
      input.value = string;
      return;
   }

   
   for (let j = string.length - 1; j >= 0; j--) {

      if (string[j] === ".") {
         return; 
      }

      if (string[j] === "+" ||
          string[j] === "-" ||
          string[j] === "/" ||
          string[j] === "*" ||
          string[j] === "%") {
         break; 
      }
   }

   string += ".";
   input.value = string;
   return;
}




       else if(tar==="/"||tar==="*"||tar==="%"||tar==="+"||tar==="-"){

        if (string === "" && (tar === "/" || tar === "*" || tar === "%"||tar==="+")) return;
             if (arr2.includes(string[string.length-1])) return;
             else{
                string+=tar;
        input.value=string;
             }
             
       }

   
       else{
         if(ans){
            if(arr2.includes(string[string.length-1])){
               string+=tar;
         input.value=string;
         ans=false;
         return;
            }
         else {
            string="";
         string+=tar;
         input.value=string;
         ans=false;
         
         
         return;
      }

      
        } else{
        string+=tar;
        input.value=string;
        }
       }





   })
})


