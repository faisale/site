var NAVIGATION = (function () {
	var nav = {
			"home" : {
				"name" : "HOME",
				"link" : "index.html"},
			"profile" : {
				"name" : "PROFILE",
				"link" : "profile.html"},
			"projects" : {
				"name" : "PROJECTS",
				"link" : "projects.html"},
			"experience" : {
				"name" : "EXPERIENCE",
				"link" : "experience.html"}
		},
		contact = {
			"mail" : {
				"name" : "fa fa-envelope-square",
				"link" : "mailto:faelhuss@uwaterloo.ca"},
			"github" : {
				"name" : "fa fa-github-square",
			   	"link" : "https://github.com/faisale"},
			"linkedin" : {
				"name" : "fa fa-linkedin-square",
			   	"link" : "https://ca.linkedin.com/in/faisale"}
		},
		HTMLnavBarItem = '<li><a href="%link%">%page%</a></li>',
		HTMLcontactBarItem = '<a href="%link%" target="_blank"><span class="%icon%"/></a> ';

	function init () {
		for (var section in nav)
		{
			if (nav.hasOwnProperty(section)) {
				var formattedNavBarItem = HTMLnavBarItem.replace("%link%", nav[section].link).replace("%page%", nav[section].name);
				$("#navBar").append(formattedNavBarItem);
			}
		}
		for (var item in contact)
		{
			if (contact.hasOwnProperty(item)) {
				var formattedcontactBarItem = HTMLcontactBarItem.replace("%link%", contact[item].link).replace("%icon%", contact[item].name);
				$("#contactBar").append(formattedcontactBarItem);
			}
		}
	}

	return {
		init:init
	};
})();

NAVIGATION.init();