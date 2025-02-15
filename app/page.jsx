import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import HeroBody from "./Components/HeroBody";

export default function Home() {
  return (
    <>
      <main>
        <Sidebar />
        <div className="contentBlock">
          <Navbar />
          <HeroBody />
        </div>
      </main>
    </>
  );
}
