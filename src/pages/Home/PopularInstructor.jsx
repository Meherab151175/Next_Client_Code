import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import useAxiosFetch from '../../hooks/useAxiosFetch';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";

const PopularInstructor = () => {

    const [instructors, setInstructors] = useState([])
    const axiosFetch = useAxiosFetch();


    useEffect(() => {
        axiosFetch.get('/popular-instructors')
            .then(data => {
                setInstructors(data.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='my-28'>
            <div className="mb-20">
                <h1 className='text-5xl font-bold text-center text-secondary'>Our <span className='text-black dark:text-white'>Popular</span> Instructors</h1>
                <div className="w-[40%] text-center mx-auto my-4">
                    <p className='text-gray-500'>Here are some Popular Instructo</p>
                </div>
            </div>



            <div className="grid mb-28 md:grid-cols-2 lg:grid-cols-3 mx-auto w-[90%] gap-6">
                {
                    instructors.map(instructor => 
                        <Card  key={instructor.instructor?._id} className="w-96">
                        <CardHeader floated={false} className="h-80">
                          <img src={instructor.instructor?.photoUrl} alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center md:text-start">
                          <Typography variant="h4" color="blue-gray" className="mb-2">
                          {instructor.instructor?.name}
                          </Typography>
                          <Typography color="blue" className="font-medium" textGradient>
                            Instructor
                          </Typography>
                          <Typography color="blue" className="font-medium" textGradient>
                            <div className="text-gray-500 mb-3 whitespace-nowrap">Total Students : {instructor?.totalEnrolled}</div>
                          </Typography>
                        </CardBody>
                        <CardFooter className="flex justify-center gap-7 ">
                                     <div className="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0">
                                   <a className="hover:cursor-pointer text-secondary duration-300"><FaLinkedin /></a>
                                    <a className="hover:cursor-pointer text-secondary duration-300"><FaFacebook /></a>
                                    <a className="hover:cursor-pointer text-secondary duration-300"><FaInstagram /></a>
                                 </div>
                          
                        </CardFooter>
                      </Card>
                    )
                }
            </div>
        </div>
    );
};

export default PopularInstructor;