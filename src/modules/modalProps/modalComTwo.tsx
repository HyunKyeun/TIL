import { classNames } from "@/modules/common.modules";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import gitIMG from "../../../public/img/github.png";
import gitMeIMG from "../../../public/img/gitMe.png";
import blogIMG from "../../../public/img/blog.png";
import nextraImg from "../../../public/img/nextra.webp";
const ModalComTwo = (props: any) => {
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
        <p className="text-lg font-bold">Github</p>
        <div className="min-w-[400px] flex justify-center">
          <Image src={gitMeIMG} alt="gitMe" width={400} />
        </div>
        <div className="w-full flex mt-1">
          <div className="min-w-[160px] max-h-[90px] flex justify-center">
            <Image src={gitIMG} alt="git" width={120} />
          </div>

          <div className="flex flex-col">
            <div
              className="hover:cursor-pointer text-blue-600 underline"
              onClick={() => {
                router.push("https://github.com/HyunKyeun");
              }}
            >
              https://github.com/HyunKyeun
            </div>
            <p className="text-sm">
              과거 프로젝트의 소스 코드, 코딩 연습을 위한 소스 코드
              저장소입니다.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold">Nextra</p>
        <div className="min-w-[400px] flex justify-center">
          <Image src={blogIMG} alt="blog" width={400} />
        </div>
        <div className="w-full flex mt-1">
          <div className="min-w-[160px] max-h-[90px] flex justify-center">
            <Image src={nextraImg} alt="nextra" width={120} />
          </div>

          <div className="flex flex-col">
            <div
              className="hover:cursor-pointer text-blue-600 underline"
              onClick={() => {
                router.push("/blogs");
              }}
            >
              바로가기
            </div>
            <p className="text-sm">
              공부 및 웹 관련 지식 정리 목적의 블로그 입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComTwo;
