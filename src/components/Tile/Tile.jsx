import './Tile.css'

function Tile({image=null, title, paragraphs = []}) {

    let content;
    if (image !== null) {
        content = <img src={image} alt={title + " image"} />
    } else {
        content =
            <>
                <h2>{title}</h2>
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </>
    }

    return (
        <section>
            {content}
        </section>
    )
}

export default Tile
