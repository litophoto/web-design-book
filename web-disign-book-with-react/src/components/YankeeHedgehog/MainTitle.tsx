import styled from 'styled-components'

const StyledNum = styled.span`
  font-size: 3.2rem;
  text-align: center;
  margin-top: 8px;
  color: #cec6bb;
`

const StyledNameService = styled.span`
  font-size: 1.8rem;
  line-height: 1.5;
  padding-left: 10px;
  writing-mode: hovizontal-tb;
`

type TypeMainTitle = {
  num: string
  text: string
}

const MainTitle = ({num, text}: TypeMainTitle) => {
  return (
    <h3>
      <StyledNum>{num}</StyledNum>
      <StyledNameService>{text}</StyledNameService>
    </h3>
  )
}

export default MainTitle