import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

import VideoList from "./components/VideoList";

import VideoDetail from "./components/VideoDetail";
import useVideos from "./hooks/useVideos";

function App() {
	const [selectedVideo, setSelectedVideo] = useState(null);
	//const KEY = "AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg";
	const [videos, search] = useVideos("buildings");

	//console.log(response);

	// setSelectedVideo(response.data.items[0]);

	// const onVideoSelect = video => {
	// 	setSelectedVideo(video);
	// 	//this.setState({ selectedVideo: video });
	// };

	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
		<div className="ui container">
			<SearchBar onFormSubmit={search} />
			{/* I have{" "} {this.state.videos.length} videos */}
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>

					<div className="five wide column">
						<VideoList onVideoSelect={setSelectedVideo} videos={videos} />
					</div>
				</div>
			</div>
		</div>
	);
}

// export class App extends Component {
// 	state = { videos: [], selectedVideo: null };

// 	componentDidMount() {
// 		this.onTermSubmit("buildings");
// 	}

// 	onTermSubmit = async term => {
// 		const response = await youtube.get("/search", {
// 			params: {
// 				q: term,
// 				part: "snippet",
// 				maxResults: 5,
// 				key: KEY
// 			}
// 		});
// 		//console.log(response);
// 		this.setState({
// 			videos: response.data.items,
// 			selectedVideo: response.data.items[0]
// 		});
// 	};

// 	onVideoSelect = video => {
// 		console.log("frm the app", video);

// 		this.setState({ selectedVideo: video });
// 	};
// 	render() {
// 		return (
// 			<div className="ui container">
// 				<SearchBar onFormSubmit={onTermSubmit} />
// 				{/* I have{" "} {this.state.videos.length} videos */}
// 				<div className="ui grid">
// 					<div className="ui row">
// 						<div className="eleven wide column">
// 							<VideoDetail video={selectedVideo} />
// 						</div>

// 						<div className="five wide column">
// 							<VideoList onVideoSelect={onVideoSelect} videos={videos} />
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default App;
