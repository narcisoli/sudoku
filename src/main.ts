

import axios from 'axios'
import App from './components/App.svelte'
import { loadSprites } from './data/helpers/sprites'

import "./index.css"
import 'virtual:windi.css'





axios.defaults.baseURL = "http://localhost:3035/api"
axios.defaults.baseURL = "https://noisews.herokuapp.com/api/"


loadSprites("/sprites.svg")

const app = new App({
  target: document.getElementById('app')!
})

export default app
