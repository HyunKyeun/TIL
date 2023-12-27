import { classNames } from "@/modules/common.modules";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import nextIMG from "../../../public/img/nextjs.png";
import nestIMG from "../../../public/img/nestjs.png";
import typeIMG from "../../../public/img/typescript.png";
import styledIMG from "../../../public/img/styled.png";
import tailIMG from "../../../public/img/tailwind.png";
import restIMG from "../../../public/img/rest.png";
import usestateIMG from "../../../public/img/usestate.webp";
import recoilIMG from "../../../public/img/recoil.png";
import gitIMG from "../../../public/img/github.png";
const ModalComOne = (props: any) => {
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
        <p className="text-lg font-bold"> &#183; 프론트엔드</p>
        <div className="w-full flex mt-1">
          <div className="min-w-[160px] max-h-[90px] flex justify-center">
            <Image src={nextIMG} alt="next.js" width={120} />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Next.js</p>
            <p className="text-sm">
              React 기반의 프레임워크로 최적화된 웹 애플리케이션
            </p>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold"> &#183; 백엔드</p>
        <div className="w-full flex mt-1">
          <div className="min-w-[160px] max-h-[80px] flex justify-center">
            <Image src={nestIMG} alt="nest.js" width={160} />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Nest.js</p>
            <p className="text-sm">
              TypeScript를 기반으로 모듈화된 서버 사이드 애플리케이션
            </p>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold"> &#183; 프로그래밍 언어</p>
        <div className="w-full flex mt-1">
          <div className="min-w-[160px] max-h-[88px] flex justify-center">
            <Image src={typeIMG} alt="type" width={80} />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">TypeScript</p>
            <p className="text-sm">
              클라이언트, 서버 개발에 TypeScript를 이용하여 타입 안정성 및 개발
              생산성 향상
            </p>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold"> &#183; 스타일 관리</p>
        <div className="w-full flex mt-1">
          <div className="min-w-[160px] max-h-[80px] flex justify-center">
            <Image src={styledIMG} alt="styled" width={80} />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Styled Component</p>
            <p className="text-sm">동적인 컴포넌트 스타일링에 활용</p>
          </div>
        </div>
        <div className="w-full flex mt-1">
          <div className="min-w-[160px] max-h-[68px] flex justify-center">
            <Image src={tailIMG} alt="tail" width={120} />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">TailWind CSS</p>
            <p className="text-sm">
              클래스 기반의 빠른 스타일로 레이아웃, 디자인 개발에 활용
            </p>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold"> &#183;API 및 통신 프로토콜</p>
        <div className="w-full flex mt-1">
          <div className="min-w-[160px] max-h-[80px] flex justify-center">
            <Image src={restIMG} alt="rest" width={80} />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">RESTful API</p>
            <p className="text-sm">클라이언트와 서버 간의 효율적인 통신 구현</p>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold"> &#183;상태 관리 라이브러리</p>
        <div className="w-full flex mt-1">
          <div className="min-w-[160px] max-h-[88px] flex justify-center">
            <Image src={usestateIMG} alt="usestate" width={80} />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">UseState</p>
            <p className="text-sm">
              각 컴포넌트 내에서의 간단한 상태 관리에 사용
            </p>
          </div>
        </div>
        <div className="w-full flex mt-1">
          <div className="min-w-[160px] max-h-[76px] flex justify-center">
            <Image src={recoilIMG} alt="recoil" width={120} />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Recoil</p>
            <p className="text-sm">
              최상단 페이지 선에서 복잡한 상태 관리에 활용
            </p>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold"> &#183;버전 관리 시스템</p>
        <div className="w-full flex mt-1">
          <div className="min-w-[160px] max-h-[80px] flex justify-center">
            <Image src={gitIMG} alt="git" width={160} />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">Git hub</p>
            <p className="text-sm">코드의 버전 관리와 협업</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComOne;
