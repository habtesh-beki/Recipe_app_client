import { useForm, SubmitHandler } from "react-hook-form";
import { UserPlus } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export default function SignupForm() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center w-full flex-grow h-screen">
      <div className="w-1/2 flex flex-col items-center gap-3">
        <UserPlus size={48} className="text-[#4338CA]" />
        <h3 className="font-bold text-4xl">Create a new account</h3>
        <h4>
          or {/* <Link to="/login"> */}
          <span className="text-[#4338CA] cursor-pointer">
            signin to your existing account
          </span>
          {/* </Link> */}
        </h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 w-1/2 mt-5 p-8 rounded-md bg-gray-100"
        >
          <div className="flex flex-col gap-3">
            <label className="font-bold ">First name</label>
            <Input
              className="h-12 bg-white"
              {...(register("first_name"), { required: true })}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-bold">Last Name</label>
            <Input
              className="h-12 bg-white"
              {...(register("last_name"), { required: true })}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-bold">Email</label>
            <Input
              className="h-12 bg-white"
              {...(register("email"), { required: true })}
            />
          </div>
          <div className="flex flex-col gap-3">
            ype
            <label className="font-bold">Password</label>
            <Input
              className="h-12 bg-white"
              {...(register("password"), { required: true })}
            />
          </div>

          <Button
            type="submit"
            className="bg-[#4338CA] text-white text-xl mt-3"
          >
            Create account
          </Button>
        </form>
      </div>
    </div>
  );
}
