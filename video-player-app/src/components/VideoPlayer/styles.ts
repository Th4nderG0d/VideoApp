import styled from "styled-components";

export const MainContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	border-radius: 8px;
	padding: 100px;
	margin: 24px;
	background-color: black;
	min-width: 500px;
	align-items: center;
	justify-content: center;
`;

export const VideoPlayerContainer = styled.video`
	margin-right: 24px;
	width: 500px;
	height: 500px;
	border-radius: 8px;	
`;

export const SectionComponent = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 56px;
`;
