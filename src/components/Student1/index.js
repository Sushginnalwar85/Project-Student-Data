import React from 'react';
import './student1.css'

const student1 = () => {
  return (
    <div className='student-details-container'>
        <div className='student-card'>
            <div className='student-img-container'>
                <img src='https://res.cloudinary.com/dpyi7igie/image/upload/v1710144970/Girls%20Images/tseikkpolyxy4pqxkyqo.jpg'
                alt='student-img'
                className='student-img'
                />
            </div>
            <div>
                <h2 className='name-heading'>NAME : Dimple Jain</h2>
                <p className='student-details'>Gender : Female</p>
                <p className='student-details'>Email : Dimple@gmail.com</p>
                <p className='student-details'>ADDRESS : Gadchiroli</p>
                <p className='student-details'>EDUCATION : MCA</p>
                <p className='student-details'>PHONE NO. : 0000000000</p>
            </div>
            
        </div>
    </div>
  )
}

export default student1