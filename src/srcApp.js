// const template = (
//     <div>
//         <h1 id="par">Hello World</h1>
//         <p>Para</p>
//     </div>
// )

let count = 0;

const addOne = () => {
    count++;
    render();
}

// Add function to handle -1 button event
const deductOne = ()=>{
    count--;
    render();
}

const resetCounter = ()=>{
    count = 0;
    render();
}

const render = () => {
    const counterTemplate = (
        <div>
            <h1 id="counter" className="counter">{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={deductOne}>-1</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    );
    
    const myApp = document.querySelector("#my-app");
    
    ReactDOM.render(counterTemplate, myApp);
}
render();