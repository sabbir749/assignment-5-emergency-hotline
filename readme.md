### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?


Ans: By getElementById we can select only one item with a specific id name from the DOM. On the other hand by getElementByClassName we can select multiple items with the class name from the DOM. By querySelector we can select the first item of the element. On the other hand querySelectorAll will select all the items of the element from DOM with the same name.

2. How do you **create and insert a new element into the DOM**?


Ans: To create a new div we can use ---> document.createElement('div'); Then to insert something to the div we can use--->div.innerText/  div.innerHTML etc. And then we can use appendChild(div) to create a new element.

3. What is **Event Bubbling** and how does it work?


Ans: In DOM event bubbling is a way to travel trough the DOM element. It works like water bubble. Like- when users click a button it will happened in the button then will go up to its parent and then the grandparents it will go up and up. Thus it works.

4. What is **Event Delegation** in JavaScript? Why is it useful?


Ans: Event delegation is a way to travel trough the DOM elements. We can use eventListener to the parent and access all the child elements through event delegation. It is the best way to make a website dynamic using Event Delegation. We don't need to use loop to traverse through dom. For this the website becomes more fast. 

5. What is the difference between **preventDefault() and stopPropagation()** methods?


Ans: In form submission we can use preventDefault() to stop reloading the page after clicking submit button in a form. On the other hand, stopPropagation will stop bubbling to the element up to it. It will stop bubbling to its parent element.
