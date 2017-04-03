$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1300) {
    		$('#legend').html('SKILLS<br/>WORK EXPERIENCE<br/><span>INDEPENDENT COURSEWORK</span>');
		} else if ($(this).scrollTop() > 300) {
			$('#legend').html('SKILLS<br/><span>WORK EXPERIENCE</span><br/>INDEPENDENT COURSEWORK');
		} else {
    		$('#legend').html('<span>SKILLS</span><br/>WORK EXPERIENCE<br/>INDEPENDENT COURSEWORK');
		}
	});
});

var SKILLS = (function () {
	var languages = ['C#', 'CSS', 'HTML', 'JavaScript', 'Python', 'SQL', 'VBA'],
		packages = ['jQuery', 'NumPy', 'Matplotlib', 'Pandas', 'SciPy', 'Scikit-learn'],
		general = ['Algorithms and Data Structures', 'Data Mining', 'Data Wrangling', 'Databases', 'Machine Learning', 'Process Improvement (LSS)'];

	function init () {
		var fadeLanguages = '<span>' + languages.join('</span><br/><span>') + '</span>';
		$(fadeLanguages).hide().appendTo("#languages").each(function(i){
			$(this).delay(50 * i).fadeIn(300);
		});
		var fadePackages = '<span>' + packages.join('</span><br/><span>') + '</span>';
		$(fadePackages).hide().appendTo("#packages").each(function(i){
			$(this).delay(50 * i).fadeIn(300);
		});
		var fadeGeneral = '<span>' + general.join('</span><br/><span>') + '</span>';
		$(fadeGeneral).hide().appendTo("#general").each(function(i){
			$(this).delay(50 * i).fadeIn(300);
		});
	}

	return {
		init:init
	};
})();

var EXPERIENCE = (function () {
	var jobs = {
		"j1" : {
			"company" : "SAP Labs",
			"position" : "Engineer/Data Scientist",
			"date" : "JAN 2017 &ndash; APR 2017",
			"location" : "PALO ALTO, CA",
			"description" : "Experimented with deep learning models such as LSTM and RNN to power SAP’s Conversational AI Platform by using natural language processing concepts such as word embeddings, named entity recognition and sentence classification to improve platform performance. Worked in a Scrum environment and delivered the first prototype within three months. Benchmarked prototype against competitors and exceeded performance and accuracy."},

		"j2" : {
			"company" : "Northbridge Financial",
			"position" : "Business Analyst",
			"date" : "MAY 2016 &ndash; AUG 2016",
			"location" : "TORONTO, ON",
			"description" : "Analyzed insurance data to track financial losses and identify the least profitable regions. Performed change impact analysis to calculate the effect on revenue due to regulation changes. Automated tasks in VBA to increase workplace productivity."},
		"j3" : {
			"company" : "Canada Post",
			"position" : "Process Engineer",
			"date" : "SEPT 2015 &ndash; DEC 2015",
			"location" : "MISSISSAUGA, ON",
			"description" : "Implemented a Lean Six Sigma project to reduce the defect rates of incoming mail from all sources by 57%. Executed ad hoc operational changes during high volume season to exceed the processing target of 35,000 parts per hour."},
		"j4" : {
			"company" : "Magna International",
			"position" : "Manufacturing Engineer",
			"date" : "JAN 2015 &ndash; APR 2015",
			"location" : "MILTON, ON",
			"description" : "Designed a material handler and collaborated with external vendors to deliver two prototypes to users. Conducted time studies to resolve production line bottlenecks. Assisted with mock simulations of developing lines to reduce cycle times by approximately 6%. Assessed corrective action reports and continuous improvement forms to maintain production quality."},
		"j5" : {
			"company" : "University of Waterloo",
			"position" : "Research Systems Analyst",
			"date" : "MAY 2014 &ndash; AUG 2014",
			"location" : "WATERLOO, ON",
			"description" : "Designed an inventory management system to track office assets, implemented as a web application. Developed a program to detect webpage changes and notify appropriate users, using C#, SQL and Access. Lead a process improvement project to streamline a business procedure; interviewed users and successfully pitched a solution to the team of directors."}
		},
		HTMLcompany = '<h1>%data%</h1>',
		HTMLposition = '<h2>%data%</h2>',
		HTMLdateLoc = '<h3>%date% <span class="fa fa-map-marker"></span> %location%</h3>',
		HTMLdesc = '<p>%data%</p>';

	function init() {
		for (var j in jobs)
			{
				if (jobs.hasOwnProperty(j)) {
					var formattedCompany = HTMLcompany.replace("%data%", jobs[j].company);
					$(".experience-work").append(formattedCompany).fadeIn("slow");
					var formattedPosition = HTMLposition.replace("%data%", jobs[j].position);
					$(".experience-work").append(formattedPosition);
					var formattedDateLoc = HTMLdateLoc.replace("%date%", jobs[j].date).replace("%location%", jobs[j].location);
					$(".experience-work").append(formattedDateLoc);
					var formattedDesc = HTMLdesc.replace("%data%", jobs[j].description);
					$(".experience-work").append(formattedDesc);
				}
			}
	}

	return {
		init:init
	};
})();

var COURSEWORK = (function () {
	var courses = {
		"c1" : {
			"name" : "Neural Networks and Deep Learning",
			"link" : "http://neuralnetworksanddeeplearning.com",
			"description" : "A free online book that takes a detailed and practical approach for introducing artificial neural networks, using Python."
		},
		"c2" : {
			"name" : "Intro to Data Science",
			"link" : "https://www.udacity.com/course/intro-to-data-science--ud359",
			"description" : "Topics covered: Data wrangling and visualization, statistical models and tests, machine learning and MapReduce for Big Data. Makes use of Python and SQL."
		},
		"c3" : {
			"name" : "Machine Learning",
			"link" : "https://www.udacity.com/course/machine-learning--ud262",
			"description" : "Introductory course to concepts in supervised, unsupervised and reinforcement learning."
		},
		"c4" : {
			"name" : "Computational and Inferential Thinking",
			"link" : "http://www.inferentialthinking.com/",
			"description" : "An online textbook that walks the reader through intuitive approaches to getting insights from data, and uses many practical examples for introudcing inferential statistics and predictive modelling."
		},
		"c5" : {
			"name" : "Data Visualization and D3.js",
			"link" : "https://www.udacity.com/course/data-visualization-and-d3js--ud507",
			"description" : "Principles of data visualization and how to communicate with data."
		},
		"c6" : {
			"name" : "Learning How to Learn",
			"link" : "https://www.coursera.org/learn/learning-how-to-learn",
			"description" : "A fantastic course on how the brain processes information, and utilizing techniques for a more effective learning experience."
		}
		},
		HTMLtitle = '<h1><a href="%link%" target="_blank">%name%</a></h1>',
		HTMLdesc = '<p>%data%</p>';

	function init() {
		for (var c in courses)
			{
				if (courses.hasOwnProperty(c)) {
					var formattedTitle = HTMLtitle.replace("%link%", courses[c].link).replace("%name%", courses[c].name);
					$("#coursework").append(formattedTitle);
					var formattedDesc = HTMLdesc.replace("%data%", courses[c].description);
					$("#coursework").append(formattedDesc);
				}
			}
	}
	return {
		init: init
	};
})();

SKILLS.init();
EXPERIENCE.init();
COURSEWORK.init();
