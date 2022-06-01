import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const style = {marginRight: '10px'}
class App extends React.Component {
  state = {
    num: 0
  }

  handlerForm = (e) => {
    e.preventDefault();
    e.target.reset();
  }

  handlerAddQuantity = (e) => {
    this.props.addQuantity(this.state.num);
  }

  handlerSubtractQuantity = (e) => {
    this.props.subtractQuantity(this.state.num);
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
              <input name='add' style={style} type='text' onChange={(e) => this.setState({num: e.target.value})}/>
              <button style={style} onClick={this.handlerAddQuantity}> Add quantity </button>
              <input name='subtract'style={style} type='text' onChange={(e) => this.setState({num: e.target.value})}/>
              <button  onClick={this.handlerSubtractQuantity}> Subtract quantity </button>
            </form>
        </div>
    );
 }
}

function mapStateProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () =>  dispatch({type: 'counter/increase'}),
    decrease: () =>  dispatch({type: 'counter/decrease'}),
    addQuantity: (num) =>  dispatch({type: 'counter/addQuantity', payload: num}),
    subtractQuantity: (num) =>  dispatch({type: 'counter/subtractQuantity', payload: num})
  }
}

export default connect(mapStateProps, mapDispatchToProps)(App);
