import styled from 'styled-components';

import { transparency } from '~/defaults';

export const Root = styled.div`
  height: 4px;
  width: 240px;
  position: relative;
  overflow: hidden;
`;

export const trackStyle = `
  height: 4px;
  position: absolute;
`;

export interface TrackProps {
  color: string;
}

export const Track = styled.div`
  width: 100%;
  opacity: ${transparency.light.disabledControl};

  ${trackStyle}
  background-color: ${({ color }: TrackProps) => color};
`;

export interface IndicatorProps {
  color: string;
  indeterminate: boolean;
}

export const Indicator = styled.div`
  will-change: width, left, right;
  left: 0;

  ${trackStyle}
  background-color: ${({ color }: IndicatorProps) => color};
  animation: ${({ indeterminate }) => {
    if (indeterminate) {
      return 'nersent-ui-progressbar-first 3s ease-in infinite';
    }
    return 'unset';
  }};

`;
