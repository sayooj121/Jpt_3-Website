import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  Style,
  Whatgpt,
  Header,
} from "./containers/components";
import { Cta, Brand, Navbar } from "./components/components";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt />
      <Style />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
