// import Body from "@/components/userPage/body";/
import LoginForm from "@/components/userPage/login";
import SignupForm from "@/components/userPage/signup";
import Header from "@/shared/Header/Header";

export default function UserPage() {
  return (
    <div className="w-full">
      <Header />
      {/* <Body /> */}
      {/* <LoginForm /> */}
      <SignupForm />
    </div>
  );
}
