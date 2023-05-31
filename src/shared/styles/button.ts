"use client"

import styled from "styled-components"

export const Button = styled.button`
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.25) 0 4px 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;
  border: 2px solid transparent;
  min-width: 200px;
`

export const PrimaryButton = styled(Button)`
  background: ${props => props.theme.colors.primary};
  border-color: ${props => props.theme.colors.primary};
  color: #fff;
`

export const SecondaryButton = styled(Button)`
  border-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  background: #fff;
`
