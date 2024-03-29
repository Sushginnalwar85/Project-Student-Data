import React from 'react';
import './student5.css'

const Student5 = () => {
  return (
    <div className='student-details-container'>
        <div className='student-card'>
            <div className='student-img-container'>
                <img src='https://res.cloudinary.com/dpyi7igie/image/upload/v1710145178/Girls%20Images/egh2vjhgyesnzkydiuqi.jpg'
                alt='student-img'
                className='student-img'
                />
            </div>
            <div>
              <h2 className='name-heading'>NAME : Yash Sen</h2>
              <p className='student-details'>Gender : Male</p>
              <p className='student-details'>Email : yash@gmail.com</p>
              <p className='student-details'>ADDRESS : Dhanora</p>
              <p className='student-details'>EDUCATION : BE Civil</p>
              <p className='student-details'>PHONE NO. : 4444444444</p>
            </div>
            
        </div>
    </div>
  )
}

export default Student5