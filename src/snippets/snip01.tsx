import React from 'react'

export interface AppProps {
  lang: 'en' | 'fr'
  name: string
}

export const App = (props: AppProps) => {
  return (
    <div>
      <h1>Hello world</h1>
      {props.lang === 'en' ? (
        <p>{`Congrats ${props.name} 🎉 !`}</p>
      ) : (
        <p>{`Bravo ${props.name} 🎉 !`}</p>
      )}
    </div>
  )
}

export default App
