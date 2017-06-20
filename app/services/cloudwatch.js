import cloudwatch from 'aws-sdk/clients/cloudwatch';
import config from './../config/config';
import cloudwatchAlarmsCollection from './../collections/cloudwatchAlarms';
//import AWS from 'aws-sdk';
//AWS.config.loadFromPath('./app/api/services/config.json');
// Set credentials and region
let CW = new cloudwatch({
    correctClockSkew: true,
    apiVersion: config.cloudwatch.ApiVersion,
    region: config.cloudwatch.region, 
    credentials: config.cloudwatch.credentials
  });

module.exports = {
    getAlerts(req, res) {
        let describeAlarmsParam = {
            //ActionPrefix: 'STRING_VALUE',
           // AlarmNamePrefix: 'STRING_VALUE',
           // AlarmNames: [
          //      'STRING_VALUE',
                /* more items */
           // ],
           // MaxRecords: 0,
           // NextToken: 'STRING_VALUE',
          //  StateValue: OK | ALARM | INSUFFICIENT_DATA
        };
        CW.describeAlarms(describeAlarmsParam, function(err, data) {
            if (err) console.log('Error', err); // an error occurred
            else  {  
                        // successful response
                 //let Alarms =  JSON.parse(data);
                 let Alarms =  data;
                Object.keys(Alarms.MetricAlarms).forEach(function(key){
                    let dataObject = Alarms.MetricAlarms[key];
                    let Jsondata = JSON.stringify(dataObject);
                    cloudwatchAlarmsCollection.findOne( {AlarmName:dataObject.AlarmName} , function(err, alarm) {
                        if (err)
                        res.send(err)
                        
                        dataObject.client_id = 101;
                        dataObject.service_id = 555;
                        dataObject.data = Jsondata;

                        if(alarm) {
                             let conditions = { AlarmName: dataObject.AlarmName };
                             let options = { multi: true };
                            cloudwatchAlarmsCollection.update(conditions, dataObject, options, function callback (err, numAffected){

                            });

                        } else {
                            dataObject.acknowledge = false;
                            cloudwatchAlarmsCollection.create(dataObject);
                        }
                    });
                    
                });
                 res.json(Alarms.MetricAlarms); // return all alerts in JSON format
            }
        });
       
    },

    getMetricStatistics(req, res) {
       var params = {
                EndTime: '2017-06-19T12:00:00Z',//1497361557, /* required */
                MetricName: 'CPUUtilization', /* required */
                Namespace: 'AWS/EC2', /* required */
                Period: 1, /* required */
                StartTime: '2017-06-09T12:00:00Z',// 1497347159, /* required */
                ExtendedStatistics: [
                ],
                Statistics: [
                    'Average'
                ],
        };
        CW.getMetricStatistics(params, function(err, data) {
            if (err){
                 res.json(err.stack);    
            } 
                else  {
                     console.log(data, 'getMetricStatistics');           // successful response
                      res.json(data); // return all alerts in JSON format
                }  

                
            });
    }
}