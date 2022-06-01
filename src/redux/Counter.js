import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    render() { 
        console.log('State2', this.props.counter);
        return (
             <div style={{padding: '20px', marginTop: '40px', border: '2px solid #ccc', borderRadius: '10px'}}>
                <h1> New counter {this.props.counter}</h1>
                <hr />
                <button style={{marginRight: '10px'}} onClick={this.props.increase}>+</button>
                <button onClick={this.props.decrease}>-</button>
            </div> 
        );
    }
}

function mapStateToProps(state){
    return {
        counter: state.counter2.counter2
    }
}

function mapDispatchToProps(dispatch) {
    return {
      increase: () =>  dispatch({type: 'counter2/increase'}),
      decrease: () =>  dispatch({type: 'counter2/decrease'})
    }
}    
 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);