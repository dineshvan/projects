import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadAnswer,
  loadBackspace,
  loadButtons,
  loadClear,
} from "../redux/calculatorRedux/CalculatorAction";
import { CALCULATOR_KEY } from "../redux/calculatorRedux/CalculatorReducer";

function Calculator() {
  const dispatch = useDispatch();

  //handle answer
  const handleAnswer = (e) => {
    e.preventDefault();
    //alert (number)
    dispatch(loadAnswer());
  };

  //view store
  const viewCalculator = useSelector((state) => {
    return state[CALCULATOR_KEY];
  });

  return (
    <center>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-12">
            <h1>CALCULATOR</h1>
            <div class="main">
              <input
                type="text"
                class="form-control"
                id="display"
                value={
                  viewCalculator.ans.length === 0
                    ? viewCalculator.number
                    : viewCalculator.ans
                }
              />{" "}
              <br />
              <button
                onClick={() => dispatch(loadClear())}
                id="ac"
                class="btn btn-danger"
              >
                Ac
              </button>
              <button
                onClick={() => dispatch(loadBackspace())}
                id="de"
                class="btn btn-warning"
              >
                De
              </button>
              <button
                onClick={() => dispatch(loadButtons("%"))}
                id="%"
                class="btn btn-warning"
              >
                %
              </button>
              <button
                onClick={() => dispatch(loadButtons("/"))}
                id="/"
                class="btn btn-warning"
              >
                /
              </button>
              <br /> <br />
              <button
                onClick={() => dispatch(loadButtons("7"))}
                id="7"
                class="btn btn-primary"
              >
                7
              </button>
              <button
                onClick={() => dispatch(loadButtons("8"))}
                id="8"
                class="btn btn-primary"
              >
                8
              </button>
              <button
                onClick={() => dispatch(loadButtons("9"))}
                id="9"
                class="btn btn-primary"
              >
                9
              </button>
              <button
                onClick={() => dispatch(loadButtons("*"))}
                id="*"
                class="btn btn-warning"
              >
                X
              </button>
              <br /> <br />
              <button
                onClick={() => dispatch(loadButtons("4"))}
                id="4"
                class="btn btn-primary"
              >
                4
              </button>
              <button
                onClick={() => dispatch(loadButtons("5"))}
                id="5"
                class="btn btn-primary"
              >
                5
              </button>
              <button
                onClick={() => dispatch(loadButtons("6"))}
                id="6"
                class="btn btn-primary"
              >
                6
              </button>
              <button
                onClick={() => dispatch(loadButtons("+"))}
                id="+"
                class="btn btn-warning"
              >
                +
              </button>
              <br /> <br />
              <button
                onClick={() => dispatch(loadButtons("1"))}
                id="1"
                class="btn btn-primary"
              >
                1
              </button>
              <button
                onClick={() => dispatch(loadButtons("2"))}
                id="2"
                class="btn btn-primary"
              >
                2
              </button>
              <button
                onClick={() => dispatch(loadButtons("3"))}
                id="3"
                class="btn btn-primary"
              >
                3
              </button>
              <button
                onClick={() => dispatch(loadButtons("-"))}
                id="-"
                class="btn btn-warning"
              >
                -
              </button>
              <br /> <br />
              <button
                onClick={() => dispatch(loadButtons("0"))}
                id="0"
                class="btn btn-secondary"
              >
                0
              </button>
              <button
                onClick={() => dispatch(loadButtons("00"))}
                id="00"
                class="btn btn-secondary"
              >
                00
              </button>
              <button
                onClick={() => {
                  loadButtons(".");
                }}
                id="."
                class="btn btn-info"
              >
                .
              </button>
              <button onClick={handleAnswer} id="equal" class="btn btn-success">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}

export default Calculator;
