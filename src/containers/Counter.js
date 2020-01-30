import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../components/CounterControl/CounterControl';
import CounterOutput from '../components/CounterOutput/CounterOutput';
import * as actionCreators from '../store/actions/index';

class Counter extends Component {

    state = {
        counter: 0
    }

    counterChangedHandler(action, value) {
        switch (action) {
            case 'inc':
                this.setState({ counter: this.state.counter + value });
                break;
            case 'dec':
                this.setState({ counter: this.state.counter - value });
                break;
            case 'add':
                this.setState({ counter: this.state.counter + value });
                break;
            case 'sub':
                this.setState({ counter: this.state.counter - value });
                break;
            default: break;
        }
    }
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 15" clicked={() => this.props.onAddCounter(15)} />
                <CounterControl label="Subtract 10" clicked={() => this.props.onSubtractCounter(10)} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {
                        this.props.storedResults.map(strResult => (
                            <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                        )
                    )
                }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: (value) => dispatch(actionCreators.add(value)),
        onSubtractCounter: (value) => dispatch(actionCreators.subtract(value)),
        onStoreResult: (value) => dispatch(actionCreators.storeResult(value)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);