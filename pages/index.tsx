import React from 'react';
import {ConsoleContent} from '../src/components/ConsoleContent.styled';
import {PageContent} from '../src/components/DefaultLayout/components/PageContent.styled';
import {SectionTitle} from '../src/components/SectionTitle.styled';
import {WorkExperience} from '../src/components/WorkExperience/WorkExperience';
import {WorkSkills} from '../src/components/WorkSkills/components/WorkSkills';
import {PageComponent} from '../src/types/PageComponent';
/* eslint-disable react/no-unescaped-entities */

const Home: PageComponent = () => {
    return (
        <PageContent>
            <ConsoleContent className="experience">
                <SectionTitle>
                    <h2>Experience</h2>
                    <span>not many cause I'm loyal</span>
                </SectionTitle>
                <WorkExperience />
            </ConsoleContent>
            <ConsoleContent className="skills">
                <SectionTitle>
                    <h2>Skills</h2>
                    <span>many cause I'm smart 🤓</span>
                    <button>Sort</button>
                </SectionTitle>
                <WorkSkills />
            </ConsoleContent>
        </PageContent>
    )
};

Home.displayName = 'home-page';
Home.headerComponent = () => (
    <>
        <SectionTitle>
            <h2>About</h2>
        </SectionTitle>
        <p>
            My name is Gregor, and I'm a full-stack web developer from Slovenia.
            I have a solid understanding of web development and it's accompanying technologies, all the way from <code>HTML</code> to <code>SQL</code>.
            <br />
            I hav
        </p>
    </>
);

export default Home;
