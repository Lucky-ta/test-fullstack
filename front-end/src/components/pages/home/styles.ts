import styled from "styled-components";

export const HomePage = styled("div")`
  .description {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;

    > div {
      > h2 {
        margin-bottom: 20px;
      }
    }
  }

  .list {
    margin-bottom: 40px;

    > div + div {
      margin-top: 30px;
    }
  }
`;
