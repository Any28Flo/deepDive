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
const validCount= ()=>{

}
const addNewUser = ()=>{
  console.log (users);
}
const checkCount = ()=>{
  const userName = document.getElementById("userName");
  const userPassWord = document.getElementById("userPassWord");
  console.log(`${userName} ${userPassWord}`);
}
const loadPage = ()=>{
  const btnLogin= document.getElementById('go');
  const newUser = document.getElementById("addUser");
  btnLogin.addEventListener("click",checkCount);
  newUser.addEventListener("click",addNewUser);


}

window.onload= ()=>{
  loadPage();
}
