
const PrintNumber = ({num, onClick}) =>{
    return <p onClick={()=> onClick(num)}>{num}</p>
}

export default PrintNumber;