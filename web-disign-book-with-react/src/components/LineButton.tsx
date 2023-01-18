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

const StyledLineButton = styled(StyledButton)`
  border: 2px solid #000;
  border-radius: 0;
  background: #fff;

  :hover,
  :focus {
    color: #fff;
    background: #000;
  }
`;

const LineButton = () => {
  return <StyledLineButton>PUSH!</StyledLineButton>;
};

export default LineButton;
