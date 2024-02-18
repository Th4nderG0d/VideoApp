import { useCallback, useState } from "react";
import { PauseImage, PlayButtonImage } from "../../assets";
import FormInput from "../FormInput";
import {
	ImageContainer,
	ListContainer,
	ListItem,
	ListRow,
	ListSubContainer,
	MarginContainer,
	NoSongFoundContainer,
	PlaylistContainer,
	PlaylistHeading,
	SubListItem,
} from "./styles";
import { videoPlaylist } from "../constants";
import { PlaylistProps } from "./types";

const PlaylistComponent = ({
	playList,
	setPlayList,
	currentVideo,
	setCurrentVideo,
}: PlaylistProps) => {
	const [searchValue, setSearchValue] = useState("");
	const [fullPlaylist, setFullPlayLsit] = useState(videoPlaylist);

	const handleFilterList = useCallback(
		(value = searchValue) => {
			const filterList = fullPlaylist.filter((videoList) =>
				videoList.label
					?.toString()
					.toLowerCase()
					.includes(value.toLowerCase())
			);
			setPlayList(filterList);
		},
		//eslint-disable-next-line
		[searchValue]
	);

	const handleDragStart = (
		e: React.DragEvent<HTMLLIElement>,
		index: number
	) => {
		e.dataTransfer.setData("index", index.toString());
	};

	const handleDrop = (
		e: React.DragEvent<HTMLLIElement>,
		dropIndex: number
	) => {
		const dragIndex = parseInt(e.dataTransfer.getData("index"), 10);
		const newVideos = [...playList];
		const [draggedVideo] = newVideos.splice(dragIndex, 1);
		newVideos.splice(dropIndex, 0, draggedVideo);
		setPlayList(newVideos);
		setFullPlayLsit(newVideos);
	};

	const getplayList = () => {
		if (!playList.length)
			return <NoSongFoundContainer>No song found</NoSongFoundContainer>;
		return (
			<>
				{playList.map((video, index: number) => (
					<ListItem
						key={video.label}
						draggable
						onDragStart={(e) => handleDragStart(e, index)}
						onDrop={(e) => handleDrop(e, index)}
						onDragOver={(e) => e.preventDefault()}
						onClick={() => setCurrentVideo(video)}
						className={
							currentVideo.source === video.source ? "active" : ""
						}
					>
						<ListRow>
							<ImageContainer
								src={
									currentVideo.source === video.source
										? PauseImage
										: PlayButtonImage
								}
								alt="icon"
							/>
							<ListSubContainer>
								{video.label}
								<SubListItem>{"Lorem Ispum"}</SubListItem>
							</ListSubContainer>
						</ListRow>
					</ListItem>
				))}
			</>
		);
	};

	return (
		<PlaylistContainer>
			<MarginContainer>
				<PlaylistHeading>Playlist</PlaylistHeading>
				<FormInput
					className={"col-6"}
					placeholder={"Search songs,video"}
					value={searchValue}
					onChange={(e) => {
						setSearchValue(e.target.value);
						handleFilterList(e.target.value);
					}}
				/>
			</MarginContainer>
			<ListContainer>
				<MarginContainer>{getplayList()}</MarginContainer>
			</ListContainer>
		</PlaylistContainer>
	);
};

export default PlaylistComponent;
