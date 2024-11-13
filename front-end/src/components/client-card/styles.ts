"use client";
import styled from "styled-components";

export const ClientCard = styled("div")`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 35px;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  span {
    display: inline-flex;
  }

  > div:last-child {
    width: 100%;
    max-width: 145px;
    margin: 0 0 0 auto;
  }

  span {
    display: block;
    font-weight: 600;

    & + span {
      margin-top: 2px;
      font-weight: 400;
    }
  }

  .status {
    display: flex;
    align-items: center;
    gap: 5px;

    span {
      margin: 0;
      word-break: break-all;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .color {
      min-width: 15px;
      min-height: 15px;
      border-radius: 100rem;
      background: var(--color);
      display: flex;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 20px 30px;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

    > div:nth-child(2) {
      text-align: end;
    }
  }

  @media only screen and (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;

    > div:nth-child(2) {
      text-align: start;
    }

    > div:last-child {
      margin-top: 20px;
      max-width: 100%;
    }
  }
`;
