import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { BsSearch, BsPlayFill } from "react-icons/bs";
// import {ACTIONS} from '../App.js'

const DisplayWordInput = ({
  handleChange,
  handleClick,
  value,
  wordMeaning,
  errWord,
  fontType,
}) => {
  console.log(fontType);
  // console.log(wordMeaning)

  const [meaning, setMeaning] = useState({
    wordPhonetic: "",
    wordSearched: "",
    wordSound: "",
    wordNotFound: "",
  });

  useEffect(() => {
    if (wordMeaning != undefined) {
      const { word } = wordMeaning;

      let sound;
      let phonetic;

      for (let i = 0; i < wordMeaning.phonetics.length; i++) {
        const phonet = wordMeaning.phonetics[i];

        phonetic = phonet.text;

        if (phonet.audio) {
          sound = phonet.audio;
        }
      }
      // wordMeaning.phonetics
      setMeaning((prevState) => ({
        wordPhonetic: phonetic,
        wordSearched: word,
        wordSound: sound,
        ...prevState,
      }));
    } else {
      setMeaning((prevState) => ({
        ...prevState,
        wordNotFound: errWord,
      }));
    }
  }, [wordMeaning]);

  // console.log(meaning.wordNotFound)

  const handlePlayWord = (e) => {
    e.preventDefault();
    const sayWord = new Audio(meaning.wordSound);
    sayWord.play();
  };

  const resetState = () => {
    setMeaning({});
  };

  const renderWord = ()=>{ 

      if(meaning.wordSearched){ 
        return <h2 className="input-word" > {meaning.wordSearched} </h2>;
      }
        else if(meaning.wordNotFound){ 
          return <h2 className="input-word"> word not found </h2>
        }
        else{ 
          return null
        }
      }

  

  return (
    <>
      <div className="container">
        <div className="display-wrap">
          <div className="display-input">
            <form onSubmit={(e) => handleClick(e, resetState)}>
              <input
                type="text"
                placeholder="enter word"
                className="word-field"
                value={value}
                onChange={handleChange}
                required
              />

              <button type="submit" className="search-btn">
                <BsSearch className="btn-fnt" />
              </button>
            </form>
          </div>

          <div
            className={
              meaning.wordSound
                ? "input-sound-wrap"
                : "input-sound-wrap input-sound-row"
            }
            style={{fontFamily:fontType}}
          >
            {renderWord()}
            

            {meaning.wordSound && (
              <span className="play-word">
                <BsPlayFill className="play-btn" onClick={handlePlayWord} />
              </span>
            )}
            <small className="phonet">{meaning.wordPhonetic}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayWordInput;
