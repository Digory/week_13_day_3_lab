const ActivityView = function(mainContainer){
    this.mainContainer = mainContainer;
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

ActivityView.prototype.determineDone = function(stringBoolean){
    if(stringBoolean === "true"){
        return "You have done this, mate.";
    }
        return "You haven't done this, mate.";
}



module.exports = ActivityView;

