import data from "../data";
import { CartItem } from "../components/CartItem";
import Botton from "../components/Botton";
import { Content } from "../components/Content";
import { Exams } from "../components/Exams";


const Home = () => {
  
  return (
    <div className="flex flex-col justify-center items-center pt-[8rem] pb-[1rem] w-screen h-auto bg-[#F8F9FA]">
      <div className="flex justify-start w-3/4 h-auto  pt-4  gap-3  ">
        <img src="../ep_back.png"></img>
        <div className="page_2_heading">Back</div>
      </div>
      <div className="flex flex-row w-3/4 gap-2 justify-start py-4 ">
        <div className="flex flex-col h-auto">
          <div>
              <CartItem {...data[0]}></CartItem>
          </div>
          <div>
             <Content/>
          </div>
        </div>
        <div>
          <Exams></Exams>

        </div>

      </div>


    </div>
  );
};

export default Home;
