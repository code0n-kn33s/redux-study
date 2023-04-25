
import './App.css';
import { connect } from 'react-redux';
import {increment, decrement} from './ReducersToolkit/counter-toolkit-reducer';

function App(props) {
  const changeCount = (value) => (e) => {
    props.setCount(value)
  } 

  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={changeCount('plus')}>+</button>
      <h3>{props.count}</h3>
      <button onClick={changeCount('minus')}>-</button>

    </div>
  );
}

const stateFromProps = (state) => ({
  count: state.count
}) 
const dispatchFromProps = (dispatch) => ({
  setCount: (value) => dispatch({type: value === 'plus' ? "increment" : 'decrement'}),
})

export default connect(stateFromProps, dispatchFromProps)(App);
