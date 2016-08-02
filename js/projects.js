var PROJECTS = (function () {
	var projects = {
		"p1" : {
			"name" : "(Machine Learning) Titanic Survival Model",
			"link" : "https://github.com/faisale/kaggle-titanic",
			"description" : "Predictive analysis of the titanic dataset from Kaggle. Multiple models tested."
		},
		"p2" : {
			"name" : "(Exploratory Data Analysis) Hubway Data Challenge",
			"link" : "https://github.com/faisale/hubway-data-challenge",
			"description" : "Exploratory data analysis of the Hubway dataset. Utilizing effective visualization techniques to discover relationships and trend that extract valuable insights for the given data."
		},
		"p3" : {
			"name" : "(Machine Learning) Stock Mark Analyzer",
			"link" : "https://www.dropbox.com/s/gmktpgrptaotn4v/Stock%20Market%20Analyzer.xlsm?dl=0",
			"description" : "A decision support system implemented in Excel. Scrapes historical stock data from Google Finance and trains an artificial neural network to predict the following day's price. Then uses an optimization model to determine the number of shares to buy for each stock."
		},
		"p4" : {
			"name" : "(Information Systems) Medical Equipment Tracking",
			"link" : "about:blank",
			"description" : "An information system designed to track medical assets and retrieve relational information. Link currently unavailable."
		},
		"p5" : {
			"name" : "(Forecasting) Machine Input Analysis",
			"link" : "about:blank",
			"description" : "Applying forecasting methods for a machine's input in multiple seasons to determine if the behaviour can be predicted. Link currently unavailable."
		}
		},
		HTMLtitle = '<h1><a href="%link%" target="_blank">%name%</a></h1>',
		HTMLdesc = '<p>%data%</p>';

	function init() {
		for (var p in projects)
			{
				if (projects.hasOwnProperty(p)) {
					var formattedTitle = HTMLtitle.replace("%link%", projects[p].link).replace("%name%", projects[p].name);
					$("#projects").append(formattedTitle);
					var formattedDesc = HTMLdesc.replace("%data%", projects[p].description);
					$("#projects").append(formattedDesc);
				}
			}
	}
	return {
		init: init
	};	
})();

PROJECTS.init();
