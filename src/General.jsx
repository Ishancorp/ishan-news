import { useEffect, useState } from 'react';
import HeadlineCard from './components/HeadlineCard';
import SearchBar from './components/SearchBar';
import DropdownBox from './components/DropdownBox';

function General({ endpoint }){
    const [resp, setResp] = useState({});
    const [searchTerm, setSearchTerm] = useState("Top");
    const [sortBy, setSortBy] = useState("popularity");

    let url = `https://newsapi.org/v2/${ endpoint }?` +
            `q=${ searchTerm }&` +
            'from=2024-04-11&' +
            `sortBy=${ sortBy }&` +
            'apiKey=e3bb5b48e68c4b8db652953af343f02c';

    useEffect(()=>{
        fetch(url)
          .then(response => response.json())
          .then(response => setResp(response));
       }, [searchTerm]);

    return(
        <>
            <SearchBar searchTerm={searchTerm}/>
            <DropdownBox options={["relevancy", "popularity", "publishedAt"]} setSelection={setSortBy}/>
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

export default General;