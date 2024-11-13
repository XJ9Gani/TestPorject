import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
}
