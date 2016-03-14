/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
// Template.Home.events({

// });

// Session.setDefault('myTemplate', 'Home');
// "click .adminbtn": function (event) {
//     Session.set("myTemplate", 'accountCard');
// }

// good
// Session.setDefault('accountCard', false);
// Template.body.isTrue = function() { Session.get('accountCard'); }
// Template.Home.events({
//     'click .adminbtn': function(){
//         //load a new template
//         console.log("You pressed the addNewplace button");//this fn is called properly
//            Session.set('accountCard', true);
//            Blaze.renderWithData(Template.accountCard);
//     }
// });
Template.Home.events({
    'click .adminbtn': function(){
        console.log("Pressed");//this fn is called properly
        Session.set('teacherAccount', false);
        Session.set('adminAccount', true);
    },
    'click .teacherbtn': function(){
        console.log("Pressed teachr");//this fn is called properly
        Session.set('adminAccount', false);
        Session.set('teacherAccount', true);
    }
});
Template.Home.helpers({    
    'adminAccount': function(){
        return Session.get('adminAccount');
    },
    'teacherAccount': function(){
        return Session.get('teacherAccount');
    }

});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
// Template.Home.helpers({
// 	// tab: function() {
//  //    return Template.instance().currentTab.get();
//  //  },
  
// });

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
	 // this.UserTemplate = new ReactiveVar( false );
	 // this.currentTab = new ReactiveVar( "accountCard" );
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});



// fucntions
