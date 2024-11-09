import styled from "styled-components";

export const Layout = styled("div")`
  width: 100%;

  main {
    padding: 100px 0;
  }

  .title-box {
    display: flex;
    align-items: center;
    gap: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding-bottom: 30px;
    margin-bottom: 30px;

    svg {
      width: 35px;
      height: auto;
      stroke: currentColor;
    }
  }
`;
