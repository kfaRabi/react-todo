class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDescription() {
        return this.name + " is " + this.age + " years old";
    }

}

class Student extends Person {
    constructor(name, age, ID) {
        super(name, age);
        this.ID = ID;
    }

    getDescription() {
        return this.name + " is " + this.age + " years old and his id is " + this.ID;        
    }
}

const p = new Person("John", 30);
console.log(p.getDescription());

const p2 = new Person("Jane", 25);
console.log(p2.getDescription());

const stud = new Student("Dave", 19, "2013222");
console.log(stud.getDescription());


let items = ["Go to the market", "Clean room"];

const handleFormSubmit = (e) => {
    e.preventDefault();
    const val = e.target.elements.task.value;

    if(val) {
        items.push(val);
        e.target.elements.task.value = "";
        render();
    }
}

const handleClear = () => {
    items = [];
    render();
}




const render = () => {
 
    const template = (
        <div>
            <h1>App Title</h1>

            <ol>
                {items.map(item => <li key={item}>{item}</li>)}
            </ol>

            <button onClick={handleClear} disabled={items.length === 0 ? true : false}>Clear</button>

            <form onSubmit={handleFormSubmit}>
                <input type="text"  name="task"/>
                <button>Add Item</button>
            </form>
        </div>
    )

    const myApp = document.querySelector("#my-app");
    
    ReactDOM.render(template, myApp);
}

render();