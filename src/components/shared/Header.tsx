import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="fixed w-full z-[1000]">
      <div className="flex mx-auto w-full justify-between px-6 py-2  bg-background text-text items-center  z-[1000]">
        <div className="text-lg">Home Page</div>
        <div className="flex items-center gap-3 ">
          <Button className="border cursor-pointer p-2 text-md bg-text text-white">Login</Button>
          <Button className="border cursor-pointer p-2 text-md">Signup</Button>
        </div>
      </div>
    </div>
  );
}
