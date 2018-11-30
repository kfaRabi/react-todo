const template = (
    <div>
        <h1 id="par">Hello World</h1>
        <p>Para.</p>
    </div>
)

// Exercise 1: Create a template called personTemplate and add JSX for
// the followings:
// ---------------------------------------------------
// h1 -> Your name (i.e. Jane Doe)
// p -> Youw batch (i.e. Batch: 35th)
// p -> Your hometown (i.e. Hometown: Dhaka)

const myApp = document.querySelector("#my-app");

ReactDOM.render(template, myApp)
