import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
//what is state?-dta inside component
//what is props? data passed from parent to child

const WrapperComp = styled.h1`
color: ${props => props.theme.primaryColor}
`

// 👉 STEP 2 - React Router imports (Route, Link and Switch)
import {Route, Link, Switch} from 'react-router-dom'

// Components used for the different routes
import Home from './Home'
import ItemsList from './ItemsList'
import Item from './Item'

// Dummy data
import data from '../data'

function fetchStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, data })
}

export default function App(props) {
  const [stock, setStock] = useState([])

  useEffect(() => {
    fetchStock().then(res => setStock(res.data))
  }, [])

  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Emily&apos;s Trinkets</h1>
        <div className='nav-links'>
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
        <Link to ="/">Home</Link>
        <Link to ="/items-list">Shop</Link>
        </div>
      </nav>
      <Switch>
      <Route path={"/items-list/:itemID"}>
        <Item items={stock} />
      </Route>
      <Route path="/items-list">
        <ItemsList items={stock} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      </Switch>
      {/* 👉 STEP 4 - Build a Switch with a Route for each of the components imported at the top */}
    </div>
  )
}
