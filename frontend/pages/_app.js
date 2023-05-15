import '@/styles/globals.css'
import { createContext, useState } from 'react'

export const GlobalContext = createContext();

export default function App({ Component, pageProps }) {

  const [text,setText] = useState("")
  const [movies,setMovies] = useState([])

  const initialValue = {
    text,
    setText,
    movies,
    setMovies
  }


  return (
    <GlobalContext.Provider value={initialValue}>
      <Component {...pageProps} />
  </GlobalContext.Provider>
  )
}
