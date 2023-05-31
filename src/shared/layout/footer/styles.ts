"use client"

import styled from "styled-components"

export const Wrapper = styled.footer`
  border-top: 1px solid ${props => props.theme.colors.footerBorderColor};
  margin: 4rem;
  padding: 2rem 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  nav,
  & > div {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  nav a {
    color: rgb(31, 31, 31);

    &.active {
      font-weight: 700;
    }
  }

  small {
    font-size: 0.75rem;
    color: #515151;
  }
`
