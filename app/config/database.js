import mongoose from 'mongoose';
export default {
         connect(){
             mongoose.Promise = global.Promise;// Because mongoose default promise not work. We can also use mongoose.Promise = require('bluebird'); 
            mongoose.connect('mongodb://localhost:27017/noc');     // connect to mongoDB database on modulus.io
        }
    }