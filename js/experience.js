var SKILLS = (function () {
  var skills = {
    "s1" : {
      "section" : "Languages",
      "icon" : "fa fa-code",
      "desc" : ["Python", "R", "SQL", "JavaScript", "HTML", "VBA", "CSS", "C#"]
    },
    "s2" : {
      "section" : "Tools",
      "icon" : "fa fa-wrench",
      "desc" : ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "NLTK", "Matplotlib", "Git", "ggplot2", "dplyr", "jQuery", "Jira"]
    },
    "s3" : {
      "section" : "Concepts",
      "icon" : "fa fa-book",
      "desc" : ["Retrieval-based chatbots", "Machine Learning", "Neural Nets", "Natural Language Processing", "Agile Development", "Exploratory Data Analysis", "Process Improvement (LSS)"]
    }
		},
    HTMLsection = "<h1>%data%</h1>",
    HTMLicon = '<span class="%icon%"/>',
    HTMLtag = "<li>%data%</li>";

  function init() {
    for (var s in skills)
      {
        if (skills.hasOwnProperty(s)) {
          var formattedSection = HTMLsection.replace("%data%", skills[s].section);
          var formattedIcon = HTMLicon.replace("%icon%", skills[s].icon);
          $(".exp").append('<div class= "exp-skills">' + formattedIcon + formattedSection + '<ul id="' + s + '"></ul></div>');
					var fadeTags = '<li>' + skills[s].desc.join('</li><li>') + '</li>';
					$(fadeTags).hide().appendTo("#" + s).each(function(i){
					$(this).delay(100 * i).fadeIn(300);
					});
					/*for (var t in skills[s].desc)
			      {
			        if (skills[s].desc.hasOwnProperty(t)) {
              ar formattedTag = HTMLtag.replace("%data%",  skills[s].desc[t]);
              $("#" + s).append(formattedTag);
							}
						}*/
					}
				}
			}

  return {
    init:init
  };
})();

var EXPERIENCE = (function () {
  var jobs = {
    "j1" : {
      "company" : "SAP Innovation Center Network",
      "position" : "Machine Learning Engineer",
      "date" : "Sept 2017 &ndash; present",
      "location" : "Berlin, Germany",
      "description" : "Developing natural language processing models and implementation via SAP Leonardo's machine learning platform."
    },
    "j2" : {
      "company" : "SAP Innovation Center Network",
      "position" : "Engineer/Data Scientist",
      "date" : "Jan 2017 &ndash; Apr 2017",
      "location" : "Palo Alto, California",
      "description" : "Working in a Scrum environment, I experimented with deep learning models to power SAP’s Conversational AI Platform; this consisted of using natural language processing concepts like word embeddings, named entity recognition and sentence classification to expand the platform's features and improve performance. Other projects included developing corpus similarity models and benchmarking the first prototype against competitors (exceeding performance and accuracy).</br></br>I'm proud to say that, as a team, we delivered our first prototype within three months. This was a fantastic internship; I gained first-hand experience working in a fast-paced, startup-like environment by being a part of creating a machine-learning product from scratch."
    },
    "j3" : {
      "company" : "Northbridge Financial",
      "position" : "Business Analyst",
      "date" : "May 2016 &ndash; Aug 2016",
      "location" : "Toronto, Ontario",
      "description" : "I analyzed insurance data to track financial losses and identify the least profitable regions. After Ontario introduced insurance relation changes, I performed change impact analysis to calculate the effect on revenue. Lastly, I automated tasks in VBA to increase workplace productivity. This internship provided me with an appreciation of data wrangling and setting up robust pipelines to increase productivity."
    },
    "j4" : {
      "company" : "Canada Post",
      "position" : "Process Engineer",
      "date" : "Sept 2015 &ndash; Dec 2015",
      "location" : "Mississauga, Ontario",
      "description" : "Under the supervision of a Lean Six Sigma black belt, I implemented a process-improvement project to reduce the defect rates of incoming mail from the Greater Toronto Area. Through data collection, analysis and process revision, the defect rates of from all sources were reduced by up to 57%. Additionally, during Canada Post's high-volume Christmas season, I executed ad hoc operational changes on the mail-processing machines to exceed the processing target of 35,000 parts per hour."
    },
    "j5" : {
      "company" : "Magna International",
      "position" : "Manufacturing Engineer",
      "date" : "Jan 2015 &ndash; Apr 2015",
      "location" : "Milton, Ontario",
      "description" : "Collaborating with external vendors, I designed a material handler through an iterative process of delivering prototypes to users, collecting feedback and revising the design. I also conducted time studies to analyze production line processes and identify bottlenecks. During the development of upcoming production lines, I assisted with mock simulations of developing lines to reduce cycle times by approximately 6%. Lastly, I assessed corrective action reports and continuous improvement forms to maintain production quality."
    },
    "j6" : {
      "company" : "University of Waterloo",
      "position" : "Research Systems Analyst",
      "date" : "May 2014 &ndash; Aug 2014",
      "location" : "Waterloo, Ontario",
      "description" : "My first internship; I began a conceptual design of an inventory management system to track office assets, to be implemented as a web application. I also developed a program to detect webpage changes and notify appropriate users, using C#, SQL and Access. For my final project, I lead a process improvement project to streamline a business procedure; through user interviews and data analysis, I successfully pitched a solution to the team of directors."
    }
    },
    HTMLcompany = "<h1>%data%</h1>",
    HTMLposition = "<h2>%data%</h2>",
    HTMLdateLoc = '<h3>%date% <span class="fa fa-map-marker"></span> %location%</h3>',
    HTMLdesc = "<p>%data%</p>";

  function init() {
    for (var j in jobs)
      {
        if (jobs.hasOwnProperty(j)) {
          var formattedCompany = HTMLcompany.replace("%data%", jobs[j].company);
          $(".experience-work").append(formattedCompany);
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
    HTMLdesc = "<p>%data%</p>";

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
