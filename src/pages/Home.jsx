import React from 'react'
import { Link } from 'react-router-dom'
import  landingImg from '../assets/landingImg.jpg'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'

const Home = () => {
  return (
    <>
    {/* landing */}

      <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-item-center rounded shadow w-100 py-5">
        <div className='container py-5'>
          <div className="row align-item-center">
            <div className="col-lg-6">
              <h1 style={{fontSize:'70px'}}> <i className='fa-brands fa-docker'></i>
               Projects Fair</h1>
               <p style={{textAlign:'justify'}}>One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!</p>
               <Link to={'./login'} className='btn btn-warning'>STARTS TO EXPLORE</Link>
            </div>
            <div className="col-lg-6">
             <img className='img-fluid' src={landingImg} alt="" />
            </div>
          </div>

        </div>
      </div>

      {/* explore our projects */}

      <div className='my-5 text-center'>
        <h1 className='mb-5'>Explore Our Projects</h1>
        <marquee>
          <div className='d-flex'>
            <div className="me-5">
              <ProjectCard/>
            </div>
          </div>
         </marquee>
         <button className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS...</button>
      </div>

      {/* our testimonials */}

      <div className="text-center py-5">
        <h1 >Our Testimonials</h1>
        <div className="d-flex justify-content-evenly align-items-center py-5 w-100">
          {/* card */}
          <Card style={{ width: '18rem' }}>
     <Card.Body>
        <Card.Text className='d-flex justify-cntent-center align-items-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://www.vhv.rs/dpng/d/421-4212514_user-icon-round-png-png-download-user-round.png" alt="" />
          <div className="d-flex justify-content-center  my-3">
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
          </div>
        <p style={{textAlign:'justify'}}>Some quick example text to build on the card title and make up the
        bulk of the card's content.</p>
          
        </Card.Text>
        </Card.Body>
    </Card>
     {/* card */}
     <Card style={{ width: '18rem' }}>
     <Card.Body>
        <Card.Text className='d-flex justify-cntent-center align-items-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://www.vhv.rs/dpng/d/421-4212514_user-icon-round-png-png-download-user-round.png" alt="" />
          <div className="d-flex justify-content-center  my-3">
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
          </div>
        <p style={{textAlign:'justify'}}> Some quick example text to build on the card title and make up the
        bulk of the card's content.</p>
         
        </Card.Text>
        </Card.Body>
    </Card>
     {/* card */}
     <Card style={{ width: '18rem' }}>
     <Card.Body>
        <Card.Text className='d-flex justify-cntent-center align-items-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://www.vhv.rs/dpng/d/421-4212514_user-icon-round-png-png-download-user-round.png" alt="" />
          <div className="d-flex justify-content-center  my-3">
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
          </div>
        <p style={{textAlign:'justify'}}>Some quick example text to build on the card title and make up the
        bulk of the card's content.</p>
          
        </Card.Text>
         </Card.Body>
    </Card>
        </div>
      </div>



    </>
  )
}


export default Home