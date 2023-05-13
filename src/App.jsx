import {Outlet, useLocation} from 'react-router-dom'
import {Header, Footer, ContactInfo , ScrollToTop} from "./components/index.js";
function App() {

  return (
       <>
           <ContactInfo/>
           <Header/>
           <ScrollToTop/>
           <main>
               <Outlet/>
           </main>
           <footer className="w-full p-5 bg-secondary">
               <Footer/>
           </footer>
       </>
  )
}

export default App
