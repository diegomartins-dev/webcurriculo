import React from 'react'

function periods(items){
    return (
        items.map((item, index) => {
            return <p key={index} className={(items.length != index + 1) ? '--no-margin-bottom':''}>{item.content}</p>;
        })
    )
}

function draw(items){
    return (items.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <h3
              key={index}
              className="box-experiences__content__title"
            >
              {item.name}
            </h3>
            {periods(item.periods)}
          </React.Fragment>
        );
      })
    )
}

function BoxOffices(props) {
    return (
        draw(props.items)
    )
}

export default BoxOffices
