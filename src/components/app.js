import React from 'react';

import Table from './table';

export default () => {

    const students = [
        {
            name: 'Peter Parker',
            course: 'Intro to Photography',
            grade: 85
        },
        {
            name: 'Bruce Banner',
            course: 'Pshychology',
            grade: 91
        },
        {
            name: 'Tony Stark',
            course: 'Mechanical Engineering',
            grade: 100
        }
    ];
    return (
        <div className='container'>
            <h1>Student Grade Table</h1>
            <Table data = {students} />
        </div>
    )
}

