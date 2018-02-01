# ws-challenge

## Requirements
Welcome to the Williams-Sonoma Coding Challenge

Using the json file provided below, given an input of products, design a page that:

-        Consumes the JSON of products

-         Builds the product details page with all products

-         Displays the product details, including price, product name and the main hero image

-         Interacts intuitivley; if you click on the image, you should see an overlay with a carousal of all thumbnail images

 JSON URL - https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json

 

### Guidelines

-         Use any view framework of your choice

-         As much as possible, stick to vanilla JavaScript for DOM handling (queries, events, etc.)

-         Spend your time in design and implementation. We are not looking for the quickest solution.

-         Detail your build system and tests in README.md – how do we run the tests and run the project?

-         Showcase your ES6 skills and your UX/UI chops. 

### Bonus

-         Responsive experience – 1 column on mobile to 3 columns on desktop

-         Accessibility and SEO 


## Notes
- Used Vue for visual framework since I wanted to learn a new one.  Overall, its a fairly effecient framework, and fairly easy to get started, but there was some weirdness that made it a little difficult to use in a first time project.

- I did not use any build systems (eg, Less), but I did use html5 boilerplate to get started (with JQuery removed for main project)

- Place files onto a web server (I used node http-server) to view.

- Tested in Chrome, Firefox, Edge browser.  Looks good on smaller devices (1 col display)

- QUnit was used for the unit testing, but I only did it for one object to demonstrate that I know what it is.  browse the /test directory to run the unit test.
