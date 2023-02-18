import styled from "styled-components";
import { FaRocket } from "react-icons/fa";

import useToTop from "../../../hooks/useToTop";
import Icon from "../atoms/Icon";

const ToTopButton = () => {
  const [showToTop, goToTop] = useToTop();

  return (
    <>
      {showToTop && (
        <ToTopButtonStyle onClick={() => goToTop()}>
          <Icon>
            <Rotation45degStyle>
              <FaRocket size={30} />
            </Rotation45degStyle>
          </Icon>
        </ToTopButtonStyle>
      )}
    </>
  );
};

export default ToTopButton;

const ToTopButtonStyle = styled.button`
  position: fixed;
  bottom: 15px;
  right: 15px;

  background-color: rgba(0, 0, 0, 0);
  border-radius: 50%;
  border: none;
  transition: all 0.5s;
  :hover&:focus {
    transform: scale(1.15);
  }
`;

const Rotation45degStyle = styled.div`
  transform: rotate(-45deg);
`;
