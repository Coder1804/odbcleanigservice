import {Outlet} from  'react-router-dom'
import {Header, Footer, ContactInfo} from "./components/index.js";
function App() {

  return (
       <>
           <ContactInfo/>
           <Header/>
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
