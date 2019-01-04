import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, {useContext, useEffect, useRef} from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/addons';
import {animated} from 'react-spring/hooks';
import {PageContext} from '../../context/page.context';
import {COLOR_BLACK, COLOR_WHITE, SPACER} from '../../style.contants';

const TerminalContainer = styled(animated.main)`
    position: relative;
    height: 100%;
    width: 100%;
    grid-row: 3 / 4;
    grid-column: 1 / -1;
    overflow: hidden;
    font-family: Fira Mono, 'Courier New', Courier, monospace;
    box-sizing: border-box;
    background: ${COLOR_BLACK};
    color: ${COLOR_WHITE};
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const TerminalContent = styled.div`
    padding: ${SPACER}px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

export const Terminal = React.memo(({style}) => {
    const {page, pages} = useContext(PageContext);
    const parallaxRef = useRef();
    useEffect(() => parallaxRef.current.updateRaf(), []);
    useEffect(
        () => {
            parallaxRef.current.scrollTo(page);
        },
        [page],
    );
    return (
        <TerminalContainer style={style}>
            <Parallax ref={parallaxRef} pages={pages.length} scrolling={false} config={{tension: 210, friction: 30}}>
                {pages.map((page, i) => (
                    <ParallaxLayer key={i} offset={i}>
                        <TerminalContent>{page.title}</TerminalContent>
                    </ParallaxLayer>
                ))}
            </Parallax>
        </TerminalContainer>
    );
});

Terminal.propTypes = {
    style: PropTypes.object,
};

export default Terminal;
