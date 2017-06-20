import mongoose from 'mongoose';
const pagerdutyIncidents = mongoose.model('pagerdutyIncidents', {
                    client_id : String,
                    service_id : String,
                    id:String,
                    incident_number : Number,
                    title : String,
                    description:String,
                    created_at: Date,
                    status : String,
                    pending_actions:'Mixed',
                    incident_key:String,
                    service:'Mixed',
                    last_status_change_at:String,
                    escalation_policy:'Mixed',
                    alert_counts:'Mixed',
                    impacted_services : 'Mixed',
                    urgency : String,
                    type : String,
                    summary: String, 
                    self : String,
                    html_url : String,
                    acknowledge : Boolean,
            });

module.exports = pagerdutyIncidents
