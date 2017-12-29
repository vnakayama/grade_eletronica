# Interactive Flowchart

Helpful interactive flowchart to keep track of your progress throughout the courses you take in university. The example portrayed here is related to the Federal University of Rio de Janeiro's Computer Engineering undergrad.

## Usage

Access the downloaded branch and run an HTTP server. One example using Python would be:

```python -m SimpleHTTPServer 8000```

Now simply access the flowchart.html file through localhost:8000/flowchart.html

The project is very compatible with mobile devices, just go to X.X.X.X:8000 (address of your server) to try it out.

## Customization

The js/database.js file contains a list of courses you need to take to graduate. Simply altering that list will allow you to fully customize the flowchart without losing any functionality.

| Attribute  | Meaning                                           |
| ---------- | ------------------------------------------------- |
| name       | Course name                                       |
| credits    | How many credits a course yields                  |
| semester   | The semester to which the course belongs          |
| step*      | Number of steps for partial completion of course  |

