const Bucket = require('./models/bucket.js');
const ListView = require('./views/list_view');
const FormView = require('./views/form_view');

document.addEventListener('DOMContentLoaded', ()=>{
    const bucket = new Bucket();
    bucket.getAllData();
    bucket.bindEvents();
    

    const allActivitiesContainer = document.querySelector('#all-activities-container');
    const listView = new ListView(allActivitiesContainer);
    listView.bindEvents();

    const form = document.querySelector('#sightings-form');
    const formView = new FormView(form);
    formView.bindEvents();

});