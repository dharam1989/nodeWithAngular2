import express from 'express';
const router = express.Router();
import alertModel from './models/alert';
import controllers from "./controllers";
import PublicException from "./../publicException";
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/newRelicAlerts', controllers.alerts.fetchAllNewRelicAlerts);

router.get('/coudWatchAlerts', controllers.alerts.fetchAllCloudWatchAlerts);

router.get('/pingdomAlerts', controllers.alerts.fetchAllPingdomAlerts);

router.get('/pagerdutyAlerts', controllers.alerts.fetchAllPagerDutyIncidents);


// create todo and send back all user after creation
router.post('/alert', function(req, res) {
return alertModel.create(req, res);
});

//router.all("*", function(req, res) {
 //      throw new PublicException(404);
//})

router.all('*', function(req, res) {
       let response = {
            success : false,
            error : 'Invalid API'
        }
        res.status(404);
        res.json(response);
});


module.exports = router;