import axios from "axios";

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
const apiKey = "b45a6dba21310e72da3d2295395f61b8"; // Add your API key here

export const getWeatherData = async (cityname) => {
  try {
    // Construct the full URL using template literals
    const url = `${baseUrl}q=${cityname}&units=metric&appid=${apiKey}`;

    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};
