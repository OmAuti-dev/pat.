


import { Book, Headphones, Search } from 'lucide-react'

import { Input } from '@/components/ui/input'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'




const InfoBar = () => {
 

  

  // Get the user's role from publicMetadata
 

  return (
    <div className="flex flex-row justify-between items-center px-4 py-4 w-full dark:bg-black ">
      {/* Display the user's name and role on the leftmost side */}
      <span className="flex items-center gap-2 font-bold">
        <p className="text-sm font-light text-gray-300">
          Hi,! Your role is 
        </p>
      </span>

      <div className="flex flex-row gap-6 items-center">
        <span className="flex items-center gap-2 font-bold">
          <p className="text-sm font-light text-gray-300">Credits</p>
          
          
        </span>
        <span className="flex items-center rounded-full bg-muted px-4">
          <Search />
          <Input
            placeholder="Quick Search"
            className="border-none bg-transparent"
          />
        </span>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Headphones />
            </TooltipTrigger>
            <TooltipContent>
              <p>Contact Support</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Book />
            </TooltipTrigger>
            <TooltipContent>
              <p>Guide</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
      </div>
    </div>
  )
}

export default InfoBar