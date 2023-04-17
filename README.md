# library

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