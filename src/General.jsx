import { useEffect, useState } from 'react';

function HeadlineCard({ title, description}){
    return(
        <div style={{ flex: "50%" }}>
            <div style={{ 
                margin: "1em", 
                padding: "0.5em", 
                height: "90%", 
                border: "1px solid black", 
                backgroundColor: "#EEEEFF" 
            }}>
                <h2>{ title }</h2>
                <p>{ description }</p>
            </div>
        </div>
    )
}

function General(){
    const [resp, setResp] = useState({});
    const [searchTerm, setSearchTerm] = useState("Top");

    let url = 'https://newsapi.org/v2/everything?' +
            `q=${ searchTerm }&` +
            'from=2024-01-11&' +
            'sortBy=popularity&' +
            'apiKey=e3bb5b48e68c4b8db652953af343f02c';

    useEffect(()=>{
        fetch(url)
          .then(response => response.json())
          .then(response => {console.log(response);setResp(response)});
       }, []);

    return(
        <>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {resp.articles.map(({title, description}) => 
                    <HeadlineCard title={title} description={description}/>
                )}
            </div>
        </>
    )
}

export default General;