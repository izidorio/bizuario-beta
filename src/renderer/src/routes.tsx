import { Route } from 'react-router-dom'
import { Router } from '../../lib/electron-router-dom'

import { Default } from '@renderer/components/layouts'
import { Home } from '@renderer/pages/home'
import { NotFound } from './pages/not-found'
import { Settings } from './pages/settings'
import { About } from './pages/about'

export function Routes() {
  return (
    <Router
      _providerProps={{
        fallbackElement: (
          <div className="flex w-full h-screen items-center justify-center">
            <h1 className="title text-3xl">Loading...</h1>
          </div>
        )
      }}
      main={
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings/customize" element={<Settings />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      }
    />
  )
}
