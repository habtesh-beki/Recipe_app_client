import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="flex fixed w-screen justify-between px-15 py-6 h-20 bg-background text-text items-center shadow-sm">
      <div className="text-2xl">Home Page</div>
      <div className="flex items-center gap-3 ">
        <Button className="border cursor-pointer text-xl bg-text text-background">
          Login
        </Button>
        <Button className="border cursor-pointer text-xl">Signup</Button>
      </div>
    </div>
  );
}
