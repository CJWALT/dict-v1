import React, { useEffect, useReducer } from "react";
import "./main.scss";
import Header from "./components/Header";
import DisplayWordInput from "./components/DisplayWordInput";
import Meaning from "./components/Meaning";
import axios from "axios";

export const ACTIONS = {
  INPUTWORD: "inputWord",
  LOAD_SUCCESS: "getWord",
  FETCH_ERR: "fetchErr",
  RESET_STATE: "resetState",
  SET_FONT:"setFont"
};

const initialInput = {
  value: " ",
  loading: true,
  error: null,
  data: [],
  font:'mada'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INPUTWORD:
      return {
        ...state,
        value: action.payload,
      };

    case ACTIONS.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case ACTIONS.FETCH_ERR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    
    case ACTIONS.SET_FONT:
      return{
          ...state,
          font:action.payload
      }
      
    case ACTIONS.RESET_STATE:
      return initialInput;
    

    default:
      throw new Error();
  }
}

export default function App() {
  const [inputState, dispatch] = useReducer(reducer, initialInput);

  //fetch word

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputState.value}`;
  const fetchData = () => {
    axios
      .get(url)
      .then((res) => {
        dispatch({
          type: ACTIONS.LOAD_SUCCESS,
          payload: res.data,
        });
        console.log(res.data);
      })

      .catch((err) => {
        console.log(err);
        dispatch({
          type: ACTIONS.FETCH_ERR,
          payload: err.message,
        });
      });
    // .finally(()=>{
    //   dispatch({type: ACTIONS.RESET_STATE})
    // })
  };

  const [word] = inputState.data;

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch({
      type: ACTIONS.INPUTWORD,
      payload: value,
    });
  };

  const handleClick = (e, resetState) => {
    e.preventDefault();

    console.log("search clicked");
    console.log(inputState.value);

    fetchData();
    // console.log(inputState.data)

    dispatch({ type: ACTIONS.LOAD_SUCCESS, payload: [] });
    dispatch({ type: ACTIONS.FETCH_ERR, payload: null });

    // callback()
    resetState();

    console.log("error2 " + inputState.error);
    console.log(inputState.data);
  };

  useEffect(() => {
    dispatch({ type: ACTIONS.RESET_STATE });
  }, [initialInput.data, initialInput.error]);


  const handleFontChange = (event) =>{ 

      // const value = [event.target.value]  
      dispatch({ 
        type:ACTIONS.SET_FONT, 
        payload:event.target.value
      })

  }


  console.log(inputState.font)

  console.log(inputState.error);
  return (
    <>
      <Header fontType={handleFontChange} fontValue={inputState.font}/>
      {word || inputState.error ? (
        <DisplayWordInput
          wordMeaning={word}
          errWord={inputState.error}
          value={inputState.value}
          handleChange={handleChange}
          handleClick={handleClick}
          fontType={inputState.font}
        />
      ) : (
        <DisplayWordInput
          // playWord={handlePlayWord}
          // wordMeaning = {word}
          value={inputState.value}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      )}
      {word && <Meaning meaning={word} fontType={inputState.font} />}
    </>
  );
}
