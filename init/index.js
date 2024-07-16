const mongoose = require("mongoose");
const initData= require("./data.js");

const mongoUrl = 'mongodb://127.0.0.1:27017/BookStore';

const Book = require("../models/bookSchema.js");

main()
.then(()=>{
    console.log("Database is connected");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoUrl);
}

const initDB = async()=> {
    await Book.deleteMany({});
    await Book.insertMany(initData.data);
    console.log("data was saved");
}
initDB();
