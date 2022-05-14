This website allows a user to select their pizza type: including size, toppings. Once selected it will return their pizza order and the total cost of their selection based on which combination they chose. 

Describe: (PizzaParty)

Test: It should return a PizzaParty object with the properties of toppings, and size.
Code: console.log(PizzaParty)
Expected Output: PizzaParty(toppings, size) { 
    this.toppings = toppings;
    this.size = size; 
    this.cost = 0;
  } 

Describe: (sizeCost)

Test: It should return the price of a small pizza when selected. 
Code: console.log(this.cost)
Input: User selects: small
Expected Output: 10

Test: It should return the price of a medium pizza when selected. 
Code: console.log(this.cost)
Input: User selects: medium
Expected Output: 15

Test: It should return the price of a large pizza when selected. 
Code: console.log(this.cost)
Input: User selects: large
Expected Output: 20



### SETUP and INSTALLATION REQUIREMENTS

# Pizza Party 
### By Adrienne Matosich

## Technologies Used
* HTML
* CSS
* Bootstrap
* jQuery
* JavaScript

## Setup/Installation Requirements
Open by downloading:

Download the repository onto your computer
Drag and drop index.html into your web browser from gh-pages: https://ampando.github.io/Pizza-Party/

Open with Bash/GitBash:

Open your bash terminal
Use git clone, copy and paste github URL using clone or
Download green button: https://ampando.github.io/Pizza-Party/
Navigate into the 'My-Portfolio' directory using cd My-Portfolio
Open in Visual Studio code using 'code .' command
Open index.html in Chrome or preferred browser: 'open index.html

## Known Bugs
Unable to return cost value with submit button. 

License:
MIT

#### Support and Contact Details:

For questions or concerns please contact Adrienne Matosich at amatosich@mgmail.com

Copyright (c) 2022 Adrienne Matosich