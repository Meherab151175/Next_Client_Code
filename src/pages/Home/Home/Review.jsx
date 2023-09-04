import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import m1 from "../../../assets/review/m1.webp";
import m2 from "../../../assets/review/m2.jpg";
import m3 from "../../../assets/review/m3.jpg";

const Review = () => {
  return (
    <div className="w-full mt-4">
      <div className="bg-green-400 text-center">
        <h1 className="text-3xl font-bold py-5">Students's Review</h1>
      </div>
      <div className="max-w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mx-auto py-10">
        <Card className="flex flex-col gap-5"
         sx={{ maxWidth: 345 }}>
          <CardMedia
            className="rounded-full"
            sx={{ height: 250 }}
            image={m3}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Carlos
            </Typography>
            <Typography variant="body2" color="text.secondary">
              "I can't believe how much my language skills have improved since
              joining this platform! The interactive lessons and amazing
              instructors make learning so much fun. I've gained confidence in
              speaking and understanding the language. Highly recommended!"
            </Typography>
          </CardContent>
        </Card>
        <Card className="flex flex-col gap-5"
         sx={{ maxWidth: 345 }}>
          <CardMedia
            className="rounded-full"
            sx={{ height: 220 }}
            image={m2}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Carlos
            </Typography>
            <Typography variant="body2" color="text.secondary">
              "I can't believe how much my language skills have improved since
              joining this platform! The interactive lessons and amazing
              instructors make learning so much fun. I've gained confidence in
              speaking and understanding the language. Highly recommended!"
            </Typography>
          </CardContent>
        </Card>
        <Card className="flex flex-col gap-5"
         sx={{ maxWidth: 345 }}>
          <CardMedia
            className="rounded-full"
            sx={{ height: 200 }}
            image={m1}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Emma
            </Typography>
            <Typography variant="body2" color="text.secondary">
              "I can't believe how much my language skills have improved since
              joining this platform! The interactive lessons and amazing
              instructors make learning so much fun. I've gained confidence in
              speaking and understanding the language. Highly recommended!"
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Review;
