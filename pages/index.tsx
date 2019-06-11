import React from 'react';
import styled from 'styled-components/macro';
import {ExternalLink} from '../src/components/external-link/external-link';
import {ImageDivisor} from '../src/components/image-divisor/image-divisor';
import {PageComponent} from '../src/interfaces';
import {useExactAge} from '../src/hooks/useExactAge';
import {GITHUB_URL, LINKEDIN_URL} from '../src/social.constants';
import {SPACER_SMALL, SPACER, FONT_SANS, FONT_SERIF, COLOR_GRAY, SPACER_BIG} from '../src/style.contants';
import {TerminalContent} from '../src/components/terminal/styled';
import {WorkTimeline} from '../src/components/work-timeline/work-timeline';
import {mediaMin} from '../src/utils/style.utils';

/* eslint-disable react/no-unescaped-entities */

const ContainerCV = styled('div')``;

const SectionTitle = styled('div')`
    display: flex;
    align-items: center;
    margin-bottom: ${SPACER_BIG}px;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        color: ${COLOR_GRAY[3]};
        font-family: ${FONT_SANS};
        font-weight: 300;
        text-transform: uppercase;
        /* white-space: nowrap; */
    }

    span {
        flex-grow: 1;
        margin-left: ${SPACER_SMALL}px;
        overflow: hidden;
        color: ${COLOR_GRAY[5]};
        font-family: ${FONT_SERIF};
        font-weight: 300;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:before {
            content: '\u2014 ';
        }
    }

    .experience {
        grid-column: 1 / 2;
    }
    .skills {
        grid-column: 2 / 3;
    }
`;

const Home: PageComponent = ({children}) => null;

Home.displayName = 'adgdas';
Home.index = 0;
Home.image = '/static/me.png';
Home.headerContent = (
    <>
        <SectionTitle>
            <h2>Quick Bio</h2>
            <span>it's a me</span>
        </SectionTitle>
        <p>
            I'm Gregor, a web developer from Slovenia, where I've been living for the past years! I've always had an interest in computing,
            which is why I pursued a career as a software engineer. Most days I build websites and APIs, but I won't shy away from anything
            interesting. Throuh my career, I acquired great knowledge of JavaScript and related technologies, problem solving skills and
            other things.
        </p>
        <p>
            If you want to know more about me, feel free to check out my <ExternalLink href={GITHUB_URL}>Github</ExternalLink>, or contact
            me via <ExternalLink href={LINKEDIN_URL}>LinkedIn</ExternalLink>.
        </p>
    </>
);
Home.contentItems = [
    ({style, key}) => (
        <TerminalContent className="experience" style={style} key={key}>
            <SectionTitle>
                <h2>Experience</h2>
                <span>not many cause I'm loyal</span>
            </SectionTitle>
            <WorkTimeline />
        </TerminalContent>
    ),
    ({style, key}) => (
        <TerminalContent className="skills" style={style} key={key}>
            <SectionTitle>
                <h2>Skills</h2>
                <span>many cause I'm smart 🤓</span>
            </SectionTitle>
            <div style={{textAlign: 'center', paddingTop: 50, color: COLOR_GRAY[7]}}>Still figuring this out.</div>
        </TerminalContent>
    ),
];

export default Home;
