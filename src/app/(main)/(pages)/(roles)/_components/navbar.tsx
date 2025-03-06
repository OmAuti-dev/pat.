import { Card } from "@/components/ui/card";
import CreateTaskButton from "@/app/(main)/(pages)/(roles)/manager/_components/create-taskbutton";
import { SignOutButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <Card className=" fixed inset-x-0 top-0 z-40 backdrop-blur-md bg-card/50   py-4   gap-6   ">
      <div className="flex items center">
        <div className="flex w-full row justify-between items-center">
          <div className="flex-0.5 px-10" />
          <div className="flex-1 px-10">
            <ul className=" md:flex flex-row items-center justify-center  gap-10 text-card-foreground  ">
              <li className="text-primary font-medium">
                <a href="#home">Yout Work(dropdown)</a>
              </li>
              <li>
                <a href="#features">Teams</a>
              </li>
              <li>
                <a href="#pricing">Calendar</a>
              </li>
              <li>
                <a href="#faqs">Issues</a>
              </li>
              <li className="">
                <CreateTaskButton />
              </li>
            </ul>
          </div>
          <div className="flex-1/2 flex justify-end px-10">
            <SignOutButton />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Navbar;
