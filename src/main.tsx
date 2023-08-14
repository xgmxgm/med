import ReactDOM from 'react-dom/client'
import { App } from './app/App.tsx'
import './app/styles/globals.scss'

import '../i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)