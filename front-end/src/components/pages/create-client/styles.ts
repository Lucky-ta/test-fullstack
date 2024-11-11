import styled from "styled-components";

export const HomePage = styled("div")`
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
    gap: 20px;

    .error {
      font-size: 12px;
      color: red;
    }

    .actions {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      margin-top: 40px;

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
