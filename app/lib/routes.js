Router.configure({
    layoutTemplate: 'masterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

Router.route('/', {
    // name: 'home',
    name: 'Home',
    // template: 'Home',
    controller: 'HomeController',
    where: 'client'
});

Router.route('/register', {
    name: 'RegisterForm',
    controller: 'HomeController',
    where: 'client'
});

Router.route('/login', {
    name: 'LoginForm',
    controller: 'HomeController',
    where: 'client'
});

Router.route('/ViewTeacherAccount', {
    name: 'ViewTeacherAccount',
    template: 'ViewTeacherAccount'
});

Router.route('/randomizer', {
    name: 'randomizerWindow',
    template: 'randomizerWindow'
});

Router.route('/mainClassView', {
    name: 'mainClassView',
    template: 'mainClassView'
});

Router.route('/studentListView', {
    name: 'studentListView',
    template: 'studentListView'
});
