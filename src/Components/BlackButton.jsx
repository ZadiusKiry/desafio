import React from 'react'

const BlackButton = ({setColor}) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 p-3 ">
        
        <button type="button" onClick={()=>setColor('black')} className="btn btn-primary btn-lg">Black Button</button>

    </div>
  )
}

export default BlackButton