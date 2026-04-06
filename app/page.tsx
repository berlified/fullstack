import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

const page = () => {
  return (
    <div>
      <ModeToggle />
      <Show when="signed-out">
        <SignInButton mode="modal">
          <Button variant="default" size="default">
            Sign In 
          </Button>
        </SignInButton>
      </Show>

      <Show when="signed-in">
        <UserButton/>
      </Show>
    </div>
  );
};

export default page;