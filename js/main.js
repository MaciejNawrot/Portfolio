/**
 * Created by WafelWeedJr on 2017-02-20.
 */
//(function () {
//})();
    //document.querySelector(".section-education").offsetTop; window.pageYOffset;

    var isMobile = function () {
        var screenWidth=window.innerWidth;
        if(screenWidth<=991){
            return true;
        } else {
            return false;
        }
    };

    var fillTime = function () {
        var dateofCreate= new Date("March 6, 2017 01:15:00");
        var todaysDate = new Date();
        var timeGrip=document.querySelector(".time");
        var yearDifference=todaysDate.getFullYear()-dateofCreate.getFullYear();
        var monthDifference=todaysDate.getMonth()-dateofCreate.getMonth();
        var dayDifference=todaysDate.getDate()-dateofCreate.getDate();
        if(yearDifference!==0){
            if(yearDifference===1){
                timeGrip.innerHTML="Website was made " + yearDifference + " year ago ";
            } else {
                timeGrip.innerHTML="Website was made " + yearDifference + " years ago";
            }
        } else if(monthDifference!==0){
            if(monthDifference===1){
                timeGrip.innerHTML="Website was made " + monthDifference + " month ago ";
            } else {
                timeGrip.innerHTML="Website was made " + monthDifference + " months ago";
            }
        } else{
            if(dayDifference===1){
                timeGrip.innerHTML="Website was made " + dayDifference + " day ago ";
            } else {
                timeGrip.innerHTML="Website was made " + dayDifference + " days ago";
            }
        }
    };
    fillTime();



    var scrollTop = function () {
        if(document.body.scrollTop > 0) {
            window.scrollBy(0, -50);
            setTimeout(scrollTop, 10);
        }
    };

    var scrollToAboutMe = function () {
        var aboutMe;
        if(isMobile()){
            aboutMe= document.querySelector(".section-aboutme").offsetTop;
        } else
        {
            var listHeight=document.querySelector(".navigation-menu").offsetHeight;
            aboutMe= document.querySelector(".section-aboutme").offsetTop-listHeight;
        }


        if(aboutMe > window.pageYOffset){

            if(window.pageYOffset+50>aboutMe){
                window.scrollBy(0,aboutMe-window.pageYOffset);

            } else {
                window.scrollBy(0, 50);
                setTimeout(scrollToAboutMe, 10);
            }
        }

        if(aboutMe < window.pageYOffset){

            if(window.pageYOffset-50<aboutMe){
                window.scrollBy(0,aboutMe-window.pageYOffset);

            } else {
                window.scrollBy(0, -50);
                setTimeout(scrollToAboutMe, 10);
            }
        }

    };

    var scrollToEducation = function () {
        var education;
        if(isMobile()){
            education= document.querySelector(".section-education").offsetTop;
        } else
        {
            var listHeight=document.querySelector(".navigation-menu").offsetHeight;
            education= document.querySelector(".section-education").offsetTop-listHeight;
        }


        if(education > window.pageYOffset){

            if(window.pageYOffset+50>education){
                window.scrollBy(0,education-window.pageYOffset);

            } else {
                window.scrollBy(0, 50);
                setTimeout(scrollToEducation, 10);
            }
        }

        if(education < window.pageYOffset){

            if(window.pageYOffset-50<education){
                window.scrollBy(0,education-window.pageYOffset);

            } else {
                window.scrollBy(0, -50);
                setTimeout(scrollToEducation, 10);
            }
        }

    };

    var scrollToFreeTime = function () {

        var freeTime;
        if(isMobile()){
            freeTime= document.querySelector(".section-freetime").offsetTop;
        } else
        {
            var listHeight=document.querySelector(".navigation-menu").offsetHeight;
            freeTime= document.querySelector(".section-freetime").offsetTop-listHeight;
        }

        if(freeTime > window.pageYOffset){

            if(window.pageYOffset+50>freeTime){
                window.scrollBy(0,freeTime-window.pageYOffset);

            } else {
                window.scrollBy(0, 50);
                setTimeout(scrollToFreeTime, 10);
            }
        }

        if(freeTime < window.pageYOffset){

            if(window.pageYOffset-50<freeTime){
                window.scrollBy(0,freeTime-window.pageYOffset);

            } else {
                window.scrollBy(0, -50);
                setTimeout(scrollToFreeTime, 10);
            }
        }

    };

    var scrollToContact = function () {

        var contact;
        if(isMobile()){
            contact= document.querySelector(".section-contact").offsetTop;
        } else
        {
            var listHeight=document.querySelector(".navigation-menu").offsetHeight;
            contact= document.querySelector(".section-contact").offsetTop-listHeight;
        }

        if(contact > window.pageYOffset){

            if(window.pageYOffset+50>contact){
                window.scrollBy(0,contact-window.pageYOffset);

            } else {
                window.scrollBy(0, 50);
                setTimeout(scrollToContact, 10);
            }
        }

        if(contact < window.pageYOffset){

            if(window.pageYOffset-50<contact){
                window.scrollBy(0,contact-window.pageYOffset);

            } else {
                window.scrollBy(0, -50);
                setTimeout(scrollToContact, 10);
            }
        }

    };

    var navHeight=document.querySelector(".navigation-menu").offsetHeight;

    var greetingsBegin= document.querySelector(".main-header").offsetTop;
    var greetingsEnd=document.querySelector(".main-header").offsetHeight-navHeight;

    var aboutMeBegin= document.querySelector(".section-aboutme").offsetTop-navHeight;
    var aboutMeEnd= aboutMeBegin+document.querySelector(".section-aboutme").offsetHeight;

    var educationBegin= document.querySelector(".section-education").offsetTop-navHeight;
    var educationEnd= educationBegin+document.querySelector(".section-education").offsetHeight;

    var freetimeBegin= document.querySelector(".section-freetime").offsetTop-navHeight;
    var freetimeEnd= freetimeBegin+document.querySelector(".section-freetime").offsetHeight;

    var contactBegin= document.querySelector(".section-contact").offsetTop-navHeight;
    var contactEnd= contactBegin+document.querySelector(".section-contact").offsetHeight;


    var markListElement = function (s1b, s1e, s2b, s2e, s3b, s3e, s4b, s4e, s5b, s5e) {
        var windowPos=window.pageYOffset;
        var liArr= document.querySelectorAll(".li");
        var liLen=liArr.length;
        var i;
        for(i=0;i<liLen;i++){
            liArr[i].classList.remove("li-clicked");
        }
        if(windowPos>=s1b && windowPos<s1e){
           document.querySelector(".li-hi").classList.add("li-clicked");

        } else if(windowPos>=s2b && windowPos<s2e) {
            document.querySelector(".li-aboutme").classList.add("li-clicked");
        } else if(windowPos>=s3b && windowPos<s3e) {
            document.querySelector(".li-education").classList.add("li-clicked");
        } else if(windowPos>=s4b && windowPos<s4e) {
            document.querySelector(".li-funpart").classList.add("li-clicked");
        } else {
            document.querySelector(".li-contact").classList.add("li-clicked");
        }

    };



    var hamburger=document.querySelector(".hamburger");
    hamburger.addEventListener("click", function () {
        document.querySelector(".page-header").classList.toggle("nav-opened");
    },false);

    var logoMobile=document.querySelector(".page-logo");
    logoMobile.addEventListener("click", function (e) {
        scrollTop();
        e.preventDefault();
        if(isMobile()) {
            document.querySelector(".page-header").classList.remove("nav-opened");
        }
    },false);

    var logoDesktop=document.querySelector(".desktop-logo");
    logoDesktop.addEventListener("click",function (e) {
        scrollTop();
        e.preventDefault();
    },false);


    var liHi=document.querySelector(".li-hi");
    liHi.addEventListener("click", function (e) {
        scrollTop();
        e.preventDefault();
        if(isMobile()) {
            document.querySelector(".page-header").classList.remove("nav-opened");
        } else{
            liHi.classList.add("li-clicked");

        }
    },false);

    var liAboutMe=document.querySelector(".li-aboutme");
    liAboutMe.addEventListener("click", function (e) {
        scrollToAboutMe();
        e.preventDefault();
        if(isMobile()) {
            document.querySelector(".page-header").classList.remove("nav-opened");
        } else{
            liAboutMe.classList.add("li-clicked");

        }
    },false);

    var liEducation=document.querySelector(".li-education");
    liEducation.addEventListener("click", function (e) {
        scrollToEducation();
        e.preventDefault();
        if(isMobile()) {
            document.querySelector(".page-header").classList.remove("nav-opened");
        } else {
            liEducation.classList.add("li-clicked");
        }
    },false);

    var liFunPart=document.querySelector(".li-funpart");
    liFunPart.addEventListener("click", function (e) {
        scrollToFreeTime();
        e.preventDefault();
        if(isMobile()) {
            document.querySelector(".page-header").classList.remove("nav-opened");
        } else{
            liFunPart.classList.add("li-clicked");
        }
    },false);

    var liContact=document.querySelector(".li-contact");
    liContact.addEventListener("click", function (e) {
        scrollToContact();
        e.preventDefault();
        if(isMobile()) {
            document.querySelector(".page-header").classList.remove("nav-opened");
        } else{
            liContact.classList.add("li-clicked");

        }
    },false);

    window.addEventListener("scroll",function () {
        if(!isMobile()) {
            markListElement(greetingsBegin,greetingsEnd,aboutMeBegin,aboutMeEnd,educationBegin,educationEnd,freetimeBegin,freetimeEnd,contactBegin,contactEnd);

        }
    },false);








