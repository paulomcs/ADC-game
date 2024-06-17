import React from "react";
import Title from "./components/Title";
import HelpButton from "./components/HelpButton";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <div className="w-full h-full bg-[url('/src/assets/background.png')]">
      <Title />
      <div className="guess w-96 text-center text-black text-4xl font-semibold font-['Poppins'] leading-10">
        Adivinhe o personagem de adventures of ccpa de hoje!
        <br />
      </div>


      <div className="">
        <div className="Rectangle36 w-96 h-10 bg-black border border-amber-300" />
        <div className="helpNav flex">
          <HelpButton />
          <HelpButton />
          <HelpButton />
        </div>
      </div>
      
      
      <SearchBar />
    </div>
  );
}

export default App;
