Router.configure({
    layoutTemplate: 'masterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

Router.route('/', {
    name: 'Home',
    // template: 'Home',
    controller: 'HomeController',
    where: 'client'
});

Router.route('/viewTeacherAccount', {
    name: 'viewTeacherAccount',
    template: 'viewTeacherAccount'
});

Router.route('/randomizer', {
    name: 'randomizerWindow',
    template: 'randomizerWindow'
});


//Makes sideBar template the main layout
// Router.configure({
//   layoutTemplate: 'sideBar'
// });

//Para sa main page
