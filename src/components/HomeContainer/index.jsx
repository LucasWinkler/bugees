import styled from 'styled-components';

const Container = styled.div`
  width: min(
    ${props => props.theme.container.maxWidth},
    100% - ${props => props.theme.container.horizontalPadding} * 2
  );
  margin-inline: auto;
`;

export default Container;
