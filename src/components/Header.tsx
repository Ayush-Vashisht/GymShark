import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Header = () => {
  return (
    <div className="flex flex-col fixed w-full top-0 left-0 z-10">
      <div className=" flex justify-end bg-gray-200 gap-2 px-10 text-lg text-gray-600 py-4">
        <span className="border-r border-gray-400 px-2">Account </span>
        <span className="border-r border-gray-400 px-2">
          Accessibility Statement{" "}
        </span>
        <span className="border-r border-gray-400 px-2">Help</span>{" "}
        <span className="border-r border-gray-400 px-2">Email Sign Up </span>
        <span className="border-r border-gray-400 px-2">Blog</span>{" "}
        <span className="flex gap-2 items-center justify-center">
          <LanguageIcon />
          US <ExpandMoreIcon />
        </span>
        <span>
          English <ExpandMoreIcon />
        </span>
      </div>
      <div className="w-full top-5  bg-white z-10  ">
        <div className="   flex justify-between px-10  ">
          <img
            src="https://cdn.gymshark.com/images/branding/gs-icon-black.svg"
            alt=""
            className="w-14 h-14"
          />
          <div className="flex justify-between gap-8 items-center text-xl font-semibold">
            <span>Women</span>
            <span>Men</span>
            <span>Accessories</span>
          </div>
          <div className="flex items-center justify-between gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
