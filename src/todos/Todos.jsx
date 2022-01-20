import React, { useReducer } from "react";
import style from "../style.module.css";

const init = {
  value1: 0,
  value2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "incriment":
      return { ...state, value1: state.value1 + action.val };
    case "decriment":
      return { ...state, value1: state.value1 - action.val };
    case "incriment2":
      return { ...state, value2: state.value2 + action.val };
    case "decriment2":
      return { ...state, value2: state.value2 - action.val };

    case "reset":
      return init;

    default:
      return state;
  }
};

const Todos = () => {
  const [count, dispatch] = useReducer(reducer, init);

  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid `}>
      <h4 className="text-center">مدیریت کارها </h4>
      <h1 className="text-center">{count.value1}</h1>
      <h1 className="text-center">{count.value2}</h1>
      <button
        className="btn btn-success"
        onClick={() => dispatch({ type: "incriment", val: 1 })}
      >
        افزایش
      </button>
      <button
        className="btn btn-danger"
        onClick={() => dispatch({ type: "decriment", val: 2 })}
      >
        کاهش
      </button>
      <button
        className="btn btn-warning"
        onClick={() => dispatch({ type: "reset" })}
      >
        ریست
      </button>
      <button
        className="btn btn-success"
        onClick={() => dispatch({ type: "incriment2", val: 5 })}
      >
        2افزایش
      </button>
      <button
        className="btn btn-danger"
        onClick={() => dispatch({ type: "decriment2", val: 5 })}
      >
        2کاهش
      </button>
      <button
        className="btn btn-warning"
        onClick={() => dispatch({ type: "reset" })}
      >
        2ریست
      </button>
      <br />
    </div>
  );
};

export default Todos;
