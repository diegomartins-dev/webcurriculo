import React from 'react'

function Boxskills(props) {
    return (
        <div className="box-skills">
            { 
                props.title && 
                <div className="bg--info box--shadow">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="font--uppercase text--white text--shadow">
                                    {props.title}
                                    {/*  */}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boxskills
