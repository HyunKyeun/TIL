import { classNames } from "@/modules/common.modules";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import portFolioIMG from "../../../public/img/portfolio.png";

const ModalComFour = (props: any) => {
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
    <div className="mt-2 w-full flex flex-col">
      <div className="mt-2">
        <p className="text-lg font-bold">PortFolio</p>
        <div className="min-w-[400px] flex justify-center">
          <Image src={portFolioIMG} alt="portFolio" width={400} />
        </div>
        <div className="w-full flex mt-1">
          <div className="flex flex-col text-sm">
            <p>현재 보고 있는 페이지입니다.</p>
            <p>
              기존 Next.js를 이용하여 저에 대해 소개하는 페이지를 만들었습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComFour;
