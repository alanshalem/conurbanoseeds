import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Video from '../../images/hero_video.webm';
import Logo from '../../images/seed_logo.png';
import {
	HeroContainer,
	HeroContent,
	HeroH1,
	HeroP,
	HeroLogo,
	HeroBtn,
	HeroBg,
	VideoBg,
} from './HeroElements';

const Hero = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<HeroContainer>
			<HeroBg>
				<Navbar toggle={toggle} />
				<Sidebar isOpen={isOpen} toggle={toggle} />
				<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroLogo src={Logo}></HeroLogo>
				<HeroH1>CONURBANOSEEDS</HeroH1>
				<HeroP>DEL BANCO A TUS MANOS</HeroP>
				<HeroBtn>PEDÍ ACÁ!</HeroBtn>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
