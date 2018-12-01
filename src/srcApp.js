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