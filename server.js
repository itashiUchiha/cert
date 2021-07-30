const { text } = require('express');
const  express = require('express')
const app = express();
const nodemailer =  require("nodemailer");
const PORT = process.env.PORT || 5000;
//middleware
app.use(express.static("public"));
app.use(express.json())


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})
app.post('/',(req,res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
                user:"itashi1499@gmail.com",
                pass:"marscheikh14"

        }
    })
    const mailOptions= {
        from: (`serveur running ${req.body.email}`),
        to: "itashi1499@gmail.com",
        subject: req.body.email,
        text: req.body.message


        
    } 

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log("Email envoyer "+info.response)   ;
            res.send("envoyer");
            }
    })

})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
