"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name, age) {
        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: "getDescription",
        value: function getDescription() {
            return this.name + " is " + this.age + " years old";
        }
    }]);

    return Person;
}();

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age, ID) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.ID = ID;
        return _this;
    }

    _createClass(Student, [{
        key: "getDescription",
        value: function getDescription() {
            return this.name + " is " + this.age + " years old and his id is " + this.ID;
        }
    }]);

    return Student;
}(Person);

var p = new Person("John", 30);
console.log(p.getDescription());

var p2 = new Person("Jane", 25);
console.log(p2.getDescription());

var stud = new Student("Dave", 19, "2013222");
console.log(stud.getDescription());

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
