# Random Users

#### Site Link: https://relaxed-nobel-a7fef2.netlify.app/

### Project dependecies:
- [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview)

### Overview:

The website has 2 pages: index.html (All Users) and user.html (User details).

At first the index.html page loads (table headers,buttons,etc.), and then the index.js script starts running (using defer attribute).

In index.js there is only one call, to initializePage function, which calls loadPage function ,which gets a page number as a parameter and returns an array of users.
In the function we ask the server for 10 users from the relevant page.
When the results arrive,we create an array of UserItems,
and then return the array to the calling function (initializePage) and finally build a row in the table for every user in the array.

Now the user has 3 options:

1. click on a row to get details about a specific user
2. click on a mail link of a specific user
3. click on the prev/next button

#### Case 1:

We will move to user.html page. Same as before, the page will parse and load fully before the user.js script will starts running.

In user.js we call loadUser function which gets the username as a parameter and returns the relevant user from the server(\*). We get the username from the search bar(using location property). When the results arrive,the render function will be called and it will display the user details including a map(\*\*).
We can now click on the go back button to move to the previous page(using history property).

#### Case 2:

It will open the mailbox in order to send an email to the specific user we clicked on.

#### Case 3:

It will call prev/next function which will update the page number to page-1/page+1 ,then change the url in the search bar(using history.replaceState property),
and finally call initializePage function with the updated page number so it will update the table.


### Design comments
- I chose to add the page number to the query string because I needed a way to save the page's state, so I will get to the right page as before and not the first page in case of refresh or back from a user page. Also if I want to send the link to someone ,it will open in the right page.

- I chose to implement the site with vanilla javascript (without any framework like React) because I wanted to use javascript APIs and DOM manipulations myself.

### Problems:

(\*) I didn't find an option to get a user by unique id or username from the API. Possible solutions were to return the same/random person details each time, or to first get all the users details in the page, and then access the relevant one by index.
I chose the second option (for sanity purpose) but this is a very inefficient way!
Also it doesn't make any sense that there is no option to get a specific person by a unique ID from the API.

(\*\*) It looks like users data is unreliable so there are often many problems with that. For example: a picture of a young woman with an older age, coordinates outside the map / in the middle of the ocean , etc.
