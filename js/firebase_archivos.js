//SUBIR ARCHIVO
const upload = async ({ file }) => {
    // 1.- Referencia al espacio en el bucket donde estará el archivo.
     let storageRef = firebase.storage().ref().child(`archivos/${file.name}`);
    // 2.- Subir el archivo.
     await storageRef.put(file);
    // 3.- Retornar la referencia.
     return storageRef;
    }
    
async function main(){
    var firebaseConfig = {
    apiKey: "AIzaSyBIhy0iaDq-qLFBdxetW8VmaMjY-WIxsYQ",
    authDomain: "proyecto-silabo.firebaseapp.com",
    projectId: "proyecto-silabo",
    storageBucket: "proyecto-silabo.appspot.com",
    messagingSenderId: "1001924068209",
    appId: "1:1001924068209:web:4149eaa792ea45485a6cd0",
    measurementId: "G-112Q7LMV30"
  };
  firebase.initializeApp(firebaseConfig);
  let db= document.querySelector("#formulario");
  form.addEventListener("sumit",(ev)=>{

  ev.preventDefault();//Evita errores.
  let fileInput = db.querySelector("#archivo");
  let file = fileInput.file[0];
  upload({
      file: file
  });
});
}
 main();


