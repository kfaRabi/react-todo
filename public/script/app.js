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
        "Para"
    )
);

var addOne = function addOne() {
    console.log("Added One");
};

// Add function to handle -1 button event

var count = 0;

var counterTemplate = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        { id: "counter", className: "counter" },
        count
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "+1"
    ),
    React.createElement(
        "button",
        null,
        "-1"
    ),
    React.createElement(
        "button",
        null,
        "Reset"
    )
);

var myApp = document.querySelector("#my-app");

ReactDOM.render(counterTemplate, myApp);
