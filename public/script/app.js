"use strict";

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        { id: "par" },
        "Hello World"
    ),
    React.createElement(
        "p",
        null,
        "Para."
    )
);

// Exercise 1: Create a template called personTemplate and add JSX for
// the followings:
// ---------------------------------------------------
// h1 -> Your name (i.e. Jane Doe)
// p -> Youw batch (i.e. Batch: 35th)
// p -> Your hometown (i.e. Hometown: Dhaka)

var myApp = document.querySelector("#my-app");

ReactDOM.render(template, myApp);
