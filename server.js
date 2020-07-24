const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds137230.mlab.com:37230/heroku_6smj5tm5", { 
useNewUrlParser: true,
useFindAndModify: false
});

app.use(require("./routes"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
