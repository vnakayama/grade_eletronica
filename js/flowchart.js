
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
            rectangle.click( function(e){
                // Decides to assign a tooltip or a toggle event:
                if (courses[i].tooltip == "true"){
                    courseTooltip(i);
                } else {
                    courseToggle(i);
                }
            // Impedes click event from being triggered by descendants:
            }).on('click', 'div', function(e) {
                e.stopPropagation();
            });
        }(i));

        // Updates button according to course completion:
        if (parseInt(courses[i].status) == courses[i].credits) {
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

// Function to toggle complete/incomplete when clicking on a course:
function courseToggle(index){

    // Finds the corresponding course button:
    var course = $("#course"+index);
    var status = "";

    // Toggles the button completion:
    if (course.hasClass("incomplete-course")){
        course.removeClass("incomplete-course").addClass("complete-course");
        status = courses[index].credits.toString();
    } else {
        course.removeClass("complete-course").addClass("incomplete-course");
        status = "0";
    }

    // Saves the cookie:
    setCookie(index, status);
    courses[index].status = status;

    // Checks if semester status was changed:
    verifySemester(courses[index].semester);

}

// Function to display a tooltip with a slider when clicking on a course:
function courseTooltip(index){

    // Finds the corresponding course button:
    var course = $("#course"+index);

    // Case where tooltip isn't open yet:
    if (course.attr("tooltipOpen") != "true"){

        // Saves the state of the tooltip:
        course.attr("tooltipOpen", "true");

        // Creates a tooltip:
        var tooltip = $("<div/>",
            {
                "class": "tt" + index + " tt-text"
            });

        // Creates the slider div:
        var slider = $("<div/>",
            {
                "class": "slider"
            });
        tooltip.append(slider);

        // Initializes the slider (slider[0] is just jquery obj to vanilla JS obj):
        noUiSlider.create(slider[0], {
            // Initital value:
    		start: parseInt(courses[index].status),
            // Background:
    		connect: [true, false],
            // Allows for immediate movement of slide:
            behaviour: 'snap',
            // Display current value as tooltip:
            tooltips: true,
            // Parse displayed value as an integer:
            format: {
                to: function ( value ) {
                    return parseInt(value);
                },
                from: function ( value ) {
                    return parseInt(value);
                    }
                },
            // Slider step:
            step: 2,
            // Min and max values:
    		range: {
    			'min': 0,
    			'max': courses[index].credits
    		}
    	});

        // Listens for a change of value on the slider:
        slider[0].noUiSlider.on("update", function(){

            // Reads the changed value:
            var status = slider[0].noUiSlider.get().toString();
            // Prevents initialization issues:
            if (status == "NaN") status = 0;
            // Saves the cookie:
            setCookie(index, status);
            courses[index].status = status;

            // Adds completion color to course element:
            var scale = parseInt(courses[index].status) / courses[index].credits;
            $("#course"+index).css("background-image", "-webkit-linear-gradient(bottom, #b1fca4, #b1fca4 " + scale*100 + "%, transparent " + scale*100 + "%, transparent 100%)");

            // Checks if semester status was changed:
            verifySemester(courses[index].semester);

        });

        // Appends tooltip to DOM:
        course.append(tooltip);

        // Triggers tooltip fade in:
        tooltip.fadeTo(500, 0.7);

    // Case where tooltip is already open:
    } else {

        // Saves the state of the tooltip:
        course.attr("tooltipOpen", "false");

        // Finds the open tooltip (and possible copies of it):
        var tooltip = $(".tt"+index);

        // Triggers tooltip fade out and removes it from DOM:
        tooltip.fadeOut(500, function(){
            this.remove();
        });

    }

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
            if (parseInt(courses[i].status) == courses[i].credits){
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
    var check = getCookie("newcomer6");
    // If cookie doesn't exist:
    if (check == "") {
        // Sets the first visit as false:
        setCookie("newcomer6", "false");
        // Creates a cookie for each course:
        for (var i in courses){
            setCookie(i, "0");
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
