const loadPAge = ()=>{
  const btnLogin= document.getElementById('go');
  const newUser = document.getElementById("addUser");
  btnLogin.addEventListener("click",check);
  newUser.addEventListener("click",addNewUser);


}

window.onload= ()=>{
  loadPage();
}
