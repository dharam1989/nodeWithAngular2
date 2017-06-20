export default {
        newRelic:{
            ApiUrl : 'https://api.newrelic.com/v2/alerts_violations.json',
            ApiKey :'9000059044ac4df6f2f8b68e00d87b1ae13121c92968897'
        },
        cloudwatch : {
            ApiVersion : '2010-08-01',
            region     : 'ap-southeast-1',
            credentials: {"accessKeyId": "AKIAJ2URBFADGQGDYRKQ", "secretAccessKey": "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"}
        },
        pingdom : {
            ApiUrl:'https://api.pingdom.com/api/2.0/actions',
            ApiKey:'nk9jt4hp9zf7pr11b1l2yqrc55ml6po9',
            userName:'server.support@webdunia.net',
            password:'webdunia@123'
        },
        pagerduty :{
            ApiUrl:'https://api.pagerduty.com/incidents',
            ApiKey:'Hc9i8_jGmjuczWF3GXq2',
        }
        
    }