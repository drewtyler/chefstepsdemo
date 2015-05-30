if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.emails.helpers({
    getUniqueEmailCounter: function () {
      return Session.get('counter');
    }
  });

  Template.emails.events({
    'click button': function () {
	$('#outputEmails').empty();
	var uniques = {};
	var counter = 0;
	var lines = $('#inputEmails').val().split('\n');
	for(var i = 0; i < lines.length; i++) {
		if(!uniques.hasOwnProperty(lines[i])) {
			uniques[lines[i]] = true;
			counter++;
			$('#outputEmails').append('<li>' + lines[i] + '</li');			
		}
	}
	Session.set('counter',counter);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
