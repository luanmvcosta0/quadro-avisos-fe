import "./index.css";
import Content from "./notice_board/components/Content";
import Footer from "./notice_board/components/Footer";
import Header from "./notice_board/components/Header";

function App() {
  return (
    <div className="bg-gray-200 h-screen w-screen">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
