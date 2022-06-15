import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header";
import { Content } from "./components/Layout/Content";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
