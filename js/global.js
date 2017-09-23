var NAVIGATION = (function () {
	var nav = {
			"home" : {
				"name" : "home",
				"link" : "index"},
			"projects" : {
				"name" : "projects",
				"link" : "projects"},
			"experience" : {
				"name" : "experience",
				"link" : "experience"}
		},
		contact = {
			"email" : {
				"name" : "fa fa-envelope",
				"link" : "mailto:faelhuss@edu.uwaterloo.ca"},
			"github" : {
				"name" : "fa fa-github",
			   	"link" : "https://github.com/faisale"},
			"linkedin" : {
				"name" : "fa fa-linkedin",
			   	"link" : "https://ca.linkedin.com/in/faisale"}
		},
		HTMLnavBarItem = '<li><a href="%link%">%page%</a></li>',
		HTMLcontactBarItem = '<li><a href="%link%" target="_blank" class="%identity%"><span class="%icon%"/></a></li>';

	function init () {
		for (var section in nav)
		{
			if (nav.hasOwnProperty(section)) {
				var formattedNavBarItem = HTMLnavBarItem.replace("%link%", nav[section].link).replace("%page%", nav[section].name);
				$(".nav").append(formattedNavBarItem);
			}
		}
		for (var item in contact)
		{
			if (contact.hasOwnProperty(item)) {
				var formattedContactBarItem = HTMLcontactBarItem.replace("%link%", contact[item].link).replace("%icon%", contact[item].name).replace("%identity%", item);
				$(".footer").append(formattedContactBarItem);
			}
		}
	}

	return {
		init:init
	};
})();

NAVIGATION.init();
