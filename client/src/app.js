const Bucket = require('./models/bucket.js');
const ListView = require('./views/list_view');

document.addEventListener('DOMContentLoaded', ()=>{
    const bucket = new Bucket();
    bucket.getAllData();

    const allActivitiesContainer = document.querySelector('#all-activities-container');
    const listView = new ListView(allActivitiesContainer);
    listView.bindEvents();


});