class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}


class Item extends React.Component {
    render() {
        return (
            <li>Item 1</li>
        )
    }
}
class Items extends React.Component {
    render() {
        return (
            <div>
                <ol>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </ol>
            </div>
        )
    }
}


const template = (
    <div>
        <Header title="Best App" />
        <Items />
    </div>
);

ReactDOM.render(template, document.getElementById("app"));