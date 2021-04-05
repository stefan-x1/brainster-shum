import Header from "./components/Header/Header";
import Radio from "./components/Radio/Radio";
import BrainsterNews from "./components/BrainsterNews/BrainsterNews";
import Footer from "./components/Footer/Footer";

import { RadioContextProvider } from "./context/radioContext";

import "./assets/Fonts/fonts.css";

function App() {
  return (
    <div className="App">
      <RadioContextProvider>
        <Header />
        <Radio />
      </RadioContextProvider>
      <BrainsterNews />
      <Footer />
    </div>
  );
}

export default App;
