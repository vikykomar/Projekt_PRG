import { createRoot } from 'react-dom/client'

import Kosik_Provider from './MainComponents/Kosik/Provider'

import Router from "./Router"

import "./Variables.css"
import "./Main.css"

createRoot(document.getElementById('app')).render(
  <Kosik_Provider>
    <Router/>
  </Kosik_Provider>
)
