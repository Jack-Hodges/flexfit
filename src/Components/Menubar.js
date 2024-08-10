function Menubar() {
  return (
    <div className="flex justify-between items-center h-[5%] px-2 pt-3">
      <div className="w-[60%] flex justify-between items-center">
        <p className="text-white text-3xl font-bold">FlexFit</p>
        <p className="text-white text-xs">ABOUT</p>
        <p className="text-white text-xs">SCHEDULE</p>
        <p className="text-white text-xs">STORE</p>
        <p className="text-white text-xs">CONTACT</p>
      </div>

      <div className="flex items-center h-full w-[25%] justify-end">
        <p className="text-white mr-1 bg-gray-800 p-3 rounded-full w-[150px] text-center text-xs">JOIN OUR GYM</p>
        <div className="bg-yellow-300 rounded-full h-10 w-10" />
      </div>
    </div>
  );
}

export default Menubar;