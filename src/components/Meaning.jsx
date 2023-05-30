import React, { useState } from 'react'
import { useEffect } from 'react'

function Meaning(props) {



    console.log(props.meaning)

        const [meaning, setMeaning] = useState([]);

    // let speech
    useEffect(()=>{ 
        setMeaning(props.meaning);
    }, [meaning])

    // const {wordMeaning} = meaning
    console.log(meaning.meanings)

    // const meaningWord = meaning.meanings.map((item, index)=>{ 
    //     return(
    //         <p>{item.partOfSpeech}</p>
    //     )
    // })


    console.log(meaning.meanings)
  return (
    <> 
    <div className="container">
        <div className="meaning-wrap">

            {meaning.meanings && meaning.meanings.map((item, i)=>{ 
                    
              return (  <div className="meaning-wrapper" key={i}>
                            <div className="meaning-wrap-heading">
                                <small className="partSpeech" >
                                            {item.partOfSpeech}
                                            
                                    </small> 
                                    <hr className="partSpeechBar" />
                                
                            </div>
                            
                            <div className="mean-wrap">
                                <h5 className="mean-heading">
                                Meaning
                                </h5>
                                <ul className="mean-list">
                                {item.definitions.map((mean, i)=>{ 

                                   return ( 
                                   <li className="mean-listing" key={i}>
                                    {mean.definition}
                                    </li>)
                                    })}
                                </ul>
                                
                            </div>
                        </div>  

                    )


            })}
            
            
            {/* <div className="mean-wrap">
                <h5 className="mean-heading">
                    Meaning
                </h5>
                <ul className="mean-list">
                    <li className="mean-listing">
                        (etc.) Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aspernatur tempore. Autem earum veritatis reprehenderit!
                    </li>
                    <li className="mean-listing">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quis neque doloribus? Modi, sunt aliquid. Ducimus dolorem ea et expedita accusamus. Fuga in nulla perspiciatis deserunt, vitae ut!
                    </li>
                    <li className="mean-listing">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolores autem vero nisi praesentium minus nemo quam! Sunt, dolore vitae!
                    </li>
                </ul>

                <div className="mean-syn">
                    <h5 className="mean-heading">
                        Synonyms
                    </h5>
                    <small className="syn-word">
                        electronic keyboard
                    </small>
                </div>
                
                <small className="partSpeechTwo">
                verb
                </small>
                <hr className="partSpeechTwoBar" />
            </div>

            <h6 className="mean-src">
                <a href='#'>www.walter.com</a> live
            </h6> */}
        </div>
    </div>
    

    </>
)
}

export default Meaning