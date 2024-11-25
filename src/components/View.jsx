import React from 'react'
import Add from '../components/Add'
import Edit from '../components/Edit'

const View = () => {
  return (
    <>
      <div className="d-flex justify-content-between mt-3">
        <h2 className="text-info">All Projects</h2>
        <div> <Add/> </div>
      </div>
      <div className="mt-2">
        {/* project */}
        <div className="border rounded p-2 d-flex justify-content-between mt-3">
        <h3>Title</h3>
        <div className="d-flex align-items-center">
          <div> <Edit/> </div>
          <button className="btn"> <a href='' target='_blank'> <i className='fa-brands fa-github'></i></a>  </button>
          <button className="btn"> <a href='' target='_blank'> <i className='fa-solid fa-trash text-danger'></i></a>  </button>
        </div>
        </div>
       


      </div>
    </>
  )
}

export default View