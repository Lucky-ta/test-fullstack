"use client";
import styled from "styled-components";

export const ClientPage = styled("div")`
  .description {
    margin-bottom: 35px;

    > h2 {
      margin-bottom: 20px;
    }
  }

  form {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: clamp(6px, 2.78vw, 20px);

    .error {
      font-size: 12px;
      color: red;
    }

    .actions {
      display: flex;
      justify-content: space-between;
      gap: clamp(10px, 2.78vw, 20px);
      margin-top: clamp(20px, 5.56vw, 40px);

      > div {
        width: 100%;
      }

      button,
      a {
        width: 100%;
      }
    }
  }
`;
