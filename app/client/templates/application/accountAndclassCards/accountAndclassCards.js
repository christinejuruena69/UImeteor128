/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.accountAndclassCards.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
// alert(Session.get('adminAccount'));
// alert(Session.get('teacherAccount'));


Template.accountAndclassCards.helpers({
	determineUser : function(){
		if (Session.get('teacherAccount')){
			return true;
		}else {
			return false;
		}
		
	}
});
/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.accountAndclassCards.onCreated(function () {
});

Template.accountAndclassCards.onRendered(function () {
});

Template.accountAndclassCards.onDestroyed(function () {
});
