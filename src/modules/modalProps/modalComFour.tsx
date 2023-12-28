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

        <div className="w-full flex mt-1 flex-col md:flex-row">
          <div className="min-w-[400px] flex justify-center">
            <Image src={portFolioIMG} alt="portFolio" width={400} />
          </div>
          <div className="flex flex-col text-sm ml-0 md:ml-2 font-sans">
            <p className="font-bold">
              포트폴리오 용도로 제작한 웹사이트입니다.
            </p>
            <p className="mt-1">
              Next.js를 이용하여 저에 대해 소개하는 페이지를 만들었습니다.
              여러명이서 협업하여 만들던 프로젝트와 달리, 혼자서 라우팅,페이지
              구성을 하면서 저번 프로젝트에서 부족했던 부분을 숙지 할 수
              있었습니다.
            </p>
            <p className="mt-1">
              Vercel를 통해 단순 동적인 웹페이지를 배포 할 수 있었습니다.
            </p>
            <div className="w-full flex items-center mt-2">
              <div className="min-w-[120px] text-lg font-semibold">
                주요기능
              </div>
              <div className="text-sm">
                간단한 자기소개, 인적사항, 기술 스택, 프로젝트 경험
              </div>
            </div>
            <div className="w-full flex items-center mt-2">
              <div className="min-w-[120px] text-lg font-semibold">
                FrontEnd
              </div>
              <div className="text-sm">Next.js, TypeScript, Tailwind CSS</div>
            </div>
            <div className="w-full flex items-center mt-2">
              <div className="min-w-[120px] text-lg font-semibold">
                Deployment
              </div>
              <div className="text-sm">Vercel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComFour;
