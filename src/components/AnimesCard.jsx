import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function AnimesCard({ data }) {
  return (
    <Card sx={{ width: 350, display: "flex", flexDirection: "column" }}>
      <Link
        to={`/episodes/${data.id}/1`}
        style={{
          textDecoration: `none`,
          color: `black`,
        }}
      >
        <CardMedia
          sx={{ height: 180 }}
          image={data.image}
          title="anime image"
        />
      </Link>
      <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
        <Link
          to={`/episodes/${data.id}/1`}
          style={{
            textDecoration: `none`,
            color: `black`,
          }}
        >
          <Typography
            style={{
              marginLeft: 15,
              marginTop: 10,
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {data.title}
          </Typography>
        </Link>
        <div style={{ flex: "1" }} />
        <Typography
          style={{
            marginLeft: 15,
          }}
        >
          {data.releaseDate}
        </Typography>
        <CardActions style={{ position: "sticky", bottom: 0 }}>
          <a href={data.url} target="_blank">
            <Button size="small">Source</Button>
          </a>
        </CardActions>
      </div>
    </Card>
  );
}
