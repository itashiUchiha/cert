
//send emmail
const contactForm =  document.querySelector(".contact-form");
let prenom = document.getElementById("prenom");
let nom= document.getElementById("nom");
let phone = document.getElementById("phone");
let email  = document.getElementById("email");
let message = document.getElementById("message");
contactForm.addEventListener("submit", (e)=>{
    e.preventDefault();

     let formData = {
        nom: nom.value,
        email: email.value,
        prenom: prenom.value,
        phone:phone.value,
        message: message.value
    }
let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type","application/json");
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText=="success"){
            alert("l'email a été envoyer");
            nom.value= "";
            email.value="";
            prenom.value="";
            phone.value="";
            message.value="";
        }else{
            alert("l'email a ete envoyer");
            
        }
    }
    xhr.send(JSON.stringify(formData));
});
//fin send email

//download document
const http = require("http");
const fd = require("fs");
const server = http.createServer(function(req,res){
    let pdf = __dirname + "../pdf/PrÃ©sentation CERT-Sarl.pdf";
    fd.access(pdf,fs.constants.F_OK, err => {
        // check that we can acces the file
        console.log('${"pdf"} ${err ? "does not exist : "exists"} ');
    });

    fs.readFile(pdf, function(err,content){
        if(err){
            res.writeHead(404,{"content-type": "text/html"});
            res.end("<h1> pas de pdf</h1>");
        }else{
            //specify the content type in thz response will be a pdf
            res.writeHead(200,{"content-type":"applicaion/pdf"});
            res.end(content);
        }
    });
});

//fin download document