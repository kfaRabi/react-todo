"use strict";

var items = ["Go to the market", "Clean room"];

var handleFormSubmit = function handleFormSubmit(e) {
    e.preventDefault();
    var val = e.target.elements.task.value;

    if (val) {
        items.push(val);
        e.target.elements.task.value = "";
        render();
    }
};

var handleClear = function handleClear() {
    items = [];
    render();
};

var render = function render() {

    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "App Title"
        ),
        React.createElement(
            "ol",
            null,
            items.map(function (item) {
                return React.createElement(
                    "li",
                    { key: item },
                    item
                );
            })
        ),
        React.createElement(
            "button",
            { onClick: handleClear, disabled: items.length === 0 ? true : false },
            "Clear"
        ),
        React.createElement(
            "form",
            { onSubmit: handleFormSubmit },
            React.createElement("input", { type: "text", name: "task" }),
            React.createElement(
                "button",
                null,
                "Add Item"
            )
        )
    );

    var myApp = document.querySelector("#my-app");

    ReactDOM.render(template, myApp);
};

render();
