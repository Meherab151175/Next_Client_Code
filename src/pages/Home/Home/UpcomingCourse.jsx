import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import k from '../../../assets/upcoming/korean.jpg'
import j from '../../../assets/upcoming/japan.jpg'
import u from '../../../assets/upcoming/urdu.jpg'

const UpcomingCourse = () => {
  return (
    <div className="w-full mt-4">
      <div className="bg-green-400 text-center">
        <h1 className="text-3xl font-bold py-5">Upcoming Courses</h1>
      </div>
      <div className="max-w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mx-auto py-10">
        <Card className="flex flex-col gap-5"
         sx={{ maxWidth: 345 }}>
          <CardMedia
            className="rounded-full"
            sx={{ height: 250 }}
            image={k}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Korean
            </Typography>
            <Typography variant="body2" color="text.secondary">
            You may also want to come up with a small minimum to do each day, even if it's only 5 minutes. That way, you still get some practice in, but also leave yourself open to study more when you're motivated.
            </Typography>
          </CardContent>
        </Card>
        <Card className="flex flex-col gap-5"
         sx={{ maxWidth: 345 }}>
          <CardMedia
            className="rounded-full"
            sx={{ height: 220 }}
            image={u}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Urdu
            </Typography>
            <Typography variant="body2" color="text.secondary">
            You may also want to come up with a small minimum to do each day, even if it's only 5 minutes. That way, you still get some practice in, but also leave yourself open to study more when you're motivated.
            </Typography>
          </CardContent>
        </Card>
        <Card className="flex flex-col gap-5"
         sx={{ maxWidth: 345 }}>
          <CardMedia
            className="rounded-full"
            sx={{ height: 200 }}
            image={j}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Japan
            </Typography>
            <Typography variant="body2" color="text.secondary">
            You may also want to come up with a small minimum to do each day, even if it's only 5 minutes. That way, you still get some practice in, but also leave yourself open to study more when you're motivated.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UpcomingCourse;
