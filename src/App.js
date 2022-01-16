import react from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Feature } from "./components/Feature";
import { Header } from "./components/Header";
import { Nevigation } from "./components/Nevigation";
import { Services } from "./components/Services";
import "./components/Style.css"
import { Team } from "./components/Team";


function App() {
  return (
    <>
     <Nevigation />
     <Header/>
     <Feature />
     <About />
     <Services />
     <Team />
     <Contact/>
    </>
  );
}

export default App;
