import requestify from 'requestify';
import newRelicAlertsCollection from './../collections/newRelicAlerts';
import config from './../config/config';
module.exports = {
  getAlerts(req, res) {
       let BASEURL = config.newRelic.ApiUrl
       let APIKEY = config.newRelic.ApiKey;
       let alerts =''
       let success = function(response) {
                // get the raw response body 
                alerts = response.body;
                alerts =  JSON.parse(alerts);
                Object.keys(alerts.violations).forEach(function(key){
                 let violations = alerts.violations[key];
                 newRelicAlertsCollection.findOne( {alert_id:violations.id} , function(err, alert) {
                    if (err)
                        res.send(err)
                    
                    let dataObject = {
                            client_id:111,
                            service_id:525,
                            alert_id:violations.id,
                            alert_name:violations.policy_name + '('+ violations.entity.name+' voilated '+ violations.condition_name +')',
                            label:violations.label,
                            duration:violations.duration,
                            policy_name:violations.policy_name,
                            condition_name:violations.condition_name,
                            opened_at:violations.opened_at,
                            closed_at:violations.closed_at,
                            priority: violations.priority,
                            entity: violations.entity,  
                            links : violations.links,
                            data : violations
                            }
                    if(alert) {
                        //console.log(alert, 'Alert exist');
                        let conditions = { alert_id: violations.id };
                        let options = { multi: true };
                        newRelicAlertsCollection.update(conditions, dataObject, options, function callback (err, numAffected){

                        });
                    } 
                    else
                    {
                        dataObject.acknowledge = false;
                        newRelicAlertsCollection.create(dataObject);
                    }
                });
                 
                });
                 res.json(alerts); // return all alerts in JSON format
                //return alerts;
            }
       requestify.get(BASEURL, {
                headers : {
                    "X-Api-Key": APIKEY
                },
                body: {
                    only_open :false
                },
            }).then(success).fail(function(response) {
                console.log(response, 'RES');
                var code = response.getCode(); // Some error code such as, for example, 404 
                console.log(code, 'CODE');
            });
           
  }

}