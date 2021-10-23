import styled from 'styled-components';

export const HeroContainer = styled.div`
	font-weight: 900;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 20px;
	height: 800px;
	position: relative;
	z-index: 1;
`;

export const HeroBg = styled.div`
	background-color: #000;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	--o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`;

export const HeroContent = styled.div`
	z-index: 3;
	max-width: 1200px;
	position: absolute;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const HeroH1 = styled.h1`
	color: #fff;
	font-size: 48px;
	text-align: center;
	@media screen and (max-width: 768px) {
		font-size: 40px;
	}
	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

export const HeroP = styled.p`
	margin: 24px;
	color: #fff;
	font-size: 24px;
	text-align: center;
	max-width: 600px;
	@media screen and (max-width: 768px) {
		font-size: 40px;
	}
	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

export const HeroLogo = styled.img`
	width: 50%;
	height: 50%;
`;

export const HeroBtn = styled.button`
	font-size: 1.4rem;
	padding: 1rem 4rem;
	border: none;
	background: #e31837;
	color: #fff;
	transition: 0.2s ease-out;

	&:hover {
		background: #ffc500;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}
`;
