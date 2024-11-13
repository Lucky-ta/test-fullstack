"use client";
import styled from "styled-components";

export const HomePage = styled("div")`
  .description {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;
    gap: 20px;

    > div {
      > h2 {
        margin-bottom: 20px;
        font-size: 24px;

        > span {
          font-size: 16px;
        }
      }
    }
  }

  .list {
    margin-bottom: 40px;

    > div + div {
      margin-top: clamp(10px, 4.17vw, 30px);
    }
  }

  @media only screen and (max-width: 1600px) {
    .description {
      margin-bottom: 30px;

      > div {
        > h2 {
          margin-bottom: 15px;
          font-size: 22px;
        }
      }
    }

    .list {
      margin-bottom: 35px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .description {
      margin-bottom: 25px;

      > div {
        > h2 {
          margin-bottom: 10px;
          font-size: 20px;
        }

        > span {
          font-size: 14px;
        }
      }
    }

    .list {
      margin-bottom: 30px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .description {
      > div {
        > h2 {
          margin-bottom: 4px;
        }
      }
    }

    .list {
      margin-bottom: 25px;
    }
  }
`;
