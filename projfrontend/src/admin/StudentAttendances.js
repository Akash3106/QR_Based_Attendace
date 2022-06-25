import React , {useState, useEffect} from 'react';
import Base from '../core/Base';
import DataTable from 'react-data-table-component';
import { API } from "../backend";
import { getAttendances } from './helper/adminapicall';



const StudentAttendances = ()=>{
    const columns = [
        {
            name: 'Roll Number',
            selector: row => row.rollNum,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.title,
            sortable: true
        },
        {
            name: 'Date and Time',
            selector: row => row.date,
            sortable: true
        },
    ];

    

    const [attnd , setAttnd] = useState({
        attendances : [],
    })

    const {
        attendances,
    }= attnd;



    const preload = () => {
        getAttendances().then((data) => {
          console.log(data);
          if (data.error) {
            setAttnd({ ...attnd, error: data.error });
          } else {
            setAttnd({ ...attnd, attendances: data, });
          }
        });
      };

      useEffect(()=>{
          preload();
      },[]);

      const data = [
        {
            id: 1,
            rollNum:1,
            title: 'Akash Deep Sharma',
            date: '"2022-05-07T20:20:19.969Z"',

        },
        {
            id: 2,
            rollNum:2,
            title: 'Amandeep Sharma',
            date: '"2022-05-07T20:21:19.969Z"',

        },
        {
            id: 3,
            rollNum:3,
            title: 'Divyansh Agrawal',
            date: '"2022-05-07T20:21:19.969Z"',

        },
        {
            id: 4,
            rollNum:4,
            title: 'Aman Singh Yadav',
            date: '"2022-05-07T20:21:19.969Z"',

        },
        {
            id: 5,
            rollNum:5,
            title: 'Aditya Singh',
            date: '"2022-05-09T21:20:19.969Z"',

        },
        {
            id: 6,
            rollNum:41,
            title: 'Akashdeep',
            date: '"2022-06-02T13:40:19.969Z"',

        },
    ];
    return (
        <Base title='Attendaces' description='Here We can see Students Attendaces'>
            <DataTable
            columns={columns}
            data={data}
            selectableRows
            defaultSortFieldId={1}
            />
            {/* {attendce?.map( d => <div>{d}</div>)} */}
        </Base>
    );
    
}

export default StudentAttendances;