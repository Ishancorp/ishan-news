export default function HeadlineCard({ title, description}){
    return(
        <section style={{ flex: "50%" }}>
            <div style={{ 
                margin: "1em", 
                padding: "0.5em", 
                height: "90%", 
                border: "1px solid black", 
                backgroundColor: "#EEEEFF",
                fontFamily: "Arial, Helvetica, sans-serif"
            }}>
                <h2>{ title }</h2>
                <p>{ description }</p>
            </div>
        </section>
    )
}