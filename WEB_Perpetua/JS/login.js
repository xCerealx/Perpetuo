
let data = [];

let btn, validation_txt;

window.onload = ()=>{
  btn = document.getElementById("btn_send");
  validation_txt = document.getElementById("validation_text");
  btn.addEventListener("click",processdata);
}

function processdata (event) {
  let email, password, flag = false, html="Error, verifica: <br><ul>";

  email = document.getElementById("email");
  password = document.getElementById("password");

  console.log(email.value, password.value);

  if (email.value== ""){
    html+= "<li>Verifica el correo electronico</li>";
    flag = true;
  }
  
  if (password.value== "") {
    html+= "<li>Verifica la clave de acceso</li>";
    flag = true;
  }

    if (flag) {
      validation_txt.innerHTML = html+"<br>";
  }
  else {
    saveData({
      email: email.value,
      password: password.value,
    });
  }
}
function clear(){
  let email, password;

  email = document.getElementById("email");
  password = document.getElementById("password");
  validation_txt.innerHTML = "";
  email.value = "";
  password.value = "";
  
}
function saveData(obj){
  localStorage.setItem("email", JSON.stringify(obj));
  clear();
}
