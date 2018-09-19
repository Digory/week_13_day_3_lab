const PubSub = require('../helpers/pub_sub.js');

const ListView = function(container){
    this.container = container;
}

ListView.prototype.bindEvents = function(){
    PubSub.subscribe('Bucket:all-data-loaded', (event)=>{
    })
}



module.exports = ListView;