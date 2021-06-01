
import firebase from '../firebase'
var messageRef=firebase.database().ref('mensajes');
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name=getInputVal('nombre');
    var lastName=getInputVal('apellido');
    var phone=getInputVal('cell');
    var email=getInputVal('email');
    var message=getInputVal('mensaje');
    saveMessage(name,lastName,phone,email,message)
    
}

function getInputVal(id){
    return document.getElementById(id).value;

}
function saveMessage(name,lastName,phone,message){
    var newMessageref=messageRef.push();
    newMessageref.set({
        name:name,
        lastName:lastName,
        phone:phone,
        email:email,
        message:message

    });

}