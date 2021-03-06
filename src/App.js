import { Route, Routes } from 'react-router-dom'
import { About, Landing, NotFound, Services, Team } from './pages'
import { Layout } from './components'

const App = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Landing />} />
      <Route path='about' element={<About />} />
      <Route path='services' element={<Services />} />
      <Route path='team' element={<Team />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
)

export default App
