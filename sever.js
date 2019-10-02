const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use(logger("dev"));

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

mongoose.connect(
    process.env.MONOGODB_URI || "mongodb://localhost/quiz_app_db",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

app.listen(PORT, function(){
    console.log("API Server listening on PORT", PORT);
});