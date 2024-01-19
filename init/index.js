const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const ExpressError=require("../utils/ExpressError.js");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main().then( () => {
    console.log("connected to DB");
}).catch(err => {
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "65a07f32265eb15c0b4e0303"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");   
};

initDB();