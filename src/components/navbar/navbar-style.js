import styled from 'styled-components';

const Nav = styled.nav`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-family: var(--font-title);
  font-weight: bold;
  height: 40px;
  margin-bottom: 10px;
  padding: 0 10px 0 5px;
  text-transform: uppercase;
  top: 0;
  width: 100%;
  z-index: 100;

  .nav__icon {
    align-items: center;
    display: flex;
    height: 100%;
    padding: 0 5px;
    text-decoration: none;
  }
  .nav__icon:focus svg .st0,
  .nav__icon:hover svg .st0 {
    fill: var(--color-secondary);
  }
  .nav__icon:focus span,
  .nav__icon:hover span {
    color: var(--color-secondary);
  }

  .nav__icon span,
  .nav__icon svg .st0 {
    transition: all 0.3s ease;
  }
  .nav__icon span {
    color: var(--color-font-dark);
  }
  .nav__icon svg {
    margin-right: 0.5rem;
  }
  .nav__icon svg .st0 {
    fill: var(--color-primary);
  }
  .nav__icon svg .st1 {
    fill:var(--color-accent);
  }

  .nav__right {
    color: var(--color-font-dark);
    margin-left: auto;
  }
  .nav__right a {
    margin: 0 0.6rem;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  .nav__right a:link,
  .nav__right a:visited {
    color: var(--color-font-dark);
  }
  .nav__right a:focus,
  .nav__right a:hover {
    color: var(--color-secondary);
  }
`;

export default Nav;
