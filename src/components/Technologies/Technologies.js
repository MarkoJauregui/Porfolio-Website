import React from 'react';
import { DiFirebase, DiReact, DiTerminal } from 'react-icons/di';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
	<Section id="tech">
		<SectionDivider />
		<br />
		<SectionTitle>Skills</SectionTitle>
		<SectionText>
			I've worked with several different technologies, be it inside the web
			development space, Smart Contract development and even Game Development{' '}
		</SectionText>
		<List>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node.js and Databases (SQL & PostgreSQL)
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiTerminal size="3rem" />
				<ListContainer>
					<ListTitle>Blockchain</ListTitle>
					<ListParagraph>
						Experience with <br />
						Solidity and TDD with Truffle and Hardhat
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
