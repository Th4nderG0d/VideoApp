import { videoListProps } from "../types";

export type PlaylistProps = {
	playList: videoListProps[];
	setPlayList: (playlist: videoListProps[]) => void;
	currentVideo: videoListProps;
	setCurrentVideo: (currentVideo: videoListProps) => void;
};
