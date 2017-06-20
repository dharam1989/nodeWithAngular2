import requestify from 'requestify';
import dateTime from 'node-datetime';
import pagerdutyIncidentsCollection from './../collections/pagerdutyIncidents';
import config from './../config/config';
module.exports = {
//export default {
  getAlerts(req, res) {
       let BASEURL = config.pagerduty.ApiUrl
       let APIKEY  = config.pagerduty.ApiKey;
       let auth = "Token token="+APIKEY;
       let incidents = '';
       let success = function(response) {
                // get the raw response body 
                incidents = response.body;
                incidents =  JSON.parse(incidents);
                incidents =  incidents.incidents;
                Object.keys(incidents).forEach(function(key){
                    let incidentData = incidents[key];
                    //let Jsondata = JSON.stringify(dataObject);
                     let conditions = {id:incidentData.id, incident_number:incidentData.incident_number};
                    pagerdutyIncidentsCollection.findOne( conditions , function(err, incident) {
                        if (err)
                        res.send(err)
                        
                         let dataObject = {
                            client_id:150,
                            service_id:150,
                            id:incidentData.id,
                            incident_number : incidentData.incident_number,
                            title : incidentData.title,
                            description:incidentData.description,
                            created_at: incidentData.created_at,
                            status : incidentData.status,
                            pending_actions:incidentData.pending_actions,
                            incident_key:incidentData.incident_key,
                            service:incidentData.service,
                            last_status_change_at:incidentData.last_status_change_at,
                            escalation_policy:incidentData.escalation_policy,
                            alert_counts:incidentData.alert_counts,
                            impacted_services : incidentData.impacted_services,
                            urgency : incidentData.urgency,
                            type : incidentData.type,
                            summary: incidentData.summary, 
                            self : incidentData.self,
                            html_url : incidentData.html_url,
                            }

                        if(incident) {
                             let options = { multi: true };
                            pagerdutyIncidentsCollection.update(conditions, dataObject, options, function callback (err, numAffected){

                            });

                        } else {
                            dataObject.acknowledge = false;
                            pagerdutyIncidentsCollection.create(dataObject);
                        }
                    });
                    
                });
                res.json(incidents); // return all incidents in JSON format
            }
       let dt = dateTime.create();
       dt.offsetInDays(-1); // one day before date
       let since = dt.format('Y-m-d');
       let url =  BASEURL+'?since='+since;
       console.log(url);
       requestify.get(url, {
                headers : {
                    "Accept":'application/vnd.pagerduty+json;version=2',
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