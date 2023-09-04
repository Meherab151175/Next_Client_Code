import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import sp from '../../../assets/extra/sports.jpg'
import pint from '../../../assets/extra/paintimg.jpg'
import sing from '../../../assets/extra/sing.jpg'
import sw from '../../../assets/extra/swimming.jpg'



const ExtraCurri = () => {
  return (
    <div className="w-full">
      <div className="bg-green-400 text-center">
        <h1 className="text-3xl font-bold py-5">Extra Curricular Activities</h1>
      </div>
      <div className='max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-between'>
        <Card className='my-5 shadow-lg shadow-slate-500' sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia 
            className='px-2 py-3 rounded-lg'
              component="img"
              height="140"
              image={sp}
              alt="green iguana"
            />
            <CardContent>
              <Typography className='text-2xl font-bold' gutterBottom variant="h5" component="div">
                Sports
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className='my-5' sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia 
            className='px-2 py-3 rounded-lg'
              component="img"
              height="140"
              image={pint}
              alt="green iguana"
            />
            <CardContent>
              <Typography className='text-2xl font-bold' gutterBottom variant="h5" component="div">
                Painting
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className='my-5' sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia 
            className='px-2 py-3 rounded-lg'
              component="img"
              height="140"
              image={sing}
              alt="green iguana"
            />
            <CardContent>
              <Typography className='text-2xl font-bold' gutterBottom variant="h5" component="div">
                Singing
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className='my-5' sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia 
            className='px-2 py-3 rounded-lg'
              component="img"
              height="140"
              image={sw}
              alt="green iguana"
            />
            <CardContent>
              <Typography className='text-2xl font-bold' gutterBottom variant="h5" component="div">
                Swimming
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default ExtraCurri;
