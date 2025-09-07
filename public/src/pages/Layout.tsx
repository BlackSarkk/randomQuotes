import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

const Layout = () => {
  return (
    <div className="w-screen h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage: "url('https://picsum.photos/1920/1080?random')",
        }}
      />
      <div className="absolute inset-0 bg-white/85 -z-10" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
