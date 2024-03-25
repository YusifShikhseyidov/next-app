import { PRODUCT_CATEGORIES } from "@/config/navlinks";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({ isOpen, isAnyOpen, category, handleOpen }: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}{" "}
          <ChevronDown className={cn("w-4 h-4 transition-all text-muted-foreground", {'-rotate-180' : isOpen})} />
        </Button>
      </div>

      {isOpen ? (<div className={cn("absolute inset-x-0 top-full text-sm text-muted-foreground", 
        {
          'animate-in fade-in-10 slide-in-from-top-5' : !isAnyOpen,
        }
      )}
      >
        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden='true'/>
        <div className="relative bg-white">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-3 gap-x-8 gap-y-10 py-16">
              <div className="col-span-3 col-start-1 grid grid-cols-3 gap-x-8">
                {category.featured.map(item=>(
                  <Link href={item.href} className="group relative text-base sm:text-sm" key={item.name}>
                    <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <Image src={item.imageSrc} alt='product category image' fill className="object-cover object-center" sizes="sm:object-cover sm:object-center md:object-cover md:object-center lg:object-cover lg:object-center" />
                    </div>
                    <span className="mt-6 block font-medium text-gray-900">{item.name}</span>
                    <p className="mt-1" aria-hidden='true'>Shop Now</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>) : null}
    </div>
  );
};
export default NavItem;
