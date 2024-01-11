# The Dashboard
This is the README file for a dashboard created for Chas Academy's FJSX23 course.


## Description:
This dashboard web application features multiple interactive functionalities:
### Features 
- Clock: Displays the current time.
- Name Input: Allows users to input their name.
- Quick Links: Enables users to add and manage quick links.
- Weather Display: Shows weather information for a specified city.
- Pokemon Catcher: A feature to catch Pokemon using PokeApi.
- Notes: Provides a space for users to write and save notes.
- Background Customization: Allows users to search and randomise the dashboard background using Unsplash API.

### Project Structure:
this is a single page application divided into coherent parts using sections.


- index.html: Contains all html.
- imgs/: Directory for images used on the website.
- scripts/: Directory for JavaScript files used on the website.


### Technologies used:
- HTML5
- CSS3
- JavaScript


## Usage
To deploy website locally:
1. Clone this repository.
2. Open the 'index.html' file in your preferred web browser.


You may also view the website via Netlify:
https://jumi-dashboard.netlify.app/



## Dependencies
- Font Awesome library for icons.


## Contact Information:
Email: jumi.strandberg@chasacademy.se

## Evaluation:
###  General and Workflow: 
~~I did not perform well on this project. My persisting weakness is planning and time management. I am also doing poorly with troubleshooting and I find it difficult to read code. If things do not work on first try for me I become disoriented, hence I should plan better, and comment better.

Comments are subpar. As the deadline was approaching and I found myself stuck I stopped commenting, which might have led to more confusion in the long run. 

Overall this has been a messy project. But I hope that the struggle will turn to skill with time. Really need not only read documentation, but also look at subscription plans when using APIs.~~

Coming back to this project, I've had a lot of fun. I don't know what changed expect for my general mood, but after taking a break and dropping the stress of a deadline, I managed to clean up the structure and fix broken functionality.

### HTML: 
- I was not paying much attention to the HTML, and created elements after what I needed for the scripts. In hindsight it felt like a roundabout way of working. Passes W3 validator, so it will have to be acceptable.

### CSS:
- Last priority. Could use refactoring and custom properties. A bit on the longer side. Could have split up in separate documents by widget.

### Clock, Name and Notes 
Grouping evaluation of the simpler scripts together as all points can be applied to all of these 
- Structure is fine, since the script is simple 
- Could use better error handling for local storage errors, but I do not understand local storage nor error handling well enough to implement it and understand it myself.
- Some logic could be separated for maintainability, e.g. time and date now being in the same function. Figured that the function was simple enough to allow it like it is. 

### Weather 
Used code from previous weather app project 
- Glad to have been able to store the  API keys securely in .gitignore:d JSON file. 
- Tried some error handling with the help of ChatGPT, but I lack understanding to implement satisfactory error handling. 
- Could display error in the UI to the user. 
- Should have conditions for invalid input or HTTP errors and show to user in UI.
- Abandoned geo location due to lack of time. 
- Which icon condition looks a little silly. Using a switch statement might have been better. 

### Links 
- Also lacks sufficient error handling, e.g. if local storage should not work
- Refactoring how the eventListeners are called could improve readability. Now it looks messy. 
- Should 

### Pokemon Catcher 
Made in stressful state after I realised I could not do what I wanted with the currency API, but quickly found myself enjoying coding a little while working on something more fun. As I was running out of time I opted to abandon my original idea and go for something simpler to be able to move on in the project. 
- Suffers same lack of error handling as all scripts. 
- Could have improved maintainability by using object to create a poke object, but as I was not enjoying this project and running out of time, I used what I was more comfortable with.
- ##### Update: Tried using a class, but don't know if it was any point since there is only 1 instance of Pokemon (for now). Still learned a lot.
- This much repetition could be avoided with objects.
- Many async operations, not maintainable, could cause callback chaining. 
- Code overall is not very readable nor maintainable. 
- Functionalities are spread out and the structure is confusing. Functionalities should be better grouped in the structure.
- Process and workflow was a disaster. Should have planned what I wanted to do. Now, I ended up just making function after function with every new idea I had, but it ended up a big mess. 
- Could use an guide on the IU. 
- Overall a disaster, but I at least I had fun. 

### Learnings: 
I did not want to work on this project, as I felt very uninspired with programming. I did however find myself pouring a lot of heart and soul into getting it to work, perhaps more out of frustration than anything. I hope that I can come to enjoy programming soon. I think that I am fairly decent at seeing the flaws in my code, but I don't feel capable of correcting them. I enjoy writing out code, but as soon as something does not work I am lost and I struggle to backtrack. I think I should slow down, plan, comment and structure as I go, but I feel I lose my little logic train of thought if I do. I suppose it is a choice, to change my ways, because slow and steady wins the race, or learn how to deal with my own chaos. I do not think it is a defining choice for my future, but something I will have to decide on as I go. Priority should be to create programs that are nice to the user and code that is nice to my fellow programmers. I need to perhaps also remember that I am a beginner. 

As I went back to work after hand-in, I feel a lot better and I do not struggle anymore. I think not giving myself breaks made it worse.


