import React, {useState, useEffect} from 'react';

const Test2 = () => {
    const [post, setPost] = useState([])

    const viewData = () => {
        fetch('https://prodev-api.ilcs.co.id/ibis_api_external_dev_v2/index.php/SingleBilling/getSppBDoc')
        .then((res) => res.json()).then((json) => setPost(json))
    }

    useEffect(() => {
        viewData();
    }, [])

    console.log(post)
    return (
        <div>
            {post.data&&post.data.map((p, index)=> (
                <div key={p.ID_DOKUMEN}>{p.NAMA_DOKUMEN}</div>
            ))}
            
        </div>
    )
}

export default Test2
