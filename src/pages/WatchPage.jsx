import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apis from "../apis/apis";
import { Button } from "@mui/material";
import ReactPlayer from "react-player";

const WatchPage = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState({});
  const [selectedVideo, setSelectedVideo] = useState("");
  const [error, setError] = useState("");
  const fetchEpisode = async () => {
    return await apis
      .fetchEpisodeAPI(id)
      .then((res) => {
        console.log(res.data);
        setEpisode(res.data);
      })
      .catch((err) => setError(err.response.data.message));
  };
  useEffect(() => {
    fetchEpisode();
  }, []);
  return (
    <div>
      {episode.length > 0 && (
        <div
          style={{
            width: `100%`,
            justifyContent: `center`,
            textAlign: `center`,
            marginTop: 100,
            gap: 15,
          }}
        >
          <h1>Sources</h1>
          <div
            style={{
              backgroundColor: `white`,
              display: `flex`,
              justifyContent: `center`,
              gap: 15,
              flexWrap: `wrap`,
            }}
          >
            {episode.map((v, k) => (
              <Button
                variant="contained"
                onClick={() => (window.location.href = v.url)}
                key={k}
              >
                {v.name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchPage;
