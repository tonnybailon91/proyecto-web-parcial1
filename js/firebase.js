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
 
 let db = firebase.firestore();

 const SaveUser = (user)=>{
    db.collection("Registro_usuarios").add({
        user,
    })
    .then(function(docRef) {
        correcto();

    })
    .catch(function(error){
        incorrecto();
    });
 }
 const correcto =()=>{
    if(Swal.fire(
        'Exelente!',
        'Se registró correctamente!',
        'success'
      ))
      window.location='home.html';
 }

 const incorrecto =()=>{
    Swal.fire(
        'ERROR!',
        'No se pudo registrar!',
        'error'
      )
 }

$("#btnsave").on('click',()=>{
 let usuario_r = $("#usuario").val();
 let nombre_r = $("#nombre").val();
 let contraseña_r = $("#password").val();
 let contraseña2_r = $("#password2").val();
 let correo_r = $("#correo").val();
 let telefono_r = $("#telefono").val();
 
 const user ={
     usuario_r,
     nombre_r,
     contraseña_r,
     contraseña2_r,
     correo_r,
     telefono_r
 }

SaveUser(user);

})
//---------------------------------------------------------------------------------------------------------------------
//Colección de Credenciales de Usuario
const Savecredenciales = (credencial)=>{
    db.collection("Registro_credenciales").add({
        credencial,
    })
    .then(function(docRef) {
        exitoso();

    })
    .catch(function(error){
        fallo();
    });
 }

 const exitoso =()=>{
    if(Swal.fire(
        'Exelente!',
        'Datos ingresados correctamente!',
        'success'   
      ))
        window.location='home.html';

 }
const fallo =()=>{
    Swal.fire(
        'ERROR!',
        'Datos NO fueron guardados correctamente!',
        'error'
      )
 }
$("#btnsavec").on('click',()=>{
 let usuario_rc = $("#usuario").val();
 let contraseña_rc = $("#password").val();

 const credencial ={
     usuario_rc,
     contraseña_rc
     
 }

Savecredenciales(credencial);
})
//_______________________________AVANCE 4_____________________________________________________
// INTERFAZ DE REGISTRO DE ASIGNATURA
const Saveasignatura = (asignatura)=>{
    db.collection("Registro_Asignatura").add({
        asignatura,
    })
    .then(function(docRef) {
        listo();

    })
    .catch(function(error){
        nolist();
    });
 }

 const listo =()=>{
    Swal.fire(
        'Exelente!',
        'Datos ingresados correctamente!',
        'success'   
      )
        //window.location='home.html';
 }
const nolisto =()=>{
    Swal.fire(
        'ERROR!',
        'Datos NO fueron guardados correctamente!',
        'error'
      )
 }
$("#btnregistro").on('click',()=>{
 let codigo_a = $("#codigo").val();
 let asignatura_a = $("#asignatura").val();
 let carrera_a = $("#carrera").val();
 let nivel_a = $("#nivel").val();
 let docete_a = $("#docente").val();
 const asignatura ={
    codigo_a, 
    asignatura_a,
    carrera_a,
    nivel_a ,
    docete_a
 }

Saveasignatura(asignatura);
})
// INTERFAZ DE REGISTRO DE SILABO
const Savesilabo = (silabo)=>{
    db.collection("Registro_Silabo").add({
        silabo,
    })
    .then(function(docRef) {
        exelentedatos();

    })
    .catch(function(error){
        errordatos();
    });
 }

 const exelentedatos =()=>{
    Swal.fire(
        'Exelente!',
        'Datos ingresados correctamente!',
        'success'   
      )
        //window.location='home.html';
 }
const errordatos =()=>{
    Swal.fire(
        'ERROR!',
        'Datos NO fueron guardados correctamente!',
        'error'
      )
 }
$("#btnsilabo").on('click',()=>{
 let  codigo_s = $("#codigo").val();
 let  silabo_s = $("#silabo").val();
 let  carrera_s = $("#carrera").val();
 let  unidad_s = $("#unidad").val();
 let  periodo_s = $("#periodo").val();
 let  paralelo_s = $("#paralelo").val();
 let  docente_s = $("#docente").val();
  //let  archivo_s = $("#archivo").val();
 const silabo ={
    codigo_s,
    silabo_s,
    carrera_s,
    unidad_s,
    periodo_s,
    paralelo_s,
    docente_s,
    //archivo_s
 }

Savesilabo(silabo);
})
//archivo

