import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addQuantityF, asyncIncreaseF, decreaseF, increaseF, subtractQantityF } from './redux/actions/actions';
import Counter from './redux/Counter';

const style = {marginRight: '10px'}
class App extends React.Component {
  state = {
    num: 0
  }

  handlerForm = (e) => {
    e.preventDefault();
    e.target.reset();
  }

  handlerAddQuantity = () => {
    this.props.addQuantity(this.state.num);
    this.setState({num: 0});
  }

  handlerSubtractQuantity = () => {
    this.props.subtractQuantity(this.state.num);
    this.setState({num: 0});
  }

  handleAsyncIncrease = () => {
    this.props.asyncIncrease(this.state.num);
    this.setState({num: 0});
  }

  render() {
    return (
        <div className="App">
            <h1>Counter {this.props.counter}</h1>
            <hr />
            <button style={style} onClick={this.props.increase}> Add </button>
            <button onClick={this.props.decrease}> Subtract </button>
            <hr />
            <form onSubmit={this.handlerForm}>
              <input style={style} type='text' onChange={(e) => this.setState({num: e.target.value})}/>
              <button style={style} onClick={this.handlerAddQuantity}> Add quantity </button>
              <input style={style} type='text' onChange={(e) => this.setState({num: e.target.value})}/>
              <button  onClick={this.handlerSubtractQuantity}> Subtract quantity </button>
            </form>
            <Counter />
            <h1>Async thunk middleware {this.props.counter}</h1>
            <form onSubmit={this.handlerForm}>
              <input style={style} type='text' onChange={(e) => this.setState({num: e.target.value})}/>
              <button onClick={this.handleAsyncIncrease}> Async add </button>
            </form>
        </div>
    );
 }
}

function mapStateProps(state) {
  return {
    counter: state.counter1.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () =>  dispatch(increaseF()),
    decrease: () =>  dispatch(decreaseF()),
    addQuantity: (num) =>  dispatch(addQuantityF(num)),
    subtractQuantity: (num) =>  dispatch(subtractQantityF(num)),
    asyncIncrease: (num) => dispatch(asyncIncreaseF(num))
  }
}

export default connect(mapStateProps, mapDispatchToProps)(App);
