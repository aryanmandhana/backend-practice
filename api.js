const express = require("express");
const axios = require ("axios");

const app = express();

app.use(express.urlencoded({extended:"true"}));

app.post("/",(req,res)=>{
    const tempURL = "https://v6.exchangerate-api.com/v6/c79892fca6ce5a723bb3fe4d/pair/";
    const amount = Number(req.body.input1);
    const currCode1 = req.body.conver_form;

    const currCode2 = req.body.conver_to;
    const finalURL = `${tempURL}/${currCode1}/${currCode2}`;
    console.log(finalURL);
    axios({
        method:"get",
        url:"finalURL",
    }).then(
        (response)=>{
            const result = response.data.conversion_rate * amount;
            res.send(
                amount + "in" + currCode1 + "to" + currCode2 + "=" + result
            );
        },
        (error)=>{
            console.log(error);
        }
    )

});

app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/api.html`)
});

app.listen(5000, () => {
    console.log("i am at 5000")
})