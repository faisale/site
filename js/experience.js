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
	var languages = ['C#', 'CSS', 'HTML', 'JavaScript', 'Python', 'R', 'SQL', 'VBA'],
		packages = ['D3.js', 'jQuery', 'NumPy', 'Matplotlib', 'Pandas', 'SciPy', 'Scikit-learn'],
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
			"company" : "Northbridge Financial",
			"position" : "Claims Process Analyst",
			"date" : "MAY 2016 &ndash; PRESENT",
			"location" : "TORONTO, ON",
			"description" : "Analyzing large datasets and drawings insights and conclusions for financial reports. Data mining, data wrangling in Excel and VBA. Developing numerous VBA scripts to increase the productivity of the workplace."},
		"j2" : {
			"company" : "Canada Post",
			"position" : "Process Engineer",
			"date" : "SEPT 2015 &ndash; DEC 2015",
			"location" : "MISSISSAUGA, ON",
			"description" : "Implemented a Lean Six Sigma project to reduce the defect rates in incoming mail from all sources to 10%. Faciliated training on machine operations to several teams of employees. Executed daily ad-hoc operational changes to during high volume season to exceed the processing target of 35,000 PPH."},
		"j3" : {
			"company" : "Magna International",
			"position" : "Manufacturing Engineer",
			"date" : "JAN 2015 &ndash; APR 2015",
			"location" : "MILTON, ON",
			"description" : "Designed a material handler and collaborated with external vendors to deliver two prototypes to users. Conducted time studies to analyze assembly bottlenecks. Assisted with mock simulations of developing lines to reduce cycle times by approximately 5%. Assessed corrective action reports and continuous improvement forms to maintain production quality."},
		"j4" : {
			"company" : "University of Waterloo",
			"position" : "Research Systems Analyst",
			"date" : "MAY 2014 &ndash; AUG 2014",
			"location" : "WATERLOO, ON",
			"description" : "Designed an inventory management system to track office assets; implemented as a web application. Developed a program to detect webpage changes and notify appropriate users. Lead a process improvement project to streamline a business procedure; interviewed users and successfully pitched a solution to the team of directors."}
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