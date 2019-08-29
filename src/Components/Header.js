import React from "react"
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components"

const SHeader = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 1);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 1;
`

const List = styled.ul`
  display: flex;
`

const Item = styled.li`
  width: 80px;
  height: 50px;
  border-bottom: 5px solid ${props => (props.current ? "#1abc9c" : "transparent")};
`

const SLink = styled(Link)`
  text-decoration: none;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default withRouter(({ location: { pathname } }) => (
  <SHeader>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </SHeader>
))
