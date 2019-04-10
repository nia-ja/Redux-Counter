import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component {
    incrementIfOdd = e => {
        e.preventDefault();
        if (this.props.count % 2  !== 0) {
            this.props.increment(this.props.count);
        }
    };
    incrementAsync = e => {
        e.preventDefault();
        setTimeout(() => this.props.increment(this.props.count), 1000);
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
            <div className="App">
                <div className="Counter">
                    <p>
                        Clicked: <span>{this.props.count}</span> times
                    </p>
                    <button onClick={this.incrementHandler}>
                        +
                    </button>
                    <button onClick={this.decrementHandler}>
                        -
                    </button>
                    <button onClick={this.incrementIfOdd}>
                        Increment if odd
                    </button>
                    <button onClick={this.incrementAsync}>
                        Increment async
                    </button>
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

export default connect(mapStateToProps, { increment, decrement })(Counter);
