import express from 'express';
const router = express.Router();
import {cloudwatch, newRelic, pingdom, pagerduty} from './';

// routes ======================================================================
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('Services works');
});

router.get('/newrellic/getalert', function(req, res) {
return newRelic.getAlerts( req, res);
});

router.get('/cloudwatch/getalert', function(req, res) {
        return cloudwatch.getAlerts(req, res);
});

router.get('/cloudwatch/getMetricStatistics', function(req, res) {
        return cloudwatch.getMetricStatistics(req, res);
});

router.get('/pingdom/getalert', function(req, res) {
        return pingdom.getAlerts(req, res);
});

router.get('/pagerduty/getalert', function(req, res) {
        return pagerduty.getAlerts(req, res);
});

router.all('/*', function(req, res) {
       let response = {
            success : false,
            error : 'Invalid service API'
        }
        res.status(404);
        res.json(response);
});

module.exports = router;