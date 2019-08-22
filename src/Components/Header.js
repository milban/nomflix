import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const SHeader = styled.header``

const List = styled.ul`
  display: flex;
  justify-content: space-around;
`

const Item = styled.li``

const SLink = styled(Link)`
  text-decoration: none;
`

export default () => (
  <SHeader>
    <List>
      <Item>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </SHeader>
)
