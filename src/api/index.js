import axios from "axios";
import { CN_API_URL } from "../constants/api";

export const chuckNorrisAPI = {
  getJokes: (value) => {
    return axios
      .get(`${CN_API_URL}/jokes/search?query=${value}`)
      .then((response) => response);
  },
};
