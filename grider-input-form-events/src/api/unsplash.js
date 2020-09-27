import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID iiOrD2AC1Sbn5Mf0nBczy8C7TRAbWf6Ul8kqYIkHaHM"
	}
});
