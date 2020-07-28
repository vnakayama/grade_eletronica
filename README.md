# Courses Flowchart

Use it live at: https://vnakayama.github.io/grade_eletronica/

*Based on the Computer Engineering undergrad original flowchart: https://gremio-eci.github.io/grade/*

Interactive flowchart to keep track of your progress throughout the courses you take in university.

The example portrayed here is related to the Federal University of Rio de Janeiro's undergrad courses.

## Usage

Access the downloaded branch and run an HTTP server. One example using Python 3 would be:

`python3 -m http.server`

Now simply access localhost:8000/

The project is mobile friendly.

## Customization

*There currently is a fork to support UFRJ's Pharmacy course*

The js/database.js file contains a list of courses you need to take to graduate. Simply altering that list will allow you to fully customize the flowchart without losing any functionality.

| Attribute | Meaning |
| --- | --- |
| name | Course name |
| credits | How many credits a course yields |
| semester | The semester to which the course belongs |
| requirements* | Array containing IDs of courses that lock a course's completion |
| step* | If set, a tooltip and a slider will show up with this step value |

*optional
