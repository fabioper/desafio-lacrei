"use client"

import styled from "styled-components"

export const Wrapper = styled.header`
  background: #eeeeee;
  padding: 0.5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
  }

  nav {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2.5rem;

    a {
      font-size: 1rem;
      font-weight: 700;

      @media (max-width: ${props => props.theme.sizes.sm}) {
        font-size: 0.875rem;
      }
    }

    a.active {
      color: ${props => props.theme.colors.primary};
    }
  }

  @media (max-width: ${props => props.theme.sizes.sm}) {
    flex-direction: column;
  }
`
