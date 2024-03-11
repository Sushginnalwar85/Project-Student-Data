import React from 'react';
import './home.css';

import StudentCard from '../StudentCard';

const studentData = [
    {
        id : 'student1',
        name : 'Dimple Jain',
        imageUrl : 'https://res.cloudinary.com/dpyi7igie/image/upload/v1710144970/Girls%20Images/tseikkpolyxy4pqxkyqo.jpg'
    },
    {
        id : 'student2',
        name : 'Jasmita Shukla',
        imageUrl : 'https://res.cloudinary.com/dpyi7igie/image/upload/v1710145088/Girls%20Images/taxmyhfy0gihpdvsrtq4.jpg'
    },
    {
        id : 'student3',
        name : 'Vandy Roase',
        imageUrl : 'https://res.cloudinary.com/dpyi7igie/image/upload/v1710145113/Girls%20Images/zhvl7ukkroaxmqd0n9g3.jpg'
    },
    {
        id : 'student4',
        name : 'Simmy Adwani',
        imageUrl : 'https://res.cloudinary.com/dpyi7igie/image/upload/v1710144970/Girls%20Images/tseikkpolyxy4pqxkyqo.jpg'
    },
    {
        id : 'student5',
        name : 'Yash Sen',
        imageUrl : 'https://res.cloudinary.com/dpyi7igie/image/upload/v1710145178/Girls%20Images/egh2vjhgyesnzkydiuqi.jpg' 
    },
    {
        id : 'student6',
        name : 'Ayush Sharma',
        imageUrl : 'https://res.cloudinary.com/dpyi7igie/image/upload/v1710145178/Girls%20Images/egh2vjhgyesnzkydiuqi.jpg'
    },
];

const renderStudentList = () => {
    return(
        <ul className="student-list">
            {
                studentData.map( eachData =>
                    
                    (
                        <StudentCard studentDetails = {eachData} key={eachData.id}/>
                    ))
            }
        </ul>
    )
}

const Home = () => {
  return (
    <div className="home-route-container">
        <div className="student-list-container">
            <div className="student-data-heading-conatiner">
                <h1 className="student-data-heading">Student Data</h1>
            </div>
            {renderStudentList()}
        </div>
    </div>
  )
}

export default Home