import StrengthText from '../Fonts/StrengthText.jpeg';
import Lines from './/SubComponents/Lines.js';

function TopLeft() {
    return (
        <div class="flex flex-col justify-between w-full h-full bg-white rounded-2xl p-10">
            <div class="flex">
                <div class="bg-darkGray w-4 h-6"/>
                <div class="bg-yellow-400 w-4 h-6 ml-1 mr-5"/>
                <p class="font-bold">TIME FOR FITNESS - 23</p>
            </div>
            
            <img src={StrengthText} class="w-[75%] ml-[-1%]" alt="Own your strength, own you"/>

            <div class="flex w-full items-center">
                <div class="flex justify-center bg-black rounded-full w-[35%] h-10 items-center cursor-pointer">
                    <p class="text-white text-center font-bold text-xs">START YOUR JOURNEY</p>
                </div>
                <div class="w-1/8 ml-8">
                    <Lines/>
                </div>
                <p class="font-bold text-xs ml-8">LUXURY FITNESS <br></br>EXPERIENCE</p>
            </div>
            
        </div>
    );
}

export default TopLeft;