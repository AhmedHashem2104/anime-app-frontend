import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function EpisodeCard({ data, img, title }) {
  return (
    <Link
      to={`/watch/${data.id}`}
      style={{
        textDecoration: `none`,
        color: `black`,
      }}
    >
      <Card sx={{ width: 350, display: "flex", flexDirection: "column" }}>
        <CardMedia sx={{ height: 180 }} image={img} title="anime image" />
        <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
          <Typography
            style={{
              marginLeft: 15,
              marginTop: 10,
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title} ({data.number})
          </Typography>

          <div style={{ flex: "1" }} />
          <Typography
            style={{
              marginLeft: 15,
            }}
          >
            {data.releaseDate}
          </Typography>
          <CardActions style={{ position: "sticky", bottom: 0 }}>
            <Button size="small">Watch</Button>
          </CardActions>
        </div>
      </Card>
    </Link>
  );
}
