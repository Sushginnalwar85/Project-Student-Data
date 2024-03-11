import React from 'react';
import './student2.css'

const Student2 = () => {
  return (
    <div className='student-details-container'>
        <div className='student-card'>
            <div className='student-img-container'>
                <img src='https://res.cloudinary.com/dpyi7igie/image/upload/v1710145088/Girls%20Images/taxmyhfy0gihpdvsrtq4.jpg'
                alt='student-img'
                className='student-img'
                />
            </div>
            <div>
              <h2 className='name-heading'>NAME : Jasmita Shukla</h2>
              <p className='student-details'>Gender : Female</p>
              <p className='student-details'>Email : jasmita@gmail.com</p>
              <p className='student-details'>ADDRESS : Nagpur</p>
              <p className='student-details'>EDUCATION : BCA</p>
              <p className='student-details'>PHONE NO. : 0000000000</p>
            </div>
            
        </div>
    </div>
  )
}

export default Student2