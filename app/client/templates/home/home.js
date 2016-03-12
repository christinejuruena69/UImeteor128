var user;
function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
           return  radios[i].value; // if so, hold its value in  return value of checked radio or undefined if none checked
        }
    }
}
// get value of selected 'ship' radio button in 'demoForm'
user = getRadioVal( document.getElementById('userbtn'), 'user' );
alert(val);

/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
	userHelper: function  () {
		// body...
		if (user=="Admin") return Template.accountCard;
		else if(user=="Teacher") return Template.classCard;
    // note that we return a Template object, not a string
	}
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});



// fucntions
