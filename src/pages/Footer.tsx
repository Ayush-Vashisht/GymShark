import Payment from "../components/Payment";
import Social from "../components/Social";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Footer() {
  return (
    <div className=" w-full flex flex-col px-4 py-4 gap-4 md:px-16 md:py-8 md:gap-10 border-t">
      <div className="w-full md:grid grid-cols-2">
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-3 font-semibold text-gray-600">
            <span className="font-bold text-xl text-black">HELP</span>
            <span>FAQ</span> <span>Delivery</span> <span>Information</span>
            <span>Returns</span> <span>Policy</span> <span>Make A Return</span>
            <span>Orders</span> <span>Submit a Fake</span>
          </div>
          <div className="flex flex-col gap-3 font-semibold text-gray-600">
            <span className="font-bold text-xl text-black">My Account</span>{" "}
            <span>Login</span> <span>Register</span>
          </div>
          <div className="flex flex-col gap-3 font-semibold text-gray-600">
            <span className="font-bold text-xl text-black">Pages</span>{" "}
            <span>Gymshark</span> <span>Central</span>
            <span>About Us</span> <span>Careers</span>
            <span>Student Discount</span> <span>Veterans Discount</span>
            <span>Accessibility</span> <span>Statement</span>
            <span>Factory List</span> <span>Sustainability</span>
          </div>
        </div>
        <div className="w-full gap-2 flex flex-col">
          <span className="font-bold text-xl text-black">
            MORE ABOUT GYMSHARK
          </span>
          <div className="flex gap-5 font-semibold flex-col md:flex-row  ">
            <div className="bg-gray-400 w-64 justify-start flex flex-col">
              <img src="https://images.ctfassets.net/wl6q2in9o7k3/4QtcnsrjM61MBOfKzadnle/a18d71a24ca40bbc8137b754927e9c75/blog.jpg?w=1920&q=80&fm=webp" />
              <span className="px-2 py-3">BLOG</span>
            </div>
            <div className="bg-gray-400 w-64 justify-start flex flex-col">
              <img src="https://images.ctfassets.net/wl6q2in9o7k3/78i6cwhCg8cVO59Dvlk7Gy/ec15b2ca715a0b1aa27be0fd09c6aa03/newsletter__1_.jpg?w=1920&q=80&fm=webp" />
              <span className="px-2 py-3">EMAIL SIGNUP</span>
            </div>
            <div className="bg-gray-400 w-64 justify-start flex flex-col ">
              <img src="https://images.ctfassets.net/wl6q2in9o7k3/3TTQZzGVSeCd6TrrBs0OlS/16db4a41783e3ae43ac642c327aa82c9/new_training_app_footer.jpg?w=1920&q=80&fm=webp" />
              <span className="px-2 py-3">GYMSHARK TRAINING</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:items-center md:justify-between md:flex-row  gap-2">
        <Payment />
        <Social />
      </div>
      <div className="border-t flex  md:flex-row flex-col md:items-center justify-between text-gray-600 font-semibold text-xl md:px-5 py-5 gap-4">
        <span className="text-sm">
          © 2024 | Gymshark Limited | All Rights Reserved. | United We Sweat
        </span>
        <div className=" flex gap-10 md:flex-row flex-col">
          <span>Terms & Conditions</span> <span>Terms of Use</span>
          <span>Privacy Notice</span> <span>Cookie Policy</span>
          <span>Modern Slavery</span>
        </div>
        <div className="flex gap-10 md:border-l md:px-2 md:items-center md:justify-center">
          <span className="flex gap-2">
            <LanguageIcon />
            US <ExpandMoreIcon />
          </span>{" "}
          <span className="text-md">English</span>
        </div>
      </div>
    </div>
  );
}
