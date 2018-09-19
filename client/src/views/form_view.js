const PubSub = require('../helpers/pub_sub.js');

const FormView = function(form){
    this.form = form;
}

FormView.prototype.bindEvents = function(){
    this.form.addEventListener('submit', (event)=>{
        this.handleSubmit(event);
    })
}

FormView.prototype.handleSubmit = function(event){
    event.preventDefault();
    const newActivity = this.createActivity(event.target);
    PubSub.publish('FormView:activity-submitted', newActivity);
    event.target.reset();
}

FormView.prototype.createActivity = function(formDetails){
    const newActivity = {
        name: formDetails.name.value,
        location: formDetails.location.value,
        done: formDetails.done.value
    };
    return newActivity;
}


module.exports = FormView;