import React from "react";
import Title from "./components/Title";
import HelpButton from "./components/HelpButton";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <>
      <Title />
      <div className="guess w-96 text-center text-black text-4xl font-semibold font-['Poppins'] leading-10">
        Adivinhe o personagem de adventures of ccpa de hoje!
        <br />
      </div>
      <div className="helpNav flex">
        <HelpButton />
        <HelpButton />
        <HelpButton />
      </div>
      <SearchBar />
    </>
  );
}

export default App;
