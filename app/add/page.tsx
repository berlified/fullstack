import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
        <Show when="signed-in">
        <UserButton/> 
      </Show>

    </div>
  )
}

export default page