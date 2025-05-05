import Login from "../components/login";
import Image from "next/image";

export default function Entry() {
  return (
    <div className="flex max-h-screen h-screen">
      {/* Left Section: Login */}
      <div className="flex flex-1 justify-center items-center">
        <div className="w-full max-w-md">
          <Login />
          <div className="flex justify-center items-center mt-4 gap-2">
            <p className="text-gray-700">First time here?</p>
            <a
              href="/create-account"
              className="font-semibold text-blue-500 hover:cursor-pointer hover:text-blue-700"
            >
              Create an account
            </a>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 relative  max-h-screen  hidden sm:block">
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
