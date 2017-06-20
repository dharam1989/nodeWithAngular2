import mongoose from 'mongoose';
const Alarms = mongoose.model('cloudwatchAlarms', {
                    client_id : String,
                    service_id : String,
                    AlarmName : String,
                    AlarmArn : String,
                    AlarmDescription : String,
                    AlarmConfigurationUpdatedTimestamp : String,
                    ActionsEnabled : String,
                    OKActions: Array, 
                    AlarmActions:Array,
                    InsufficientDataActions:Array,
                    StateValue: String,
                    StateReason:String,
                    StateReasonData:String,
                    StateUpdatedTimestamp:String,
                    MetricName:String,
                    Namespace:String,
                    Statistic:String,
                    Dimensions:Array,
                    Period:Number, 
                    EvaluationPeriods:Number,
                    Threshold:Number,
                    ComparisonOperator:String,
                    data : 'Mixed',
                    acknowledge : Boolean,
            });
//module.exports = alerts;
module.exports = Alarms
