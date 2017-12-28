
/* Initialization function: */
 $(document).ready(function(){

     // Loads data for course completion:
     checkCookies();

     // Creates semester columns:
     for (var i=1; i<=semesters; i++){

         // Creates column div:
         var column = $("<div/>",
             {
                 "class": "column",
                 "id": "column"+i
             });

        // Creates a button representing a semester:
        var rectangle = $("<button/>",
            {
                "class": "box semester-box incomplete-semester unselectable",
                "id": "semester"+i
            });

        // Disables clicking:
        rectangle.prop("disabled", true);

        // Creates a span element to hold the name of the semester:
        var name = $("<span/>",
            {
                "class": "semester-name",
            });
        name.html(i+"º PERÍODO");

        // Inserts column into DOM:
        rectangle.append(name);
        column.append(rectangle);
        $("#panel").append(column);
     }

    // Creates course buttons:
    for (var i in courses){

        // Creates a button representing a course:
        var rectangle = $("<button/>",
            {
                "class": "box course-box unselectable",
                "id": "course"+i,
            });

        // Assigns the click event handler for courses:
        (function(i) {
            rectangle.click( function(){
                courseClick(i);
            });
        }(i));

        // Updates button according to course completion:
        if (courses[i].status == "complete") {
            rectangle.addClass("complete-course");
        } else {
            rectangle.addClass("incomplete-course");
        }

        // Creates a span element to hold the name of the course:
        var name = $("<span/>",
            {
                "class": "course-name",
            });
        name.html(courses[i].name);

        // Creates a span element to hold the number of credits:
        var credits = $("<span/>",
            {
                "class": "course-credits",
            });

        // Checks what kind of credits the metric means:
        var text = "";
        if (courses[i].credits == 1){
            text = " crédito)";
        } else if (courses[i].credits < 30){
            text = " créditos)";
        } else {
            text = " horas)";
        }
        credits.html("(" + courses[i].credits + text);

        // Inserts course info into the corresponding semester DOM:
        var parent = $("#column" + courses[i].semester);
        rectangle.append(name);
        rectangle.append(credits);
        parent.append(rectangle);

    }

    // Checks semester completion:
    for (var i=1; i<=semesters; i++){
        verifySemester(i);
    }

});

function courseClick(index){

    // Finds the corresponding course button:
    var course = $("#course"+index);
    var status = "";

    // Toggles the button completion:
    if (course.hasClass("incomplete-course")){
        course.removeClass("incomplete-course").addClass("complete-course");
        status = "complete";
    } else {
        course.removeClass("complete-course").addClass("incomplete-course");
        status = "incomplete"
    }

    // Saves the cookie:
    setCookie(index, status);
    courses[index].status = status;

    // Checks if semester status was changed:
    verifySemester(courses[index].semester);

}


function verifySemester(index){

    // Variable to hold ALL courses belonging to semester "index":
    var belonging = 0;
    // Variable to hold COMPLETED courses belonging to semester "index":
    var completed = 0;
    // Retrieves courses from semester "index":
    for (var i in courses){
        // Checks if course belongs to requested semester:
        if (courses[i].semester == index){
            belonging += 1;
            // Checks if course is completed:
            if (courses[i].status == "complete"){
                completed += 1;
            }
        }
    }

    // Selects the semester button:
    var semester = $("#semester"+index);
    // Checks if all courses belonging to semester "index" are complete:
    if (belonging == completed){
        // Marks semester as complete:
        if (semester.hasClass("incomplete-semester")){
            console.log("made complete");
            semester.removeClass("incomplete-semester").addClass("complete-semester");
        }
    } else {
        // Marks semester as incomplete:
        if (semester.hasClass("complete-semester")){
            console.log("made incomplete");
            semester.removeClass("complete-semester").addClass("incomplete-semester");
        }
    }

}


/* COOKIE FUNCTIONS */


// Checks if cookies already exist:
function checkCookies() {
    var check = getCookie("newcomer3");
    // If cookie doesn't exist:
    if (check == "") {
        // Sets the first visit as false:
        setCookie("newcomer3", "false");
        // Creates a cookie for each course:
        for (var i in courses){
            setCookie(i, "incomplete");
        }
    } else {
        // Retrieves each cookie:
        for (var i in courses){
            courses[i].status = getCookie(i);
        }
    }
}

// Retrieves cookie cname:
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Saves a cookie cname with value cvalue:
function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (20 * 365 * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
