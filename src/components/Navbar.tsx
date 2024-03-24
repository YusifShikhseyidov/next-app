import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Icons } from "./Icons"

const Navbar = () => {
  return (
    <div className="sticky z-50 inset-x-0 top-0 h-16 bg-white">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-50">
            <div className="flex h-16 items-center">
              {}
              <div className="flex ml-4 lg:ml-0">
                <Link href="#">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}
export default Navbar