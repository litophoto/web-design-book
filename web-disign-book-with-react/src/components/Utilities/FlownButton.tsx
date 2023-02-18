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

const StyledFlownButton = styled(StyledButton)`
  position: relative;
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

    width: 150%;
    height: 500%;

    content: "";
    transition: all 0.5s ease-in-out;
    transform: translateX(-100%) translateY(-25%) rotate(45deg);

    background: #00b7ee;
  }

  :hover:before, :focus:before {
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }
`;

const StyledFlower = styled.span`
  position: relative;
`;

const FlownButton = () => {
  return (
    <StyledFlownButton>
      <StyledFlower>Button</StyledFlower>
    </StyledFlownButton>
  );
};

export default FlownButton;
