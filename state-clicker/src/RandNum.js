import { Component } from "react";

class RandNum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            isWinning: false
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState({number: Math.floor(Math.random() * (11 - 1) + 1)});
    }

    render() {
        return(
            <div>
                <h1>Number is {this.state.number}</h1>
                <button onClick={this.handleClick}>Random Number</button>
            </div>
        );
    }
}

export default RandNum;