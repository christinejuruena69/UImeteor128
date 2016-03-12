/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
var accountsData = [
	{
		name: 'Reginald Recario',
		username: regrecario,
		classes: [
			'CMSC132',
			'CMSC128']
	},
	{
        name: 'Reginald Recario',
	    username: regrecario,
	    classes: [
	    	'CMSC132', 
	    	'CMSC128']
	},
	{
	    name: 'Reginald Recario',
		username: regrecario,
		classes: [
			'CMSC132',
			'CMSC128']
	},
	{
		name: 'Reginald Recario',
		username: regrecario,
		classes: [
			'CMSC132',
			'CMSC128']
	}
];

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.namesList.helpers({
	accounts: accountsData
});
Template.viewAccount.events({
});



/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.viewAccount.onCreated(function () {
});

Template.viewAccount.onRendered(function () {
});

Template.viewAccount.onDestroyed(function () {
});
