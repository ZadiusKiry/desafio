import React from 'react'

const RedButton = ({setColor}) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 p-3 ">
            
            <button type="button" onClick={()=>setColor('red')} className="btn btn-primary btn-lg">Red Button</button>

        </div>
    )
}

export default RedButton