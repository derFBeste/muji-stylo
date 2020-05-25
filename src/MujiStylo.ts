import styled from "styled-components";

export const MujiButton = styled.button<{
  disabled?: boolean;
  css?: {};
}>`
  margin: 0.25rem;
  min-width: 4rem;
  border: 1px solid black;
  padding: 0.25rem 0.5rem;
  font-weight: 300;
  letter-spacing: 0.1px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: #30d430 auto 3px;
  }
  ${(props) => props.css};
`;

export const MujiMsgBox = styled.div<{ css?: {} }>`
  border: 1px dotted black;
  margin: 0.25rem;
  padding: 0.25rem 0.5rem;
  width: fit-content;
  display: flex;
  align-items: center;
  ${(props) => props.css};
`;

export const MujiInput = styled.input<{ css?: {} }>`
  padding: 0.25rem;
  margin: 0.25rem;
  height: 100%;
  font-weight: 300;
  text-align: right;
  ${(props) => props.css};
`;

export const MujiSectionHeader = styled.div<{ css?: {} }>`
  padding: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  ${(props) => props.css}
`;

export const MujiTag = styled.div<{ css?: {} }>`
  margin: 0.25rem;
  min-width: 3rem;
  max-width: 6rem;
  border: 1px solid black;
  padding: 0rem 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  min-height: 1.75rem;
  ${(props) => props.css};
`;

export const MujiTile = styled.div<{ css?: {} }>`
  letter-spacing: 0.1em;
  margin: 0.25rem;
  width: 9rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  ${(props) => props.css};
`;

export const MujiLine = styled.div<{ hrz?: boolean; css?: {} }>`
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
    ${(props) => props.css};
`;

export const MujiHealthCheck = styled.h1<{ css?: {} }>`
  background-color: pink;
`;
