import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  background: blue;
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-9deg);
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyle = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
  .sub-bar {
    display: grid
    grid-template-columns: 1fr auto;
    justify-content: space-between;
    border-bottom: 1px solid var(--black, black);
  }
`;

export default function Header() {
  return (
    <HeaderStyle>
      <div className="bar">
        <Logo>
          <Link href="/">Sudzy Store</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyle>
  );
}
