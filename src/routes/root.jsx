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
              <p>Literacy Wellness Inc. Contact azzadaba@literacywellness.com</p>
          </footer>
    </>
  )
}

export default Root
