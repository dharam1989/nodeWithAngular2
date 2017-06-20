import mongoose from 'mongoose';
const pingdomAlerts = mongoose.model('pingdomAlerts', {
                    client_id : String,
                    service_id : String,
                    contactname : String,
                    contactid : Number,
                    checkid:Number,
                    time:Number,
                    via:String,
                    status:String,
                    messageshort : String,
                    messagefull : String,
                    sentto : String,
                    charged: Boolean, 
                    data : 'Mixed',
                    acknowledge : Boolean,
            });
//module.exports = alerts;
module.exports = pingdomAlerts
