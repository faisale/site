var PROJECTS = (function () {
	var projects = {
		"p1" : {
			"name" : "(Machine Learning) Titanic Survival Model",
			"link" : "https://github.com/faisale/kaggle-titanic",
			"description" : "Predictive analysis of the titanic dataset on Kaggle. An analysis of the random forest model accuracy as well as gender based and logistic regression models."
		},
		"p2" : {
			"name" : "(Exploratory Data Analysis) Hubway Data Challenge",
			"link" : "https://github.com/faisale/hubway-data-challenge",
			"description" : "Exploratory data analysis of the Hubway dataset. Utilizing effective visualization techniques to discover relationships and trend that extract valuable insights for the given data."
		},
		"p3" : {
			"name" : "(Machine Learning) Stock Mark Analyzer",
			"link" : "https://www.dropbox.com/s/gmktpgrptaotn4v/Stock%20Market%20Analyzer.xlsm?dl=0",
			"description" : "A decision support system implemented in Excel. Scrapes historical stock data from Google Finance and trains an artificial neural network to predict the following day's price. Then uses an optimization model to determine the number of shares to buy for each stock within the given budget."
		},
		"p4" : {
			"name" : "(Information Systems) Medical Equipment Tracking",
			"link" : "about:blank",
			"description" : "An information system designed to store information on medical equipment and retrieve relational information based on user requests. Link currently unavailable."
		},
		"p5" : {
			"name" : "(Forecasting) Machine Input Analysis",
			"link" : "about:blank",
			"description" : "A forecasting analysis of the input behaviour for a processing machine. Analysis conducted to explore trends and seasonality, and multiple models tested such as linear regression and Winter’s method to predict the demand for the next season. Link currently unavailable."
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
