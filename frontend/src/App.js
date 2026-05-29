import React from "react";
import MainSearchBar from "./components/MainSearchBar";
import Sections from "./components/Sections";
import LegalAlert from "./components/LegalAlert";

function App() {
  return (
    <>
      <header>
        <h2>منصة المحلل القضائي اليمني الذكية</h2>
        <h4 style={{marginTop:5, color: "#eeba5a", fontWeight:"normal"}}>
          "مساعدك القانوني المبني على الذكاء الاصطناعي"
        </h4>
      </header>
      <LegalAlert />
      <div className="main-box">
        <MainSearchBar />
      </div>
      <Sections />
    </>
  );
}
export default App;
