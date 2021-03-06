import React from 'react'
import { Root, Routes, addPrefetchExcludes, Head } from 'react-static'
import { Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './css/bootstrap.min.css'
import './app.css'

import favicon from 'images/tabcar.png'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Head>
        <link rel="shortcut icon" href={ favicon } />
      </Head>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Dynamic path="dynamic" />
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  )
}

export default App
