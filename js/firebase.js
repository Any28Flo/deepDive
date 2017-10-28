
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAUND5wUBFDHs--tuXEUZ4YDJvni58Fafs",
    authDomain: "deepdive-1508900168963.firebaseapp.com",
    databaseURL: "https://deepdive-1508900168963.firebaseio.com",
    projectId: "deepdive-1508900168963",
    storageBucket: "deepdive-1508900168963.appspot.com",
    messagingSenderId: "237950207129"
  };
  firebase.initializeApp(config);

  const objDb = {
  	usuarios: []
  };
  const database = firebase.database();
  const formulario = document.getElementById("createUser");
  formulario.addEventListener("click", function(){

	const nombre = document.getElementById("nameNewUser").value;
  const correo = document.getElementById("emailNewUser").value;
	const password = document.getElementById("passwordNewUser").value;

	objDb.usuarios.push({
		name: nombre,
		email: correo,
		password: password
	});
  guardarDatos(objDb)

});


const guardarDatos=(usuarios) =>{
// Para guardar en base de dato usar el metodo .set()

database.ref("/").set(usuarios);
}
