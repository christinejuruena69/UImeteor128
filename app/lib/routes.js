Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

Router.route('/', {
    name: 'Home',
    // template: 'Home',
    controller: 'HomeController',
    where: 'client'
});

Router.route('/viewAccount', {
    name: 'viewAccount',
    template: 'viewAccount'
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
