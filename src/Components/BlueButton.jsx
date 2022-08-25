import React from 'react'

const BlueButton = ({setColor}) => {
    return (
        <div className="col-sm col-md-6 col-lg-3 p-3 ">
            <button type="button" onClick={()=>setColor('blue')} className="btn btn-primary btn-lg">Blue Button</button>
        </div>
    )
}

export default BlueButton