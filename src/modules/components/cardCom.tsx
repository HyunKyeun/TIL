import { classNames } from "@/modules/common.modules";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { Fragment, useEffect } from "react";

const CardCom = (props: any) => {
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
    <div className="w-[240px] h-[60px] m-2 flex items-center shadow-sm ">
      <div className=" w-[60px] h-[60px] flex items-center justify-center">
        {props.icon}
      </div>
      <div className="h-[60px]">
        <p className="font-bold text-lg font-sans text-gray-900">
          {props.name}
        </p>
        <p
          className={classNames(
            props.size ? props.size : "",
            "text-base font-normal font-sans text-gray-700"
          )}
        >
          {props.detail}
        </p>
      </div>
    </div>
  );
};

export default CardCom;
