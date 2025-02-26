import React from "react"

const PrintNumbers = (props)=>{
    if(props.children) return props.numsList.map(num => React.cloneElement(props.children, {num,onClick: props.children.props.onClick}))
    return props.numsList.map(num => <h1>{num}</h1>)
}

export default PrintNumbers;