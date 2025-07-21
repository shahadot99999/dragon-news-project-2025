import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className=" flex flex-col justify-center items-center 
        gap-4 py-4 ">
            <div className="logo">
                <img className="w-[300px]" src={logo} alt="Site Logo" />
               
            </div>
             <h2 className="text-gray-500 text-center">Journalism Without Fear or Favour</h2>
        </div>
    );
};

export default Header;
