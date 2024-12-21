import React from 'react'


const About = () => {
  return (

<div className="about-page d-flex justify-content-center align-items-center mt-4 bg-white">
      <div className="text-center col-lg-6 col-sm-10 col-md-10 col-10">
        <h1 className="text-danger">QuizMaster</h1>
        <p className="text-black fs-4">
          Welcome to QuizMaster, the ultimate platform to test your knowledge and have fun while learning! Whether you're preparing for exams, exploring new topics, or just challenging your friends, QuizMaster offers quizzes across a variety of categories including:
        </p>
        
       <div className='align-items-center justify-content-center d-flex'>
       <ul className='text-start text-black'>
        <li>Metals and Non-Metals</li>
          <li>Magnetic Effects of Electric Current</li>
          <li>How Do Organisms Reproduce</li>
          <li>Heredity</li>
        </ul>
       </div>
       
          
       

        <p className="text-black fs-4">
          With our interactive and user-friendly interface, you'll enjoy an engaging experience tailored just for you. Dive in and become a quiz master today!
        </p>
      </div>
    </div>
   
  )
}

export default About
