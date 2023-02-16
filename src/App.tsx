import Header from "./components/Header/Header";
import GlobalStyle from "./GlobalStyle";
import LoginPage from "./views/LoginPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <LoginPage />
      </div>
    </>
  );
}

export default App;
