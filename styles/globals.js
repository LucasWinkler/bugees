import { createGlobalStyle, css } from 'styled-components';
import { Open_Sans } from '@next/font/google';

import device from './device';
import remedy from './remedy';

const openSans = Open_Sans();

const Globals = createGlobalStyle`
  ${remedy}

  body {
    background: ${props => props.theme.colour.background};
    font-family: ${openSans.style.fontFamily};
  }
`;

// Media Queries
export const mobileS = props => {
  return css`
    @media ${device.mobileS} {
      ${props}
    }
  `;
};

export const mobileM = props => {
  return css`
    @media ${device.mobileM} {
      ${props}
    }
  `;
};

export const mobileL = props => {
  return css`
    @media ${device.mobileL} {
      ${props}
    }
  `;
};

export const tablet = props => {
  return css`
    @media ${device.tablet} {
      ${props}
    }
  `;
};

export const laptop = props => {
  return css`
    @media ${device.laptop} {
      ${props}
    }
  `;
};

export const laptopL = props => {
  return css`
    @media ${device.laptopL} {
      ${props}
    }
  `;
};

export const desktop = props => {
  return css`
    @media ${device.desktop} {
      ${props}
    }
  `;
};

export const desktopL = props => {
  return css`
    @media ${device.desktopL} {
      ${props}
    }
  `;
};

export default Globals;
