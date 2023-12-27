import { classNames } from "@/modules/common.modules";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SeeMoreCom = (props: any) => {
  /*********************************************************************
   * 1. Init Libs
   *********************************************************************/
  const router: NextRouter = useRouter();
  /*********************************************************************
   * 2. State settings
   *********************************************************************/

  /*********************************************************************
   * 3. Handlers
   *********************************************************************/
  /*********************************************************************
   * 4. Props settings
   *********************************************************************/
  /*********************************************************************
   * 5. Page configuration
   *********************************************************************/

  return (
    <div className="hover:border hover:border-gray-900 rounded-md h-[36px] flex justify-between items-center px-4 hover:cursor-pointer">
      <p className="text-base">See More</p>
      <FaAngleDoubleRight size={24} />
    </div>
  );
};

export default SeeMoreCom;
