//JSON for projects data
var projects = {
    "projects": [
        {
            "title" : "List Maker",
            "dates" : "2017",
            "description" : "An application designed to make a list of anything.",
            "images" : ["images/ListMaker.png"]
        },
        {
            "title" : "On The Map",
            "dates" : "2017",
            "description" : "An app that uses Udacity API to retrieve data of the students who are currently working on this project.",
            "images" : ["images/OnTheMap.png"]
        }
    ]
};

//JSON for work data
var work = {
    "jobs": [
        {
            "employer" : "ACM Student Chapter, Chitkara University",
            "title" : "iOS Head",
            "location" : "Rajpura",
            "dates" : "2017-future",
            "description" : "Head of iOS app development in ACM Student Chapter"
        },
        {
            "employer" : "ACM Student Chapter, Chitkara University",
            "title" : "Executive",
            "location" : "Rajpura",
            "dates" : "2016-2107",
            "description" : "Executive at ACM Student Chapter"
            
        }
    ]
};

//JSON for bio data
var bio = {
    "name" : "Shubham Jindal",
    "role" : "Web Developer",
    "welcomeMessage" : "I am an exuberant iOS Developer, very passionate about learning and developing. I like challenging situations where I can use my skills and experience to solve problems.",
    "biopic" : "images/me.jpg",
    "contacts" : {
        "mobile" : "7009029945",
        "email" : "shubhamjindal1234@gmail.com",
        "github" : "github.com/shubhamjindal30",
        "linkedIn" : "linkedin.com/in/shubhamjindal30",
        "location" : "Ludhiana"
    },
    "skills" : ["Swift", "JS", "CSS", "HTML", "OOP"]
};

//JSON for education data
var education = {
    "schools": [
        {
            "name" : "Chitkara University",
            "location" : "Rajpura",
            "degree" : "BE",
            "dates" : "2015-present",
            "url" : "https://www.google.com",
            "majors" : ["OOP", "CST", "C"]
            
            
        },
        {
            "name" : "Tagore Public School",
            "location" : "Ludhiana",
            "degree" : "Higher Secondary Education",
            "dates" : "2013-2015",
            "url" : "https://www.google.com",
            "majors" : ["Maths"]
        },
        {
            "name" : "Sacred Heart Sen. Sec. School",
            "location" : "Ludhiana",
            "degree" : "High School",
            "dates" : "2000-2013",
            "url" : "https://www.google.com",
            "majors" : ["Maths", "Science", "languages"]
        }
    ],
    "onlineCourses": [
        {
            "title" : "Front End Web Developer Nano Degree",
            "school" : "Udacity",
            "dates" : "2017",
            "url" : "https://in.udacity.com"
        },
        {
            "title" : "iOS Developer Nano Degree",
            "school" : "Udacity",
            "dates" : "2017",
            "url" : "https://in.udacity.com"
        }
    ]
};


//Function to display the bio data
bio.display = function() {
    //Storing the elements with correct data in variables
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedlinkedIn = HTMLlinkedIn.replace("%data%",bio.contacts.linkedIn);
    var formattedLoc = HTMLlocation.replace("%data%",bio.contacts.location);
    
    //Appending the bio data
    $("#header").prepend(formattedName, formattedRole);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedlinkedIn, formattedLoc);
    $("#header").append(formattedPic, formattedMsg);
    if(bio.skills.length>0) {
        $("#header").append(HTMLskillsStart);
        for(var skill = 0; skill < bio.skills.length; skill++) {
            var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
};

//Calling the function to display bio data
bio.display();

//Function to display the work data
work.display = function() {
    for(var job = 0; job < work.jobs.length; job++) {
        //Appending the header work element
        $("#workExperience").append(HTMLworkStart);
        
        //Storing the elements with correct data in variables
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    
        //Appending the work data
        $(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
    }
};

//Calling the function to display work data
work.display();

//Function to display the projects data
projects.display = function() {
    for(var project = 0; project < projects.projects.length; project++) {
        //Appending the header project element
        $("#projects").append(HTMLprojectStart);
        
        //Storing the elements with correct data in variables
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        
        
        //Appending the project data
        $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);
        
        //Appending the project images
        for(var image = 0; image < projects.projects[project].images.length; image++) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedProjectImage);
        }
    }
};

//Calling the function to display project data
projects.display();

//Function to display the education data
education.display = function() {
    for(var school = 0; school < education.schools.length; school++) {
        //Appending the header project element
        $("#education").append(HTMLschoolStart);
        
        //Storing the elements with correct data in variables
        var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        
        //Appending the project data
        $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);
    }
    
    //Appending the header online courses element
    $("#education").append(HTMLonlineClasses);
    
    for(var course = 0; course < education.onlineCourses.length; course++) {
        $("#education").append(HTMLschoolStart);
        
        //Storing the elements with correct data in variables
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
        
        
        //Appending the online courses data
        $(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
    }
};

//Calling the function to display education data
education.display();

//Function to change the name format to international format
function inName(name) {
    name = name.trim().split(" ");
    name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    name = name.join(" ");
    return name;
}

//Appending the internationalize button
$("#main").append(internationalizeButton);

//Appending the google map with locations
$("#mapDiv").append(googleMap);
