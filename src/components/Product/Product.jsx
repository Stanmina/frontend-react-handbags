import './Product.css'

function Product({title, image, price, specialText}) {

    return (
        <article>
            <span>
                {specialText}
            </span>
            <img src={image} alt="Product image"/>
            <p>{title}</p>
            <h4>&euro;{price},-</h4>
        </article>
    )
}

export default Product
