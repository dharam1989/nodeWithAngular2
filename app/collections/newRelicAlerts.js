import mongoose from 'mongoose';
const newRelicAlerts = mongoose.model('newRelicAlerts', {
                    client_id : String,
                    service_id : String,
                    alert_id : String,
                    alert_name : String,
                    label:String,
                    duration:Number,
                    policy_name:String,
                    condition_name:String,
                    opened_at : String,
                    closed_at : String,
                    priority : String,
                    entity: 'Mixed',  
                    links : 'Mixed',
                    data : 'Mixed',
                    acknowledge : Boolean,
            });
module.exports = newRelicAlerts;
//export default newRelicAlerts
