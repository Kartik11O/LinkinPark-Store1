var NavPhone = document.getElementById("NavPhone")
var Store_1 = document.getElementById("Store_1")

function Open_Close(){

   if(NavPhone.style.display == "none"){
    NavPhone.style.display = "block"
    Store_1.style.display = "none"
   }

   else{
    NavPhone.style.display = "none"
    Store_1.style.display = "block"
   }

}