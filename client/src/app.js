const Bucket = require('./models/bucket.js');
const ListView = require('./views/list_view');

document.addEventListener('DOMContentLoaded', ()=>{
    const bucket = new Bucket();
    bucket.getAllData();

    const listView = new ListView();
    listView.bindEvents();

});