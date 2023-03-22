import React from 'react'

function BoxLabel(props) {
    return (
        props.items.map( (item, index) => {
            return <span key={index} className="box-label">{item.name}</span>
        })
    )
}

export default BoxLabel
