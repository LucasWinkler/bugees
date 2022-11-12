import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled(Link)`
  display: inline-flex;
  border: 1px solid ${props => props.theme.colour.neutral100};
  padding: 0.6em 1.5em;
  color: ${props => props.theme.colour.neutral100};
  text-decoration: none;
  font-weight: bold;
  font-size: 1.125rem;
  flex-wrap: nowrap;
  white-space: nowrap;
`;

export default function HomeButton(props) {
  return <Button href={props.href}>{props.name}</Button>;
}

HomeButton.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
