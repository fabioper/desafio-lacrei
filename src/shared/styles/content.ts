"use client"

import styled from "styled-components"

export const Content = styled.main<{ hideBorder?: boolean }>`
  padding: 4rem 4rem 0;
  display: flex;
  justify-content: space-between;

  & > div {
    max-width: 540px;
  }

  h2 {
    font-size: 3rem;
    margin: 0 0 2rem;

    @media (max-width: ${props => props.theme.sizes.md}) {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    @media (max-width: ${props => props.theme.sizes.sm}) {
      font-size: 1.5rem;
      margin-bottom: 0.875rem;
    }
  }

  .description {
    font-size: 1.5rem;
    line-height: 2rem;
    color: rgb(81, 81, 81);
    margin: 0;
    padding-left: 1rem;
    border-left: 5px solid ${props => props.theme.colors.primary};

    ${props =>
      Boolean(props.hideBorder) &&
      `
      padding-left: 0;
      border-left: none;
    `};

    @media (max-width: ${props => props.theme.sizes.md}) {
      line-height: 1.5rem;
      font-size: 1rem;
    }

    @media (max-width: ${props => props.theme.sizes.sm}) {
      line-height: 1.25rem;
      font-size: 0.875rem;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 453px;
    margin-top: 3rem;

    @media (max-width: ${props => props.theme.sizes.md}) {
      flex-direction: column;
      gap: 1rem;

      & button {
        min-width: 200px;
      }
    }
  }

  img {
    max-width: 540px;
    display: block;
    object-fit: contain;
    width: 100%;
  }

  @media (max-width: ${props => props.theme.sizes.md}) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 2rem 0;
  }

  @media (max-width: ${props => props.theme.sizes.sm}) {
    padding: 1rem 1rem 0;
  }
`
