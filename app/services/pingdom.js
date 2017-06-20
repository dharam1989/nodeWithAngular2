import requestify from 'requestify';
import pingdomAlertsCollection from './../collections/pingdomAlerts';
import config from './../config/config';
module.exports = {
  getAlerts(req, res) {
       let BASEURL = config.pingdom.ApiUrl
       let APIKEY  = config.pingdom.ApiKey;
       let username= config.pingdom.userName;
       let password= config.pingdom.password;
       let auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
       let alerts = '';
       let success = function(response) {
                // get the raw response body 
                alerts = response.body;
                alerts =  JSON.parse(alerts);
                alerts =  alerts.actions.alerts;
                Object.keys(alerts).forEach(function(key){
                    let dataObject = alerts[key];
                    let Jsondata = JSON.stringify(dataObject);
                    pingdomAlertsCollection.findOne( dataObject , function(err, alert) {
                        if (err)
                        res.send(err)
                        
                        dataObject.client_id = 102;
                        dataObject.service_id = 666;
                        dataObject.data = Jsondata;

                        if(alert) {
                             let conditions = dataObject;
                             let options = { multi: true };
                            pingdomAlertsCollection.update(conditions, dataObject, options, function callback (err, numAffected){

                            });

                        } else {
                            dataObject.acknowledge = false;
                            pingdomAlertsCollection.create(dataObject);
                        }
                    });
                    
                });
                res.json(alerts); // return all alerts in JSON format
                //return alerts;
            }
       requestify.get(BASEURL, {
                headers : {
                    "App-Key": APIKEY,
                    "Authorization" : auth
                },
                body: {
                    
                },
            }).then(success).fail(function(response) {
                console.log(response, 'RES');
                var code = response.getCode(); // Some error code such as, for example, 404 
                console.log(code, 'CODE');
            });
           
  }

}