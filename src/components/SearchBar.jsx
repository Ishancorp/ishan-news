export default function SearchBar({ setSearchTerm }){
    const handleChange= event => {
        setSearchTerm(event.target.value);
    }

    return (
        <form>
            <label>
                Search:
                <input type="text" onChange={handleChange}/>
            </label>
        </form>
    )
}