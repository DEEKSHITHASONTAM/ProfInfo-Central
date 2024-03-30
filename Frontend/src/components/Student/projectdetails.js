const ProjectDetails=[
    {
        id:1,
        email:"prof@isClickableInput.ac.in",
        name:"Indranil Saha",
        cpi:"7.5",
        maxStudents:67,
        studentRegistered:50,
        isRequest:false,
        description:"erubibdiubgdiubg rfifibfiwn infiebfiw iwfeibfefalndonojnskNDdnKNkNJCmanskajcojnckan ckNCOJnC J ask cs",
        title:"web-develpepment",
        resume:false,
        isresume:"NO",
        image:"public/images/jaswanth.jpg",
        Openfor:"no cse allowed"
    },
    {
        id:2,
        email:"prof@isClickableInput.ac.in",
        name:"Manoj K Harbola",
        cpi:"Not-Required",
        maxStudents:50,
        studentRegistered:67,
        isRequest:false,
        description:"erubibdiubgdiubg rfifibfiwn infiebfiw iwfeibfefa",
        title:"nothing",
        resume:true,
        isResume:"YES",
        image:"public/images/jaswanth.jpg",
        Openfor:"only che is allowed"
    },
    {
        id:3,
        email:"prof@isClickableInput.ac.in",
        name:"Anil Seth",
        cpi:"8.0",
        maxStudents:50,
        studentRegistered:67,
        isRequest:false,
        description:"erubibdiubgdiubg rfifibfiwn infiebfiw iwfeibfefa",
        title:"machine learning",
        resume:false,
        isResume:"NO",
        image:"public/images/jaswanth.jpg",
        Openfor:"no cse allowed"
    },
    {
        id:4,
        email:"prof@isClickableInput.ac.in",
        name:"Subhajit Roy",
        cpi:"6.0",
        maxStudents:50,
        studentRegistered:67,
        isRequest:false,
        description:"erubibdiubgdiubg rfifibfiwn infiebfiw iwfeibfefa",
        title:"economics",
        resume:true,
        isResume:"YES",
        image:"public/images/nasar.jpg",
        Openfor:"no cse allowed"
    },
    {
        id:5,
        email:"prof@isClickableInput.ac.in",
        name:"Mainak Choudhary",
        cpi:"7.0",
        maxStudents:80,
        studentRegistered:45,
        isRequest:false,
        description:"nothing just 20+ years experience",
        title:"economics",
        resume:true,
        isResume:"YES",
        image:"public/images/nasar.jpg",
        Openfor:"no cse allowed"
    },
    {
        id:6,
        email:"prof@isClickableInput.ac.in",
        name:"Ashish Garg",
        cpi:"Not-Required",
        maxStudents:1000,
        studentRegistered:0,
        isRequest:false,
        description:"nothing just 20+ years experience",
        title:"economics",
        resume:true,
        isResume:"NO",
        image:"public/images/nasar.jpg",
        Openfor:"no cse allowed"
    },
    {
        id:7,
        email:"prof@isClickableInput.ac.in",
        name:"Purushottam Kar",
        cpi:"Not-required",
        maxStudents:80,
        studentRegistered:63,
        isRequest:false,
        description:"nothing just 20+ years experience",
        title:"economics",
        resume:true,
        isResume:"YES",
        image:"public/images/pavani.jpg",
        Openfor:"no prereq"
    },
    
]
ProjectDetails.forEach(project => {
    if (project.maxStudents > project.studentRegistered) {
        project.isRequest = true;
    } else {
        project.isRequest = false;
    }
});

export default ProjectDetails;
//once the studentsRegistered== maxstudents, the object should get deleted in the user details.