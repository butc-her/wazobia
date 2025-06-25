import { FaWpexplorer } from "react-icons/fa6";

const HeaderText = () => {
  return (
    <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl md:text-[67px] leading-tight text-[#14B503] capitalize"> wazobia encyclopedia</h1>
        <p className="text-white text-sm sm:text-base max-w-md sm:max-w-lg mt-4">
          Learn about Nigeria’s leaders—past and present. Discover their roles, impact, and service to the nation.</p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 mt-6 w-full sm:w-auto items-center">      
          <button className='w-full sm:w-auto bg-[#14B503] text-white font-[poppins] py-2 px-6 rounded hover:bg-[#14D503] duration-500'>
            View Profiles
          </button>
          <button className='flex flex-col justify-center align-center sm:flex-row gap-3 w-full sm:w-auto border border-[#14B503] text-[#14B503] font-[poppins] py-2 px-6 rounded hover:text-[#14F503] duration-500 mb-2 sm:mb-0'>
            Explore Leaders
          </button>
          <button className='w-full sm:w-auto bg-[#14B503] text-white font-[poppins] py-2 px-6 rounded hover:bg-[#14D503] duration-500'>
            Meet Your Representatives
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderText;
