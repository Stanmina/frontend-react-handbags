import './Button.css'

function Button({title, isDisabled=false}) {

    function onClick() {
        console.log(title)
    }

    return (
        <button disabled={isDisabled} onClick={onClick}>{title}</button>
    )
}

export default Button
