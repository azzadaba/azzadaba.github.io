import '../App.css'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'

function Root() {

  return (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
          <footer>
              <p>Literacy Wellness © 2023. Contact azzadaba@literacywellness.com</p>
          </footer>
    </>
  )
}

export default Root
