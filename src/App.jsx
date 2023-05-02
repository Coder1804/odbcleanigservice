import {Outlet} from  'react-router-dom'
import {Header, Footer, ContactInfo} from "./components/index.js";
function App() {

  return (
    <div className="min-h-screen relative">
        <ContactInfo/>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <footer className="w-full  p-5 bg-secondary">
            <Footer/>
        </footer>
    </div>
  )
}

export default App
