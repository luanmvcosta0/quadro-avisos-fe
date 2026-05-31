import "./index.css";
import Content from "./notice_board/components/Content";
import Header from "./notice_board/components/Header";

function App() {
  return (
    <div className="bg-gray-200 h-screen w-screen">
      <Header />
      <Content />
    </div>
  );
}

export default App;
