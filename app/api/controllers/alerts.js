import alerts from './../models/alert';
// Alerts controller
module.exports =  {
 fetchAllNewRelicAlerts(req, res, next) {
     console.log("API:Alerts controller:fetchAllNewRelicAlerts");
     alerts.fetchAllNewRelicAlerts().then((alerts)=> {
      return  res.json(alerts); 
    }).catch((err)=> {
      console.log("catch", err);
      return next();
    })
    
  },
  fetchAllCloudWatchAlerts(req, res) {
     console.log("API:Alerts controller:fetchAllNewRelicAlerts");
     alerts.fetchAllCloudWatchAlerts().then((alerts)=> {
      return  res.json(alerts); 
    });
    
  },

  fetchAllPingdomAlerts(req, res) {
     console.log("API:Alerts controller:fetchAllNewRelicAlerts");
     alerts.fetchAllPingdomAlerts().then((alerts)=> {
      return  res.json(alerts); 
    });
    
  },
  fetchAllPagerDutyIncidents(req, res) {
     console.log("API:Alerts controller:fetchAllNewRelicAlerts");
     alerts.fetchAllPagerDutyIncidents().then((alerts)=> {
      return  res.json(alerts); 
    });
    
  }

}
