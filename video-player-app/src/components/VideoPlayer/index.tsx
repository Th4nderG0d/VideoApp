import { useCallback, useEffect, useRef, useState } from "react";
import {
	MainContainer,
	SectionComponent,
	VideoPlayerContainer,
} from "./styles";
import PlaylistComponent from "../playlist";
import { videoPlaylist } from "../constants";
import { PlaylistHeading } from "../playlist/styles";
import { VideoPlayerProps } from "./types";
import { videoListProps } from "../types";

const VideoPlayerComponent = ({ autoPlay }: VideoPlayerProps) => {
	const [playList, setPlayList] = useState(videoPlaylist);
	const [currentVideo, setCurrentVideo] = useState<videoListProps>();

	useEffect(() => {
		setCurrentVideo(playList[0]);
		//eslint-disable-next-line
	}, []);

	const [isPlaying, setIsPlaying] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	const togglePlayPause = useCallback(() => {
		const video = videoRef.current;
		if (video) {
			if (isPlaying) {
				video.pause();
			} else {
				video.play();
			}
			setIsPlaying(!isPlaying);
		}
		//eslint-disable-next-line
	}, []);

	const handleKeyPress = useCallback(
		(event: any) => {
			if (event.code === "Space") {
				event.preventDefault();
				togglePlayPause();
			}
		},
		[togglePlayPause]
	);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyPress);

		return () => {
			document.removeEventListener("keydown", handleKeyPress);
		};
	}, [handleKeyPress]);

	if (!currentVideo) return <p>{"Loading....."}</p>;
	return (
		<MainContainer>
			<SectionComponent>
				<PlaylistHeading>{currentVideo.label}</PlaylistHeading>
				<VideoPlayerContainer
					ref={videoRef}
					controls
					loop
					autoPlay={autoPlay}
					key={currentVideo?.label}
				>
					<source src={currentVideo?.source} type="video/mp4" />
				</VideoPlayerContainer>
			</SectionComponent>

			<PlaylistComponent
				{...{
					playList,
					setPlayList,
					currentVideo,
					setCurrentVideo,
				}}
			/>
		</MainContainer>
	);
};

export default VideoPlayerComponent;
