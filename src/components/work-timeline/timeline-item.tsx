import React, {FunctionComponent} from 'react';
import styled from 'styled-components/macro';
import {COLOR_GRAY, FONT_SERIF, SPACER, SPACER_SMALL} from '../../style.contants';
import {mediaMax, mediaMin} from '../../utils/style.utils';

interface TimelineItemProps {
    company: string;
    title: string;
    year?: string;
    className?: string;
    isPresent?: boolean;
}

const TimelineItemComponent: FunctionComponent<TimelineItemProps> = ({children, className, company, isPresent, title, year}) => {
    return (
        <li className={className}>
            <div className="indicator" />
            <div className="year">{!year && isPresent ? 'Present' : year}</div>
            <div className="meta">
                <div className="company">{company}</div>
                <div className="title">{title}</div>
                <div className="content">{children}</div>
            </div>
        </li>
    );
};

const INDICATOR_SIZE = 12;
const COLOR_TIMELINE = COLOR_GRAY[5];

export const TimelineItem = styled(TimelineItemComponent)`
    display: flex;
    flex-direction: column;
    padding-bottom: ${SPACER}px;

    ${mediaMin('md')} {
        flex-direction: row;
        margin-left: ${INDICATOR_SIZE}px;
        border-left: 3px solid ${COLOR_TIMELINE};
    }

    .indicator {
        width: ${INDICATOR_SIZE}px;
        height: ${INDICATOR_SIZE}px;
        transform: translateX(${-INDICATOR_SIZE / 2 - 5}px) translateY(4px) rotate(45deg);
        border: 3px solid ${({isPresent}) => (isPresent ? COLOR_TIMELINE : COLOR_GRAY[8])};
        outline: 1px solid ${({isPresent}) => (isPresent ? COLOR_TIMELINE : COLOR_GRAY[8])};
        background: ${({isPresent}) => (isPresent ? COLOR_GRAY[8] : COLOR_TIMELINE)};

        ${mediaMax('md')} {
            display: none;
        }
    }

    .year {
        color: ${COLOR_TIMELINE};
        font-size: 12px;
        line-height: ${INDICATOR_SIZE}px;
        text-transform: uppercase;

        ${mediaMin('md')} {
            flex: 0 0 120px;
            margin-top: 8px;
            margin-left: ${SPACER_SMALL}px;
        }
    }

    .meta {
        flex: 1 0;
        line-height: 1.4;

        .company {
            font-size: 18px;
            font-weight: 700;
        }

        .title {
            color: ${COLOR_GRAY[4]};
            font-family: ${FONT_SERIF};
            font-size: 14px;
        }

        .content {
            font-size: 14px;
            p {
                margin: ${SPACER_SMALL}px 0;
            }

            ${mediaMax('md')} {
                margin-left: ${SPACER}px;
            }
        }
    }
`;
