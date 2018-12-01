const template = (
    <div>
        <h1 id="par">Hello World</h1>
        <p>Para</p>
    </div>
)

const addOne = () => {
    console.log("Added One");
}

// Add function to handle -1 button event

let count = 0;

const counterTemplate = (
    <div>
        <h1 id="counter" className="counter">{count}</h1>
        <button onClick={addOne}>+1</button>
        <button>-1</button>
        <button>Reset</button>
    </div>
);

const myApp = document.querySelector("#my-app");

ReactDOM.render(counterTemplate, myApp);
