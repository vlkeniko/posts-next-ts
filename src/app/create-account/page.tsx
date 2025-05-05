import CreateUser from "@/components/create-user";
import Image from "next/image";

export default function CreateAccountPage() {
  return (
    <div className="flex max-h-screen h-screen ">
      {/* Left Section: Create Account */}
      <div className="flex flex-1 justify-center items-center">
        <div className="w-full max-w-md">
          <CreateUser />
          <div className="flex justify-center items-center mt-4 gap-2">
            <p className="text-gray-700">Already have an account?</p>
            <a
              href="/"
              className="font-semibold text-blue-500 hover:cursor-pointer hover:text-blue-700"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 relative max-h-screen hidden sm:block">
        <Image
          src="/images/Hamburger-bro.svg"
          alt="Placeholder"
          width={450}
          height={450}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
