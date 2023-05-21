import axios from 'axios';

export const FetchData = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from CouchDB:", error);
    return null;
  }
};
