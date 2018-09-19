const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const ActivityView = function(mainContainer){
    this.mainContainer = mainContainer;
    this.url = 'http://localhost:3000/api/activities';
    this.request = new Request(this.url);
}

ActivityView.prototype.render = function(activity){
    const container = document.createElement('div');
    container.id = "activity";

    const name = this.createHeading(activity.name);
    container.appendChild(name);

    const location = this.createDetail(activity.location);
    container.appendChild(location);

    const determineContentOfDone = this.determineDone(activity.done);
    const doneContainer = this.createDetail(determineContentOfDone);
    container.appendChild(doneContainer);

    if(activity.done === "false"){
        const doneButton = this.createButton(activity);
        container.appendChild(doneButton);
    }
    this.mainContainer.appendChild(container);
}

ActivityView.prototype.createHeading = function(textContent){
    const heading = document.createElement('h2');
    heading.textContent = textContent;
    return heading;
}

ActivityView.prototype.createDetail = function(textContent){
    const detail = document.createElement('p');
    detail.textContent = textContent;
    return detail;
}

ActivityView.prototype.createButton = function(activity){
    console.log(activity._id);
    const id = activity._id;
    const button = document.createElement('button');
    button.textContent = "&#x2714";
    button.addEventListener('click', (event)=>{
        const newActivityDetails = {
            name: activity.name,
            location: activity.location,
            done: "true"
        }
        this.request.put(newActivityDetails, id)
        .then((activities)=>{
            PubSub.publish('Bucket:all-data-loaded', activities);
        })
        .catch(console.error);
    });
    return button;
}

ActivityView.prototype.determineDone = function(stringBoolean){
    if(stringBoolean === "true"){
        return "You have done this, mate.";
    }
        return "You haven't done this, mate.";
}



module.exports = ActivityView;

