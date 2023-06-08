import Link from "next/link";
import Image from "next/image";

interface windowSize{
    width : number;
}

const Navbar = ({width}: windowSize) => {
    console.log(width)
    return (
        <nav className="bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0">
                    <Link href="/" className="text-white">
                        <Image src={'/../public/images/gymandmore.png'} alt={"Logo"} width={100} height={100}/>
                    </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link href="/" className="text-red-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                    <Link href="/" className="text-blue-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                    <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
    
}

export default Navbar