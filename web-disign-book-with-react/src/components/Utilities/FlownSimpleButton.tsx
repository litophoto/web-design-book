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

const StyledFlownSimpleButton = styled(StyledButton)`
  
  overflow: hidden;
  border: none;
  padding: 1.5rem 6rem;

  color: #fff;
  border-radius: 0;
  background: #000;

  :before {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    content: "";
    transition: all 0.5s ease-in-out;
    transform: translateX(-90%);

    background: #00b7ee;
  }

  :hover:before, :focus:before {
    transform: translateX(0%);
  }
`;

const StyledFlower = styled.span`
  position: relative;
`;

const FlownSimpleButton = () => {
  return (
    <StyledFlownSimpleButton>
      <StyledFlower>Button</StyledFlower>
    </StyledFlownSimpleButton>
  );
};

export default FlownSimpleButton;
