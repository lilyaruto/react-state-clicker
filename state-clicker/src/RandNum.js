import { Component } from "react";
import "./RandNum.css"

class RandNum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
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
                <button className={this.state.number === 7 ? "notvisible" : "rand-button visible"} onClick={this.handleClick}>Random Number</button>
                <span className={this.state.number === 7 ? "win-msg visible" : "notvisible"}>you win!</span>
            </div>
        );
    }
}

export default RandNum;