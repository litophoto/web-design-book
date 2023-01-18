import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  dispaly: inline-block;

  padding: 1rem 4rem;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #212529;
  border-radius: 0.5rem;
`;

const StyledOutBorderButton = styled(StyledButton)`
  padding: calc(1.5rem - 12px) 3rem 1.5rem;
  background: #fff;

  border: none;
  border-radius: 0;
  background: yellow;

  :before {
    position: absolute;
    top: -6px;
    left: -6px;

    width: 100%;
    height: 100%;

    content: "";
    transition: all 0.3s ease;

    border: 3px solid #000;

    border-radius: 0;
  }

  :hover {
    padding: calc(1.5rem - 6px) 3rem;
  }

  :hover:before {
    top: 0;
    left: 0;
  }
`;

const OutBorderButton = () => {
  return <StyledOutBorderButton>PUSH!</StyledOutBorderButton>;
};

export default OutBorderButton;
