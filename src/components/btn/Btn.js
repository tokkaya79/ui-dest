import './style.scss';

const Btn = (props) => {
    const {text, color} = props
    
    return (
        <>
            <button className='btn' style={{ backgroundColor: color }}>{text}</button>
        </>
    )
}

export default Btn