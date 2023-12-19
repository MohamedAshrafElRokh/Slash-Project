import axios from "axios";

export const getMethod = async (url) => {
  const response = await axios.get(url);
  console.log(response);
  return response.data;
};
