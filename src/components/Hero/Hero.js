import React from 'react';

import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Hello There! <br />
				I'm Marko Jauregui
			</SectionTitle>
			<SectionText>
				I am a 20 year old self taught Full Stack Blockchain app developer from
				Buenos Aires, Argentina. Be it Dapps, NFTs or anything web development
				related I'm here to help!
			</SectionText>
			<Button
				onClick={() =>
					(window.location.href = 'mailto:markojauregui2002@gmail.com')
				}
			>
				Contact me
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
