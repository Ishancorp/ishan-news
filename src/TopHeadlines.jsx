import { useEffect, useState } from 'react';
import HeadlineCard from './components/HeadlineCard';
import SearchBar from './components/SearchBar';
import DropdownBox from './components/DropdownBox';

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
            <DropdownBox setSelection={setCountry}/>
            <DropdownBox setSelection={setSource}/>
            <DropdownBox setSelection={setCategory}/>
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