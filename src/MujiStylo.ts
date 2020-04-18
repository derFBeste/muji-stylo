import styled from "styled-components";

export const MujiFetchMsg = styled.div`
  border: 1px dotted black;
  margin: 0.25rem;
  padding: 0.25rem 0.5rem;
  width: fit-content;
  display: flex;
  align-items: center;
`;

export const MujiInput = styled.input`
  padding: 0.25rem;
  margin: 0.25rem;
  height: 100%;
  font-weight: 300;
  text-align: right;
`;

export const MujiSectionHeader = styled.div`
  padding: 0.25rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const MujiTile = styled.div`
  letter-spacing: 0.1em;
  margin: 0.5rem 0.25rem 0rem 0.25rem;
  width: 9rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`;

export const MujiLine = styled.div<{ hrz?: boolean }>`
  ${({ hrz }) =>
    !hrz &&
    `
    border-bottom: 1px solid #aaa;
    margin: 0.25rem 0rem;
    `}

  ${({ hrz }) =>
    hrz &&
    `
    border-right: 1px solid #aaa;
    margin: 0rem 0.25rem;
    `}
`;

export const MujiHealthCheck = styled.h1`
  background-color: pink;
`;
