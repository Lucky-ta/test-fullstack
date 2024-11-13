"use client";
import styled from "styled-components";

export const Header = styled("header")`
  position: sticky;
  top: 0;
  background: #333333;
  width: 100%;
  padding: 20px 0;

  a {
    display: flex;
    width: 95px;
    margin: 0 auto;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 1024px) {
    padding: 15px 0;

    a {
      width: 90px;
    }
  }
`;
