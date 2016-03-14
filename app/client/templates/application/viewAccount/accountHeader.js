// alert(Session.get('adminAccount'));
// alert(Session.get('teacherAccount'));


Template.accountHeader.helpers({
	determineUser : function(){
		if (Session.get('teacherAccount')){
			return true;
		}else {
			return false;
		}
		
	}
});