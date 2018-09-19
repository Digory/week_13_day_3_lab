const ActivityView = function(mainContainer){
    this.mainContainer = mainContainer;
}

ActivityView.prototype.render = function(activity){
    const container = document.createElement('div');
    container.id = "activity";

    const name = this.createHeading(activity.name);
    container.appendChild(name);







    this.mainContainer.appendChild(container);
}

ActivityView.prototype.createHeading = function(textContent){
    const heading = document.createElement('h2');
    heading.textContent = textContent;
    return heading;
}

module.exports = ActivityView;

