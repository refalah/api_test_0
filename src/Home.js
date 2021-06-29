import React, {useState, useEffect, useReducer} from 'react';

function reducer(state, action){
    

    switch (action.type) {
        case "ADD_NEW":
            return {words : [...state.words, {text: action.text}]}
        default:
            break;
    }
}


const Home = () => {
    
    const [post, setPost] = useState([])
    const [quote, setQuote] = useState([])
    const [kanye, setKanye] = useState([])

    const [{words}, dispatch] = useReducer(reducer, {words: []})
    const [text, setText] = useState()

    const changeNow = () => {
        fetch('https://api.kanye.rest/')
        .then((res) => res.json()).then((json) => setPost(json))
        //.then((res) => console.log(res.data));
    }

    const captureInput = (e) => {
        setQuote(e.target.value);
    }

    const addNew = (text) => {
        dispatch({
            type: "ADD_NEW", text
        })
        setText("");
    }

    const addQuote = (ka) => {
        setKanye([...kanye, ka])
    }

    useEffect(() => {
        changeNow();
    }, [])

    console.log(kanye)
    
    return (
        <div>
            <div className='container'>
                <div className='btn-group'>
                    <button onClick={() => changeNow()}>Change</button>
                    <br/>
                    <div onClick={() => addQuote(post.quote) }>
                        {post.quote}
                    </div>                    
                    <br/>
                    <br/>
                    <input type='text' value={text} onChange={(e) => setText(e.target.value)}></input>
                    <button onClick={() => addNew(text)}>Add New Quote</button>
                </div>
                {words.map((w, idx) => 
                <div>
                    <div key={w.text}>{w.text}</div>                    
                </div>
                )}
                <br/>
                <br/>
                {kanye.map((k, idx) => <div>{k}</div>)}
            </div>
        </div>
    )
}

export default Home
