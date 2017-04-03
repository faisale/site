var PROJECTS = (function () {
	var projects = {
		"p1" : {
			"name" : "Human Resources Analytics",
			"description" : "Using k-means clustering with outlier detection to identify target employees and understand why they are leaving the company.",
			"img": "hr.jpg",
			"link" : "https://github.com/faisale/hr-analytics/blob/master/analysis.md"
		},
		"p2" : {
			"name" : "Stock Market Analyzer",
			"description" : "A decision support system that scrapes data from Google Finance to train feedforward neural networks to predict the next day's price. Then runs an optimization model to determine the number of shares to buy.",
			"img": "stock_market.jpeg",
			"link" : "https://www.dropbox.com/s/gmktpgrptaotn4v/Stock%20Market%20Analyzer.xlsm?dl=0"
		}
		},
		HTMLimg = '<img src="images/%img%">';
		HTMLtitle = '<h1><a href="%link%" target="_blank">%name%</a></h1>',
		HTMLdesc = '<p>%data%</p>';

	function init() {
		for (var p in projects)
			{
				if (projects.hasOwnProperty(p)) {
					var formattedImg = HTMLimg.replace("%img%", projects[p].img);
					var formattedTitle = HTMLtitle.replace("%link%", projects[p].link).replace("%name%", projects[p].name);
					var formattedDesc = HTMLdesc.replace("%data%", projects[p].description);
					$(".projects").append('<div class= "proj">' + formattedImg + formattedTitle + formattedDesc + '</div>');
				}
			}
	}
	return {
		init: init
	};
})();

PROJECTS.init();
