import styled from 'styled-components'

const StyledSearchWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 10px;
  right: 10px;
`

const StyledInputText = styled.input`
  width: 60px;
  height: 60px;
  padding: 20px;
  border: none;
  background: #fff url("https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/7-2-3/img/icon_search.svg") no-repeat 17px center;
  background-size: 25px 25px;
  transition: all .5s;
  outline: none;
  cursor: pointer;
  font-size: 2rem;
  color: #8A8A99;

  :focus {
    width: 250px;
    padding: 20px 0 20px 60px;
    box-shadow: 0 2px rgba(6, 0, 1, .26);
  }
`

const ExpandSearchBox = () => {
  return (
    <StyledSearchWrapper>
      <form action="" method="get">
        <StyledInputText type="text" />
      </form>
    </StyledSearchWrapper>
  )
}

export default ExpandSearchBox;