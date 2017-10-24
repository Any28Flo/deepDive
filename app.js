// Array of users
const users=[{name:"Alba", email:"alba@dive.a",password:"alba2017!"}];
// Constructor user
const User =class{
    constructor(name,email,password){
      this.name=name;
      this.email=email;
      this.password=password;
    }
}

const loadPAge = ()=>{
  const btnLogin= document.getElementById('go');
  const newUser = document.getElementById("addUser");
  btnLogin.addEventListener("click",check);
  newUser.addEventListener("click",addNewUser);


}

window.onload= ()=>{
  loadPage();
}
