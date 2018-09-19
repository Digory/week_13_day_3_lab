const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Bucket = function(){
    this.url = 'http://localhost:3000/api/activities';
    this.request = new Request(this.url);
}

Bucket.prototype.getAllData = function(){
    this.request.get()
        .then((activities)=>{
            PubSub.publish('Bucket:all-data-loaded', activities);
        })
        .catch(console.error);
}

Bucket.prototype.bindEvents = function(){
    PubSub.subscribe('FormView:activity-submitted', (event)=>{
        //console.log(event);
        this.request.post(event.detail)
        .then((activities)=>{
            PubSub.publish('Bucket:all-data-loaded', activities);
        })
        .catch(console.error);
    });
}


module.exports = Bucket;    
