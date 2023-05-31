"use client"

import styled from "styled-components"

export const Wrapper = styled.footer`
  border-top: 1px solid ${props => props.theme.colors.footerBorderColor};
  margin: 0 4rem;
  padding: 2rem 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  nav,
  & > div {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  nav {
    a {
      color: rgb(31, 31, 31);

      &.active {
        font-weight: 700;
      }
    }

    @media (max-width: ${props => props.theme.sizes.sm}) {
      align-items: flex-start;
      flex-direction: column;
      gap: 0.25rem;

      a {
        font-size: 0.875rem;
      }
    }
  }

  small {
    font-size: 0.75rem;
    color: #515151;
  }

  @media (max-width: ${props => props.theme.sizes.md}) {
    margin: 0 2rem;
  }

  @media (max-width: ${props => props.theme.sizes.sm}) {
    margin: 0 1rem;
    padding-top: 1rem;
  }
`
