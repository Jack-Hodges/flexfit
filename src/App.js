import "./input.css";
import './App.css';
import MenuBar from './Components/Menubar.js';
import TopLeft from './Components/TopLeft.js';
import TopRight from './Components/TopRight.js';
import BottomLeft from './Components/BottomLeft.js';
import BottomRight from './Components/BottomRight.js';

function App() {
  return (
    <div class="w-screen h-screen bg-darkGray">
      <MenuBar/>

      {/* Main content */}
      <div class='p-3 w-full h-full'>
        {/* Top row  */}
        <div class="flex justify-between w-full h-[65%]">

          <div class="w-3/5">
            <TopLeft/>
          </div>

          <div class="w-[39%]">
            <TopRight/>
          </div>

        </div>

        {/* Bottom row */}
        <div class="flex pt-3 justify-between w-full h-[30%]">
          <div class="w-3/5">
            <BottomLeft/>
          </div>

          <div class="w-[39%]">
            <BottomRight/>
          </div>
          
        </div>
      </div>
      
    </div>
    
  );
}

export default App;
