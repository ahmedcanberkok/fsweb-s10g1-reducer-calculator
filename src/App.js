import React from 'react';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import { addOne,applyNumber,changeOperation,reset,memory,resetMemory,addMemory } from './actions';

function App() {
  const [state,dispatch] = useReducer(reducer,initialState);
  const handleClick= (e) => {
    dispatch(applyNumber(parseInt(e.target.value)))
  }
  const handleClick1 = (e) => {
    dispatch(changeOperation(e.target.value));
  }
  const handleClick2 = (e) => {
    dispatch(reset());
  }
  const handleClick3 = (e) => {
    dispatch(memory());
  }
  const handleClick4 = (e) => {
    dispatch(resetMemory());
  }
  const handleClick5 = (e) => {
    dispatch(addMemory());
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton onClick={handleClick3} value={"M+"} />
              <CalcButton onClick={handleClick5} value={"MR"} />
              <CalcButton onClick={handleClick4} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={1} />
              <CalcButton onClick={handleClick} value={2} />
              <CalcButton onClick={handleClick} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={4} />
              <CalcButton onClick={handleClick} value={5} />
              <CalcButton onClick={handleClick} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={7} />
              <CalcButton onClick={handleClick} value={8} />
              <CalcButton onClick={handleClick} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={handleClick1} value={"+"} />
              <CalcButton onClick={handleClick1} value={"*"} />
              <CalcButton onClick={handleClick1} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClick2} value={"CE"} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
