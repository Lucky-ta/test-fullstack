"use client";
import styled from "styled-components";

export const Layout = styled("div")`
  width: 100%;

  main {
    padding: 80px 0;
  }

  .title-box {
    display: flex;
    align-items: center;
    gap: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 30px;
    margin-bottom: 30px;

    h1 {
      font-size: 32px;
    }

    svg {
      width: 35px;
      height: auto;
      stroke: currentColor;
    }
  }

  @media only screen and (max-width: 1600px) {
    main {
      padding: 70px 0;
    }

    .title-box {
      gap: 25px;
      padding-bottom: 25px;
      margin-bottom: 25px;

      h1 {
        font-size: 28px;
      }

      svg {
        width: 32px;
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    main {
      padding: 60px 0;
    }

    .title-box {
      gap: 20px;
      padding-bottom: 20px;
      margin-bottom: 20px;

      h1 {
        font-size: 26px;
      }

      svg {
        width: 30px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    main {
      padding: 40px 0;
    }

    .title-box {
      gap: 10px;

      h1 {
        font-size: 24px;
      }

      svg {
        width: 26px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    main {
      padding: 30px 0;
    }
  }
`;
