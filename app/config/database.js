import mongoose from 'mongoose';
export default {
         connect(){
            mongoose.connect('mongodb://localhost:27017/noc');     // connect to mongoDB database on modulus.io
        }
    }