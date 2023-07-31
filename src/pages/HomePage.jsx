import React, { useEffect, useState } from "react";
import AnimesCard from "../components/AnimesCard";
import { Pagination } from "@mui/material";
import { useParams } from "react-router-dom";
import apis from "../apis/apis";

const HomePage = ({ page }) => {
  const { id } = useParams();
  const [results, setResults] = useState([]);
  const fetchAnime = async () => {
    return await apis
      .searchAPI(id, page)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  useEffect(() => {
    fetchAnime();
  }, [id]);
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
        }}
      >
        {results.results &&
          results.results.length > 0 &&
          results.results.map((v, k) => <AnimesCard key={k} data={v} />)}
      </div>
      {results.results && results.results.length > 0 && (
        <div
          style={{
            width: `100%`,
            display: `flex`,
            justifyContent: `center`,
            marginTop: 40,
          }}
        >
          <Pagination count={10} color="primary" size="large" />
        </div>
      )}
    </div>
  );
};

export default HomePage;
