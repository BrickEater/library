# library

5/05/2023
Started a new branch to make this project in react. Tomorrow I'll start the react stuff but today I only made the new branch and merged my readme file.

3/05/2023
I was told to make the book tile in react so I tried that today. I don't know what I'm doing so I'm a bit lost. I will keep at it until I get it but I feel like I should start this whole project over and make it all in react. That is the end goal anyway.

27/04/2023
I now have each book displayed in a table. I think, though, that I want to make a standardized "book card" so that it calls the book card function and fills it with information instead of rendering a table each time. It's definitely coming along but I'm leaning on the bot too much. I am not familiarizing myself with the functions and methods that are being used in my code which only leaves me vulnerable to future mistakes because I'm not investigating and implementing these tools. I worry I won't understand my own work and have a swiss cheese knowledge base if I keep doing this.

26/04/2023
Displaying the books on the page now. I need to change the function to make a table for the data. I think that will look better. I'm not sure if each book will need it's own div or if the table will be enough, though. Besides that, I always need to apply flexbox to the div holding the books.
Some things that are kinda clicking:
- When manipulating the DOM you need to target specific elements with document.getElementById
- You need to define a variable with the element
- To change the DOM you need to use document.createElement
- After creating an element you can use innerHTML to add text.
There are a lot of things to keep in mind but the general idea is coming together.

23/04/2023
I successfully put in a function that uses the new book function when the forms submit button is pressed. Because I put it below the function I needed to make an init function and go into the html to have it initialized on load (init = initialized). This seems to be for things to avoid sequencing and my website would get stuck in a function so it wouldn't recognize other code below the function. I hope I'm understanding the issue. It works now so next step is to display the books added.

21/04/2023
Very unmotivated but I'm keeping at it. I keep forgetting to add to this dev journal but I have been trying to code everyday. I made the constructor so the next step is to attach a function to the submit button in the modal that takes the information from the fields and puts it into the constructor.

18/04/2023
Added a modal window where I will put the form to add the book. I was planning on avoiding using ChatGPT a lot and pushing my memory to do this website but I asked it a question and it suggested that people often use modal windows to do what I was planning. I'll likely use the bot more to learn about this more.

17/04/2023
Started from the beginning with a better understanding on how I should approach this. I'm going to leave the style to the end and focus on getting all the functionality done first. I'm also going to avoid using the AI as much as possible.

15/04/2023
It turns out that there are further instructions for this project. I think, though, I'm going to start "finishing" a project and then forking the git branch to get practice with that. I know it's a skill I'll need to have and I'm not familiar with the process.

14/04/2023
So, project is done. The main thing I have to take away from this is if I'm going to use ChatGPT I need to be diligent in understanding what the bot gives me. Here's the things I took away from this project:
- I need to make variables that target elements in the DOM
- I need to make a function that pulls that information from the variable and places it into an array
- If the object that is being created is common I will make a constructor and refer to it in the function
- I need a function that displays the objects in the array
- Distinctly different to the array is a variable that needs to be made as a payload to move the most recent book.
    - As a side note, I suppose I could target the last object in the array instead of using this payload variable. Something like array.length.-1 or however you target the last item pushed to an array.
- Finally, and this is a big one, I need to remember that the variables in the JS file are not the same as the elements in the DOM that they are targeting. I, for whatever reason, was looking at them as the same thing as if by saying variable = element I was creating this superposition thing. Instead, I need to realize that defining a variable is just copying and pasting the current values from the element to the variable and that they are independent of each other.

13/04/2023
Added a function that displays the books added to the library. It's adding two books for each submission, though. I am assuming that it's calling the function twice, once when there is no information and a second time when there is information in the input fields. I should use this as an opportunity to practice the debugging method that is built into the browser. I need to step through the code to see when it is doing each thing.

09/04/2023
Put in a form into the site for the user to input the book information. ChatGPT suggested it might not be the best way but it seems the easiest. I'm not sure why it wouldn't be the best way, I asked the bot again and it gave answers made the form element seem fine to use.

05/04/2023
Started a new assignment where I need to make a library that shows books on a reading list or have already been read. The user can input this information and it can be stored and displayed.