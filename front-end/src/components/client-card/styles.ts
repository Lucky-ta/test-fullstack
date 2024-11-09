import styled from "styled-components";

export const ClientCard = styled("div")`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 35px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;

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
    width: 200px;

    span {
      margin: 0;
    }

    .color {
      width: 15px;
      height: 15px;
      border-radius: 100rem;
      background: var(--color);
      display: flex;
    }
  }
`;
