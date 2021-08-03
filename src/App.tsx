import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";

interface AppProps {}

const App: React.FC<AppProps> = (): JSX.Element => {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
    </Router>
  );
};

export default App;
