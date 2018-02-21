# my-favorite-things

Let's get to know each other and talk about our favorite things!

## Objective
Use **JavaScript For Loops, Event Listeners, and Arrays** to communicate what your favorite things are on click of a button.

## Prerequisites
To complete this project, students should have the following:
* Basic understanding of HTML structure and attributes.
* Basic understanding of Flex Box
* Basic understanding of JavaScript and DOM
* Introduction to For Loops

## Your Challenge

### Part I: Create your HTML Page
To complete this exercise, fulfill the following requirements:
1. Set up your project file structure through the command line.
2. Create the following:
* HTML, CSS, JS file
3. Link all of your files correctly.
4. Create the following in your HTML. The following elements are indented showing their nesting relationships. When you have finished coding your HTML, you should have 1 container with 3 divs of class "section" inside, and each section should have an h1 and button element:
* div with a class of "container"
  * div with a class of "section"
    * h1 with id of "response1"
    * button with id of "button1" and text of "My favorite desserts are..."

  * div with a class of "section"
    * h1 with id of "response2"
    * button with id of "button2" and text of "My favorite foods are..."
    
  * div with a class of "section"
    * h1 with id of "response3"
    * button with id of "button3" and text of "My favorite games are..."

### Part II: Adding Styles
To complete the second part of this exercise, fulfill the following requirements:

In your CSS file, do the following:
* Target the container class.
  * Set the width to 100% and height to 600px.
  * Activate flex box! *Hint: Use the property 'display'.*
  * Center your objects horizontally and vertically!
* Target the section class.   
  * Activate flex box!
  * Center your objects horizontally and vertically!
  * Set the proper direction of your ```flex-direction``` property so that it looks visually pleasing.

### Part III: Adding JS
To complete the third part of this exercise, fulfill the following requirements:

In your JS file, do the following:
1. Store your button1, button2, and button3 in variables. *Hint: Use ```document.getElementById()!```*
2. Store your response1, response2, and response3 divs in variables. *Hint: Use ```document.getElementById()!```*
3. Create a variable called 'favoriteDesserts'. Store an array of 3 strings, each string will be one of your favorite desserts.
4. Create a variable called 'favoriteFoods'. Store an array of 3 strings, each string will be one of your favorite foods.
5. Create a variable called 'favoriteGames'. Store an array of 3 strings, each string will be one of your favorite games.
6. Add an Event Listener to button1 that will listen for a click. When button1 is clicked, change the ```innerHTML``` of response1 to "Look in the console!". Then, create a for loop that will iterate through the length of the favoriteDesserts array and console.log every element in that array **using i**.
7. Add an Event Listener to button2 that will listen for a click. When button2 is clicked, change the ```innerHTML``` of response2 to "Look in the console!". Then, create a for loop that will iterate through the length of the favoriteFoods array and console.log every element in that array **using i**.
8. Add an Event Listener to button3 that will listen for a click. When button3 is clicked, change the ```innerHTML``` of response3 to "look in the console!". Then, create a for loop that will iterate through the length of the favoriteGames array and console.log every element in that array **using i**.

### Stretch Goals
1. Add pictures!
2. Pretty up the page!
3. Instead of changing the response innerHTML to "Look in the console!", change the response innerHTML to show the 1st, 2nd, and 3rd elements in the array. *Hint: Ex. You can add strings together to form a new string. If the elements in the array are strings, you could do arr[0]+arr[1]...etc. to form a new string!* 
