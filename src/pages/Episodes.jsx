import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apis from "../apis/apis";
import EpisodeCard from "../components/EpisodeCard";
import { Pagination } from "@mui/material";

const EpisodesPage = () => {
  const { id, page } = useParams();
  const [results, setResulsts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchEpisodes = async () => {
    return await apis
      .fetchEpisodesAPI(id)
      .then((res) => setResulsts(res.data))
      .catch((err) => setError(err.response.data.message));
  };

  useEffect(() => {
    fetchEpisodes();
  }, []);
  return (
    <div
      style={{
        width: `100%`,
        marginTop: 100,
        marginBottom: 50,
      }}
    >
      <div
        style={{
          display: `flex`,
          width: `100%`,
          justifyContent: `center`,
          gap: 15,
          flexWrap: `wrap`,
          marginBottom: 20,
        }}
      >
        {results.episodes && results.episodes.length > 0 && (
          <Pagination
            count={Math.ceil(results.episodes.length / 30)}
            onChange={(e, page) => navigate(`/episodes/${id}/${page}`)}
            color="primary"
          />
        )}
      </div>
      <h1
        style={{
          marginLeft: 25,
        }}
      >
        {results.title} Page {page}
      </h1>
      <div
        style={{
          display: `flex`,
          width: `100%`,
          justifyContent: `center`,
          gap: 15,
          flexWrap: `wrap`,
        }}
      >
        {results.episodes &&
          results.episodes.length > 0 &&
          results.episodes
            .slice((page - 1) * 30, 30 * page)
            .map((v, k) => (
              <EpisodeCard
                key={k}
                data={v}
                img={results.image}
                title={results.title}
              />
            ))}
        <div
          style={{
            display: `flex`,
            width: `100%`,
            justifyContent: `center`,
            gap: 15,
            flexWrap: `wrap`,
            marginBottom: 20,
          }}
        >
          {results.episodes && results.episodes.length > 0 && (
            <Pagination
              count={Math.ceil(results.episodes.length / 30)}
              onChange={(e, page) => navigate(`/episodes/${id}/${page}`)}
              color="primary"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EpisodesPage;
