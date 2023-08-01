import React, { useEffect, useState } from 'react';



import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import useAxiosFetch from '../../../hooks/useAxiosFetch';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useUser } from '../../../hooks/useUser';
import { toast } from 'react-toastify';

const PopularClasses = () => {
    const axiosSecure = useAxiosSecure();
    const { currentUser } = useUser();
    const role = currentUser?.role;
    const axiosFetch = useAxiosFetch();
    const [classes, setClasses] = useState([]);
    useEffect(()=>{
        const fetchClasses = async () => {
            const response = await axiosFetch.get('/popular_classes');
            setClasses(response.data);
        };
        fetchClasses();
    },[])


    const handleSelect = (id) => {
        if (!currentUser) {
          return toast.error('Please Login First');
        }
        axiosSecure.get(`/cart-item/${id}`).then((res) => {
          if (res.data.classId === id) {
            return toast.error('Already Selected');
          } else {
            const data = {
              classId: id,
              userMail: currentUser.email,
              date: new Date(),
            };
    
            toast.promise(
              axiosSecure.post('/add-to-cart', data),
              {
                pending: 'Selecting...',
                success: {
                  render({ data }) {
                    return `Selected Successfully`;
                  },
                },
                error: {
                  render({ data }) {
                    return `Error: ${data.message}`;
                  },
                },
              }
            );
          }
        });
      };
    
    
    return (
        <div className='md:w-[80%] mx-auto my-36'>
            <div className="">
                <h1 className='text-5xl font-bold text-center'>Our <span className='text-secondary'>Popular</span> Classes</h1>
                <div className="w-[40%] text-center mx-auto my-4">
                    <p className='text-gray-500'>Our Popular Classes</p>
                </div>
            </div>


        <div className="grid  md:grid-cols-2 lg:grid-cols-3">
            {
                classes.map((item, index) => 
                <Card key={index} className="mt-6 w-[90%] hover:ring">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img
                    src={item.image}
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                  {item.name}
                  </Typography>
                  <Typography variant="h6">
                    AvailableSeats : {item.availableSeats}
                  </Typography>
                  <Typography variant="h6">
                    Price : $ {item.price}
                  </Typography>
                  <Typography variant="h6">
                  TotalEnrolled : {item.totalEnrolled}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button onClick={() => handleSelect(item._id)} className='bg-secondary'>Select</Button>
                </CardFooter>
              </Card>
                )
            }
        </div>

        </div>
    );
};

export default PopularClasses;