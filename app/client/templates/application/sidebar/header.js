Template.header.events({
    'click': function(e) {
    	e.preventDefault();
    	$("#wrapper").toggleClass("toggled");
    }
});