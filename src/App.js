
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// import {increment, decrement} from './ReducersToolkit/counter-toolkit-reducer';
import {increment, decrement} from './ReducersToolkit/counter-toolkit-slice';

function App(props) {
  const dispatch = useDispatch();

  const countValue = useSelector(state => {
    return state.toolkit.count

  })
  const changeCount = (value) => (e) => {
    value === 'plus' ? dispatch(increment()) : dispatch(decrement())
  } 

  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={changeCount('plus')}>+</button>
      <h3>{countValue}</h3>
      <button onClick={changeCount('minus')}>-</button>

    </div>
  );
}

export default App;
