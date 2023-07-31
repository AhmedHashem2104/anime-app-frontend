import instance from "../axios/axios";

export default {
  searchAPI: async (search, page) => {
    return await instance.post(`/search`, {
      keyword: search,
      page,
    });
  },
  fetchEpisodesAPI: async (id) => {
    return await instance.post("/info", {
      animeID: id,
    });
  },

  fetchEpisodeAPI: async (id) => {
    return await instance.post("/episode", {
      episodeID: id,
    });
  },
};
