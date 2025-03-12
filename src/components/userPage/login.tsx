import { User } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-1/2 flex flex-col items-center gap-3">
        <User size={48} className="text-[#4338CA]" />
        <h3 className="font-bold text-4xl">Welcome Back!</h3>
        <h4 className="flex gap-2">
          or {/* <Link to="/signup"> */}
          <span className="text-[#4338CA] cursor-pointer">
            create new account
          </span>
          {/* </Link> */}
        </h4>
        <form className="flex flex-col gap-4 w-1/2 mt-5 p-8 rounded-md bg-gray-100 ">
          <div className="flex flex-col gap-3">
            <label className="font-bold">Email</label>
            <Input className="bg-white" />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-bold">Password</label>
            <Input className="bg-white" />
          </div>
          <Button className="bg-[#4338CA] text-white text-xl mt-3 cursor-pointer">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
