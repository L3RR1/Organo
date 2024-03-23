import './TextField.css'
const TextField = (props) => {

    const modifiedPlaceHolder = `${props.placeholder}...`

    return(

        <div className="TextField">
            <label>{props.label}</label>
            <input placeholder={modifiedPlaceHolder}/>
        </div>
    )
}

export default TextField;