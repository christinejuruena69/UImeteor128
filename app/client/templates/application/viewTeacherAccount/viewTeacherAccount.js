
/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
if (Meteor.isClient) {
        // $(window).scroll(function(){
        //     if($(document).scrollTop() >= $(window).height() / 2 ) {
        //         // $('.account-body-header').addClass('header');
        //         $('.account-header').addClass('smaller');

        //     } else {
        //         // $('.account-body-header').removeClass('header');
        //         $('.account-header').removeClass('smaller');
        //     }
        // });
//dont delete

    $(window).scroll(function () {
        if ($(document).scrollTop() > 0)
        {
            // element has been scrolled into view
            // alert('element scrolled into view');
            $('#header').addClass('smaller');
            $('.account-header').addClass('smaller');
        }else{
            $('#header').removeClass('smaller');
            $('.account-header').removeClass('smaller');

        }
    });
    function isScrolledIntoView(elem){
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
}
Template.viewTeacherAccount.events({
}); 
Template.viewTeacherAccount.helpers({
    loadCourses : function(){
        Session.set('adminAccount', false);
        Session.set('teacherAccount', true);
        return true;
    }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.viewTeacherAccount.onCreated(function () {
});

Template.viewTeacherAccount.onRendered(function () {
});

Template.viewTeacherAccount.onDestroyed(function () {
});
