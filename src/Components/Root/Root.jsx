import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Root = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-[#e5e8fb] to-[#f1f0f4]">
        <Header></Header>
      </div>
      <div >
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
