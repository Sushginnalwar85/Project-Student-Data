import React from 'react';
import './student4.css'

const Student4 = () => {
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
              <h2 className='name-heading'>NAME : Simmy Adwani</h2>
              <p className='student-details'>Gender : Female</p>
              <p className='student-details'>Email : simmy@gmail.com</p>
              <p className='student-details'>ADDRESS : Chamorshi</p>
              <p className='student-details'>EDUCATION : Bsc Agree</p>
              <p className='student-details'>PHONE NO. : 2222222222</p>
            </div>
            
        </div>
    </div>
  )
}

export default Student4