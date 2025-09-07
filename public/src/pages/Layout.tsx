import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage: "url('https://picsum.photos/1920/1080?random')",
        }}
      />
      <div className="absolute inset-0 bg-white/85 -z-10" />

      <header>
        <Header />
      </header>

      <main > 
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
