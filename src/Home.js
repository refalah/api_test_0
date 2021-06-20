import React, {useState, useEffect} from 'react';

const Home = () => {
    const [post, setPost] = useState([])
    const [quote, setQuote] = useState([])
    const changeNow = () => {
        fetch('https://api.kanye.rest/')
        .then((res) => res.json()).then((json) => setPost(json))
        //.then((res) => console.log(res.data));
    }

    const captureInput = (e) => {
        setQuote(e.target.value);
    }

    const addNew = (quote) => {
        // fetch('https://api.kanye.rest/', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         quote: quote
        //     }),
        //     headers: {
        //         'Content-type': 'application/json'
        //     }
        // })
        // .then((res) => res.json()).then((json) => console.log(json))
        setPost({
            ...post,
            quote: quote,
        })
        // setPost((prevPost) => {
        //     return [
        //         {
        //             quote: quote,
        //             id: Math.random().toString(),
        //         },
        //         ...prevPost
        //     ]
        // })
        console.log(post)
    }

    useEffect(() => {
        changeNow();
    }, [])

    console.log(post)
    
    return (
        <div>
            <div className='container'>
                <div className='btn-group'>
                    <button onClick={() => changeNow()}>Change</button>
                    <br/>
                    {[post.quote]}
                    <br/>
                    <br/>
                    <input type='text' onChange={(e) => captureInput(e)}></input>
                    <button onClick={() => addNew(quote)}>Add New Quote</button>
                </div>
            </div>
        </div>
    )
}

export default Home
