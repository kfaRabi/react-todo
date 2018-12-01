"use strict";

// const template = (
//     <div>
//         <h1 id="par">Hello World</h1>
//         <p>Para</p>
//     </div>
// )

var count = 0;

var addOne = function addOne() {
    count++;
    render();
};

// Add function to handle -1 button event
var deductOne = function deductOne() {
    count--;
    render();
};

var resetCounter = function resetCounter() {
    count = 0;
    render();
};

var render = function render() {
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
            { onClick: deductOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: resetCounter },
            "Reset"
        )
    );

    var myApp = document.querySelector("#my-app");

    ReactDOM.render(counterTemplate, myApp);
};
render();
