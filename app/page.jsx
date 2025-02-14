import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>
      <main>
        <Sidebar />
        <div className="contentBlock">
          <Navbar />
        </div>
      </main>
    </>
  );
}
