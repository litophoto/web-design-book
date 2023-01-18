import { ReactNode,useState } from 'react'
import styled from 'styled-components'

const StyledTabs = styled.div``

type TypeTabs = {
  children: ReactNode,
  value: any,
  onChange: (value: any) => void,
}

const Tabs = ({children, value, onChange}: TypeTabs) => {
  return <StyledTabs>{children}</StyledTabs>
}

const StyledTab = styled.div``

type TypeTab = {
  children: ReactNode,
  value: any,
  label: string,
}

const Tab = ({children, value, label}: TypeTab) => {
  return <StyledTab>{children}</StyledTab>
}

const TabExample = () => {
  const [value, setValue] = useState(1)
  const handleChange = (value: number) => {
    setValue(value)
  }
  
  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab value={value} label={"Tab 1"}>Tab 1</Tab>
      <Tab value={value} label={"Tab 2"}>Tab 2</Tab>
    </Tabs>
  )
}

export default TabExample