export default function DropdownBox({ options, searchTerm }){
    return (
        <select value={searchTerm}>
            {options.map(opt => <option value={opt}>{opt}</option>)}
        </select>
    )
}