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

const StyledDoubleLineButton = styled(StyledButton)`
  border-radius: 0;
  border: none;
  background: inherit;

  :before,
  :after {
    position: absolute;

    width: 100%;
    height: 2px;

    content: "";
    transition: all 0.3s;

    background: #000;
  }

  :before {
    top: 0;
    left: 0;
  }

  :after {
    right: 0;
    bottom: 0;
  }

  :hover:before,
  :hover:after,
  :focus:before,
  :focus:after {
    width: 0;
  }
`;

const DoubleLineButton = () => {
  return <StyledDoubleLineButton>PUSH!</StyledDoubleLineButton>;
};

export default DoubleLineButton;
