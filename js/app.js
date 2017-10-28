const loadPage = ()=>{
  // Array of users
  const users=[{name:"Alba", email:"alba@dive.a",password:"alba2017!"}];
  // Constructor User
  const User =class{
      constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
      }
  }
  const redireccionar = ()=>{
    window.location="insigts.html";
  }
  const validCount= (userName,userPassWord)=>{
    for(let i = 0 ; i < users.length ; i++){
      if(users[i].name == userName && users[i].password == userPassWord){
        redireccionar();
      }else{
        alert(`The user o the count doen´t exist`)
      }
    }
  }
  const addNewUser = ()=>{
    const nameUser = document.getElementById('nameNewUser').value;
    const email=document.getElementById('emailNewUser').value;
    const passwordUser=document.getElementById('passwordNewUser').value;
    const userNew = new User( nameUser,email,passwordNewUser);
    }
    users.push(userNew);
    redireccionar();
  const checkCount = ()=>{
    const userName = document.getElementById("userName").value;
    const userPassWord = document.getElementById("userPassWord").value;
    console.log(`${userName} ${userPassWord}`);
    validCount(userName,userPassWord)
  }
  const init = ()=>{
    const btnLogin= document.getElementById('go');
    const newUser = document.getElementById("createUser");
    btnLogin.addEventListener("click",checkCount);
    newUser.addEventListener("click",addNewUser);
  }
  init();
}
window.onload= ()=>{
  loadPage();
}
