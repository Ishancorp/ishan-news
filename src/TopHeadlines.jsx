import { useEffect, useState } from 'react';
import HeadlineCard from './components/HeadlineCard';
import SearchBar from './components/SearchBar';

function TopHeadlines({ endpoint }){
    const [resp, setResp] = useState({});
    const [country, setCountry] = useState("US");
    const [source, setSource] = useState("");
    const [category, setCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("Top");

    let url = `https://newsapi.org/v2/${ endpoint }?` +
            `country=${ country }&` +
            `source=${ source }&` +
            `source=${ category }&` +
            `q=${ searchTerm }&` +
            `pagesize=20&` +
            `page=1&` +
            'sortBy=popularity&' +
            'apiKey=e3bb5b48e68c4b8db652953af343f02c';

    useEffect(()=>{
        fetch(url)
          .then(response => response.json())
          .then(response => setResp(response));
       }, [country, source, category, searchTerm]);

    return(
        <>
            <SearchBar setSearchTerm={setSearchTerm}/>
            <SearchBar setSearchTerm={setCountry}/>
            <SearchBar setSearchTerm={setSource}/>
            <SearchBar setSearchTerm={setCategory}/>
            <SearchBar setSearchTerm={setSearchTerm}/>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {resp && resp.articles && resp.articles.length ? 
                    resp.articles.map(({title, description}) => 
                        <HeadlineCard title={title} description={description}/>
                    ) : 
                    <div>No results found for: "{searchTerm}"</div>
                }
            </div>
        </>
    )
}

export default TopHeadlines;