## Flight Search Engine - Interview Problem

##### Brief​:
Here, we want to implement Flight search functionality. You have a form, where user can input
and search for the flights. Then user will be able to see the search results, user can refine the
search using a slider for prices.

##### Problem statement​:
* Create a flight JSON data object for your all flights available to make the search happen.
* Take the User input from the search form and perform a search on the flight JSON data
and display the valid search results in the results section.
* There are two tabs for return and one way search form, the return date should be visible
on basis of the tab selected.
* Slider should refine the search results based on the selected price range.
* Feel free to use any JS frameworks (like Angular or ReactJS) or Core JS to build this
application.
* Test your code with some unit tests.

### Installation
To get the project running on your local machine firstly take a clone of this repo onto your local machine. Then `cd` into the root directory on your CLI tool(eg. CMD prompt or Terminal) and then run `npm install`. This will install all the node packages you require to run the project.

```
npm install
```

### How to Run

The project is bootstrapped with create react app. You can follow the below mentioned methods to run the website depending on the build you prefer.

 _Note:_ `cd` into the root folder on your CLI tool and then run the commands.

To run the devolopment build with auto reload use the following command:
```
npm start
```

To run the production build use the following command:
```
npm run build
serve -s build
```

### How to Build for production

To get the production build use the following command from the root folder:
```
npm run build
```

This command will optimize the files and output it to the **build** folder. Use the contents of this folder for your production hosting.

## How to Test

To test use the following command from the root folder:
```
npm run test
```

### Notes

Since this is a demo the dataset for the flight search is limited. The results will only visible for the following criteria:

###### Dates
*oneway*: 24th November 2018
*roundtrip*: 24th November 2018 departure and 25th November 2018 return

###### Cities
Mumbai, Delhi, Pune, Cochin

## LICENSE

MIT License

Copyright (c) 2017 Najmal K V

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.