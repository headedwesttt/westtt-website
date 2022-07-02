import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'

export const Layout = () => (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
)
