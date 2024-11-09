import styled from "styled-components";

export const Button = styled("div")`
  button,
  a {
    display: flex;
    background: #e29933;
    color: #fff;
    border: none;
    border-radius: 4px;
    height: 40px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    transition: 0.2s;
    font-weight: 600;
    border: 1px solid transparent;
    text-decoration: none;

    &:hover {
      background: transparent;
      color: #e29933;
      border-color: currentColor;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }

    &.invertColors {
      background: transparent;
      color: #e29933;
      border-color: currentColor;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

      &:hover {
        background: #e29933;
        color: #fff;
        border: 1px solid transparent;
      }
    }
  }
`;
