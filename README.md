# startup1

## Elevator Pitch 
my startup project will be a website that allows people to recommend their favorite talk. The user will first login and then be taken to a page where they will be able to recommend their talk and give a few reasons why they like it. The user can then go to the Talk of the Day page where the highest suggested talk will be linked. This talk will be taken from the list of suggestions of all the users and whichever appears the most will be the suggested talk of the day.


## How will represent all technologies 
**Authentication:** This will be accomplished by having the user login with a username to use the webpage and suggest talks for other users
**Database Data:** This will be accomplished by storing talks given by the users and finding the most suggest talk in the list
**Websocket Data:** This will be accomplished by giving the live most suggested talk from the list given by the users. Could also allow users to like or comment on a specific talk they enjoyed


### WHAT HAS BEEN DONE FOR HTML DELIVERABLE 
* Prerequisite: Simon HTML deployed to your production environment
* Prerequisite: A link to your GitHub startup repository prominently displayed on your application's home page
* Prerequisite: Notes in your startup Git repository README.md file documenting what you modified and added with this deliverable. The TAs will only grade things that have been clearly described as being completed. Review the voter app as an example.
* Prerequisite: At least 10 git commits spread consistently throughout the assignment period.
* Properly structured HTML

* HTML pages - three HTML page that represent the ability to login, comment and like comments (user interaction).
* Links - The login page links to the suggest a talk page. The suggest page contains space for users to suggest and link talks.
* Text - Each of the voting choices is represented by a textual description.
* Images - There are several images throughout the website 
* DB/Login - Input box and submit button for login and email. The liking and leaving comments represent data pulled from the database.
* WebSocket - The count of liking talks represent the tally of realtime likes.


### WHAT HAS BEEN DONE FOR CSS DELIVERABLE 
* Header, footer, and main content body - have a proper header, footer and main content that have been stylized and generally work with * proper place holder content 
* Navigation elements - Navigation bar has been stylized to be thematically colored and visually pleasing.
* Responsive to window resizing - My app looks great on all window sizes and devices
* Application elements - colors are complementary such as the nav bar and picture on the first two pages while fonts and color of text are easilty readable 
* Application text content - Consistent fonts
* Application images - Images have been formated to be decorative and fit the page

### WHAT HAS BEEN DONE FOR JS DELIVERABLE
* number of likes is updated and counted live if the user presses the like button
* table shows the list of all suggested talks
* login.js stores login data of the user
* login and like buttons function for the user 
* likes and user info stored for future database data
* like button for talk of the day supports future websocket applications

### WHAT HAS BEEN DONE FOR MY SERVICE DELIVERABLE 
* Node and express used
* static middleware used 
* 3rd party called to display a random religious quote 
* service endpoints provided on backend and called on front end to display suggested talks in my allTalks table 

### WHAT HAS BEEN DONE FOR LOGIN DELIVERABLE
* User authentication and user information input to database
* User information displayed (shows username when singed in)
* User allowed to create accounts by creating a username and password (can login/logout)
* Users not allowed to proceed past index.hmtl until they sign in or create an account
* Database connected and Mongodb set up 



## Images of my startup outline

### Weclome page
![Welcome2](https://github.com/tannerbr/startup1/assets/131897609/cf223dae-0cf1-4ead-a652-9bafe8885269)


### Suggest Page
![PostSignIn2](https://github.com/tannerbr/startup1/assets/131897609/fc88c7cb-9eb6-49af-bf60-96fff4039fab)


### Talk of the day page
![ShowTalk2](https://github.com/tannerbr/startup1/assets/131897609/71a593dc-1548-4b65-813d-1ce4d89126b5)


### Suggested Talks by Apostle
![StartupAllTalksPage](https://github.com/tannerbr/startup1/assets/131897609/35c0c31f-cfa5-4575-820e-d661bf9c2b78)



