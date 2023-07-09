import React, { useReducer } from "react";
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText }
        case "toggleShowText":
            return { count: state.count, showText: !state.showText }
        default:
            return state
    }
}
const ReducerTut = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
    return (<div>
        <h1>This is ReducerTut  {state.count} </h1>
        <button onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "toggleShowText" })
        }}>click</button>
        {state.showText && <p>THIS IS A TEXT</p>}

    </div>)
}
export default ReducerTut;