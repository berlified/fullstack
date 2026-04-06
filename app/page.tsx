import { Show, SignInButton, UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      <Show when="signed-out">
        <SignInButton mode="modal">
          <button className="bg-white text-black">
            Sign In 
          </button>
        </SignInButton>
      </Show>

      <Show when="signed-in">
        <UserButton/>
      </Show>
    </div>
  );
};

export default page;