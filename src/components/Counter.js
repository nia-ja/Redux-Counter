import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement, clear } from '../actions';

class Counter extends Component {
    incrementIfOdd = e => {
        e.preventDefault();
        if (this.props.count % 2  !== 0) {
            this.props.increment();
        }
    };
    incrementAsync = e => {
        e.preventDefault();
        setTimeout(() => this.props.increment(), 1000);
    };
    incrementHandler = e => {
        e.preventDefault();
        this.props.increment();
    }
    decrementHandler = e => {
        e.preventDefault();
        this.props.decrement();
    }
    clearHandler = e => {
        e.preventDefault();
        this.props.clear();
    }

    render() {
        return (
            <div className="App">
                <div className="Counter">
                    <p>
                        Clicked: <span>{this.props.count}</span> times
                    </p>
                    <div className="controls">
                        <button className="operations" onClick={this.incrementHandler}>+</button>
                        <button className="operations" onClick={this.decrementHandler}>-</button>
                        <button onClick={this.incrementIfOdd}>
                            Increment if odd
                        </button>
                        <button onClick={this.incrementAsync}>
                            Increment async
                        </button>
                        <button className="clear" onClick={this.clearHandler}>Clear</button>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

export default connect(mapStateToProps, { increment, decrement, clear })(Counter);
