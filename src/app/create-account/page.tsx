
import CreateUser from "@/components/create-user";

export default function CreateAccountPage() {
  return (
    <div className="container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {/* Card Flex */}
      <div className="flex flex-col">
        <CreateUser />
        <div className="flex w-full justify-center items-center mt-4 gap-2">
          <p className="text-white">Already have an account?</p>
          <a
            href="/"
            className="font-semibold text-blue-300 hover:cursor-pointer hover:text-blue-600"
          >
            Sign in
          </a>
        </div>
        {/* <CreateUser/> */}
      </div>
    </div>
  );
}
