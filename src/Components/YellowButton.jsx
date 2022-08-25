import React from 'react'

const YellowButton = ({setColor}) => {
    return (
        <div className="col-sm col-md-6 col-lg-3 p-3 ">
            <button type="button" onClick={()=>setColor('yellow')} className="btn btn-primary btn-lg">Yellow Button</button>
        </div>
    )
}

export default YellowButton