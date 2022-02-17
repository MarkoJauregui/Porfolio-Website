import React from 'react';
import {
	AiFillGithub,
	AiFillTwitterCircle,
	AiFillLinkedin,
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call me</LinkTitle>
					<LinkItem href="tel:+54 9 11 3276-8897">+54 9 11 3276-8897</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href="mailto:markojauregui2002@gmail.com">
						markojauregui2002@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Helping you make your ideas come true</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com/Misty-Dev">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/marko-jauregui-baa639230/">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://twitter.com/marko_jauregui">
						<AiFillTwitterCircle size="3rem" />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
