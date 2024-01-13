import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub} from "react-icons/ai"

const Footer = () => {
  return (
    <div className="bg-[#d4ebeb]">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={require("../../../public/assets/logo.jpg")}
              alt="Ammara Gul"
              height={30}
              width={30}
              className="w[30px]"
            />
            <span className="ml-3 text-xl">Ammara Gul</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Ammara Gul
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link  
            // target="_blank"
            href="#" className="ml-3 text-gray-500 text-3xl">
              < AiFillGithub className="hover:text-[#010409]" />
            </Link>
          
            <Link  
            // target="_blank"
            href="#" className="ml-3 text-gray-500 text-3xl">
              <BsLinkedin className="hover:text-[#0e76a8]" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
