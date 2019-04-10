import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component {
    incrementIfOdd = e => {
        e.preventDefault();
        if (this.props.count % 2 === 0 && this.props.count !== 0) {
            this.props.increment(this.props.count);
        }
    };

    incrementAsync = () => {
        // Stretch Problem: Implement an increment function that
        // increments after waiting for one second
    };
    incrementHandler = e => {
        e.preventDefault();
        this.props.increment(this.props.count);
    }
    decrementHandler = e => {
        e.preventDefault();
        this.props.decrement(this.props.count);
    }

    render() {
        return (
            <p>
                Clicked: {this.props.count} times
                <button onClick={this.incrementHandler}>
                    +
                </button>
                <button onClick={this.decrementHandler}>
                    -
                </button>
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                 {/* Uncomment these button tags if you got
                around to implementing the extra credit functions */}
                {/* 
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>  */}
            </p>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

export default connect(mapStateToProps, { increment, decrement })(Counter);
