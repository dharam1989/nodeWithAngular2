import {pagerdutyIncidents as pagerdutyIncidentsCollection, pingdomAlerts as pingdomAlertsCollection } from './../../collections';
import {newRelicAlerts as newRelicAlertsCollection, cloudwatchAlarms as cloudwatchAlarmsCollection } from './../../collections';
module.exports = {

  fetchAllNewRelicAlerts() {
     console.log("API:Alert:fetchAllNewRelicAlerts");
     return newRelicAlertsCollection.find(function(err, alerts) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                return err;

          return  alerts;
        });
  },
  
  fetchAllCloudWatchAlerts() {
     console.log("API:Alert:fetchAllCloudWatchAlerts");
    return cloudwatchAlarmsCollection.find(function(err, alerts) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                 return err;

          return alerts; 
        });
  },
  fetchAllPingdomAlerts() {
     console.log("API:Alert:fetchAllPingdomAlerts");
     return pingdomAlertsCollection.find(function(err, alerts) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
               return err;

          return alerts; 
        });
  },

  fetchAllPagerDutyIncidents(req, res) {
     console.log("API:Alert:fetchAllPagerDutyIncidents");
     return pagerdutyIncidentsCollection.find(function(err, alerts) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                return err;

          return  alerts;
        });
  },
 
  fetch(where) {
     console.log("API:Alert fetch");
    return newRelicAlertsCollection.findOne( where , function(err, alert) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err){
                   console.log("err", err);
                    return err;
            }
              

          return alert;
        });
  }

}
