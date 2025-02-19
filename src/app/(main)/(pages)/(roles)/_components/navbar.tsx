import { Card } from "@/components/ui/card";
import CreateTaskButton from "@/app/(main)/(pages)/(roles)/manager/_components/create-taskbutton";


const Navbar = () => {
  return (
    <Card className=" fixed inset-x-0 top-0 z-40 backdrop-blur-md bg-card/50   py-4   gap-6   ">
      <div className="flex justify-center items center">

      
      <div className="flex row justify-between items-center   ">
        <div>
      <ul className=" md:flex flex-row  gap-10 text-card-foreground  ">
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
        <li>
          
        </li>
      </ul>
      </div>
      <div className="flex items-center">
        
        <CreateTaskButton />
        
      </div>
      </div>
      </div>
    </Card>
  );
};


export default Navbar;