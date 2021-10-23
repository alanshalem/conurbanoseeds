import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {
	FooterContainer,
	FooterWrap,
	SocialIconLink,
	SocialIcons,
	SocialLogo,
	SocialMedia,
	SocialMediaWrap,
} from './FooterElements';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/">CONURBANOSEEDS</SocialLogo>
						<SocialIcons>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Facebook"
							>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Instagram"
							>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="WhatsApp"
							>
								<FaWhatsapp />
							</SocialIconLink>
							{/* <SocialIconLink
								href="/"
								target="_blank"
								aria-label="Youtube"
							>
								<FaYoutube />
							</SocialIconLink> */}
							{/* <SocialIconLink
								href="//www.twitter.com/briandesignz"
								target="_blank"
								aria-label="Twitter"
								rel="noopener noreferrer"
							>
								<FaTwitter />
							</SocialIconLink> */}
							{/* <SocialIconLink
								href="/"
								target="_blank"
								aria-label="Linkedin"
							>
								<FaLinkedin />
							</SocialIconLink> */}
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
