import React from 'react';
import './student3.css'

const Student3 = () => {
  return (
    <div className='student-details-container'>
        <div className='student-card'>
            <div className='student-img-container'>
                <img src='https://res.cloudinary.com/dpyi7igie/image/upload/v1710145113/Girls%20Images/zhvl7ukkroaxmqd0n9g3.jpg'
                alt='student-img'
                className='student-img'
                />
            </div>
            <div>
              <h2 className='name-heading'>NAME : Vandy Roase</h2>
              <p className='student-details'>Gender : Female</p>
              <p className='student-details'>Email : vandy@gmail.com</p>
              <p className='student-details'>ADDRESS : Armori</p>
              <p className='student-details'>EDUCATION : Bsc cs</p>
              <p className='student-details'>PHONE NO. : 1111111111</p>
            </div>
            
        </div>
    </div>
  )
}

export default Student3