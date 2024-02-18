import styled from "styled-components";

export const PlaylistContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	background-color: #514e4d;
	border-radius: 8px;
	height: 600px;
	max-width: 500px;
`;

export const MarginContainer = styled.div`
	margin: 16px;
`;

export const PlaylistHeading = styled.h2`
	display: flex;
	color: #fff;
`;

export const ListContainer = styled.ul`
	display: flex;
	flex-direction: column;
	margin: 16px 0;
	padding: 16px 0;
	overflow-y: auto;
	border-top: 3px solid #fff;

	.active {
		padding: 8px;
		background-color: black;
		border-radius: 8px;
	}
`;

export const ListRow = styled.div`
	display: flex;
	flex: 1;
	border-bottom: 1px solid #3d3e3e;
`;

export const ListSubContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: flex-start;
`;

export const ListItem = styled.li`
	display: flex;
	padding: 0 8px;
	color: #fff;
	font-weight: bold;
	margin-bottom: 8px;
	list-style-type: none;
	cursor: move;
	align-items: center;
`;

export const SubListItem = styled.li`
	display: flex;
	padding: 8px 4px;
	color: #898c8b;
	font-size: 10px;
	margin-bottom: 4px;
	list-style-type: none;
	cursor: move;
`;

export const ImageContainer = styled.img`
	display: flex;
	width: 24px;
	height: 24px;
	background-color: #b4b3b2;
	padding: 4px;
	margin: 8px 12px;
	border-radius: 8px;
	cursor: pointer;
`;

export const NoSongFoundContainer = styled.div`
	display: flex;
	color: #fff;
	font-weight: bold;
`;
