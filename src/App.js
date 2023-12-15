import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Card } from "./components/Card";
import { ChatBox } from "./components/ChatBox";
import { Header } from "./components/Header";
import SalesReport from "./components/SalesReport";
import { Topbar } from "./components/Topbar";
import { cardsData } from "./data/data";
// import { sidebarData } from "./data/data";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <Sidebar showSidebar={showSidebar} />
    {/* {
      console.log(sidebarData)
    } */}

      <section id="content">
        <Topbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <main>
          <Header />

          <div className="info-data">
            {cardsData.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>

          <div className="data">
            <SalesReport />
            <ChatBox />
          </div>
        </main>
      </section>
    </>
  );
}

export default App;
