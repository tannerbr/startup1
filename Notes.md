Deploying Files 
./deployFiles.sh -k "~/Desktop/CS 260/production.pem" -h talkaday.click -s startup

### NOTES FOR MIDTERM

## GIT NOTES 
* git clone https://github.com/webprogramming260/startup-example.git

* If we run the fetch Git command, you will get the latest information about the changes on GitHub without actually changing your local repository. We then run the status Git command to see the differences between the clones and see that we are missing a commit. You can pull it down using the pull Git command. You can also use the Git functionality in VS Code to view the status and sync up your repository.

* This is the pattern that you want to make a reflexive part of your development process.

* Pull the repository's latest changes from GitHub (git pull)
* Make changes to the code
* Commit the changes (git commit)
* Push the changes to GitHub (git push)

## Console Commands
* echo - Output the parameters of the command
* cd - Change directory
* mkdir - Make directory
* rmdir - Remove directory
* rm - Remove file(s)
* mv - Move file(s)
* cp - Copy files
* ls - List files
* curl - Command line client URL browser
* grep - Regular expression search
* find - Find files
* top - View running processes with CPU and memory usage
* df - View disk statistics
* cat - Output the contents of a file
* less - Interactively output the contents of a file
* wc - Count the words in a file
* ps - View the currently running processes
* kill - Kill a currently running process
* sudo - Execute a command as a super user (admin)
* ssh - Create a secure shell on a remote computer
* scp - Securely copy files to a remote computer
* history - Show the history of commands
* ping - Check if a website is up
* tracert - Trace the connections to a website
* dig - Show the DNS information for a domain
* man - Look up a command in the manual

* | - Take the output from the command on the left and pipe, or pass, it to the command on the right
* '>' - Redirect output to a file. Overwrites the file if it exists
* '>>' - Redirect output to a file. Appends if the file exists
* CTRL-R - Use type ahead to find previous commands
* CTRL-C - Kill the currently running command

## HTML Notes
element	meaning
* html-	The page container
* head-	Header information
* title-	Title of the page
* meta-	Metadata for the page such as character set or viewport settings
* script- JavaScript reference. Either a external reference, or inline
* include- External content reference
* body- The entire content body of the page
* header- Header of the main content
* footer- Footer of the main content
* nav- Navigational inputs
* main- Main content of the page
* section- A section of the main content
* aside- Aside content from the main content
* div-	A block division of content
* span- An inline span of content
* h<1-9> - Text heading. From h1, the highest level, down to h9, the lowest level
* p- A paragraph of text
* b- Bring attention
* table- Table
* tr- Table row
* th- Table header
* td- Table data
* ol,ul- Ordered or unordered list
* li- List item
* a- Anchor the text to a hyperlink
* img- Graphical image reference
* dialog- Interactive component such as a confirmation
* form- A collection of user input
* input- User input field
* audio- Audio content
* video- Video content
* svg- Scalable vector graphic content
* iframe- Inline frame of another HTML page
* &	&amp;
* <	&lt;
* >	&gt;
* "	&quot;
* '	&apos;
* 😀 &#128512;

Element	Meaning	Example
* form	Input container and submission	<form action="form.html" method="post">
* fieldset	Labeled input grouping	<fieldset> ... </fieldset>
* input	Multiple types of user input	<input type="" />
* select	Selection dropdown	<select><option>1</option></select>
* optgroup	Grouped selection dropdown	<optgroup><option>1</option></optgroup>
* option	Selection option	<option selected>option2</option>
* textarea	Multiline text input	<textarea></textarea>
* label	Individual input label	<label for="range">Range: </label>
* output	Output of input	<output for="range">0</output>
* meter	Display value with a known range	<meter min="0" max="100" value="50"></meter>

Type	Meaning
* text	Single line textual value
* password	Obscured password
* email	Email address
* tel	Telephone number
* url	URL address
* number	Numerical value
* checkbox	Inclusive selection
* radio	Exclusive selection
* range	Range limited number
* date	Year, month, day
* datetime-local	Date and time
* month	Year, month
* week	Week of year
* color	Color
* file	Local file
* submit	button to trigger form submission

Attribute	Meaning
* name	The name of the input. This is submitted as the name of the input if used in a form
* disabled	Disables the ability for the user to interact with the input
* value	The initial value of the input
* required	Signifies that a value is required in order to be valid

## CSS Notes
Combinator	Meaning	Example	Description
* Descendant	A list of descendants	body section	Any section that is a descendant of a body
* Child	A list of direct children	section > p	Any p that is a direct child of a section
* General sibling	A list of siblings	div ~ p	Any p that has a div sibling
* Adjacent sibling	A list of adjacent sibling	div + p	Any p that has an adjacent div sibling