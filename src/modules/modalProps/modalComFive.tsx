import { classNames } from "@/modules/common.modules";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import uberIMG from "../../../public/img/uber.png";

const ModalComFive = (props: any) => {
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
        <p className="text-lg font-bold">Uber Eats(Clone Coding)</p>

        <div className="w-full flex mt-1 flex-col md:flex-row">
          <div className="min-w-[400px] flex justify-center">
            <Image src={uberIMG} alt="uber" width={400} />
          </div>
          <div className="flex flex-col text-sm ml-0 md:ml-2 font-sans">
            <p className="font-bold">
              프론트엔드, 백엔드, DB 구축, 배포를 클론코딩 하며 풀스택 기술을
              습득한 개인 프로젝트입니다.
            </p>
            <p className="mt-1">
              풀스택 개발 프로젝트를 통해 프론트엔드, 백엔드, 데이터베이스의
              구축 및 배포 등에 대한 실전 경험을 쌓았습니다. 이 프로젝트를
              클론코딩하는 과정에서 다양한 기술과 도구를 활용하여 사용자
              인터페이스 디자인과 프론트엔드 개발로 시작하여, 백엔드 로직과
              데이터베이스 모델링, API 구축까지의 전 과정을 체계적으로 경험하며
              전반적인 풀스택 개발 역량을 향상시켰습니다.
            </p>
            <p className="mt-1">
              또한, 최종적으로 프로젝트를 배포해봄으로써 실제 사용자에게
              서비스를 제공하는 과정을 경험하며 실무에 바로 활용할 수 있는
              기술적인 습득을 이루었습니다.
            </p>
            <div className="w-full flex items-center mt-2">
              <div className="min-w-[120px] text-lg font-semibold">
                주요기능
              </div>
              <div className="text-sm">
                회원가입, 이메일 인증, 음식점 추가, aws 파일 업로드, 리얼타임
                주문 결제 확인 기능, 실시간 구글맵 연동
              </div>
            </div>
            <div className="w-full flex items-center mt-2">
              <div className="min-w-[120px] text-lg font-semibold">
                FrontEnd
              </div>
              <div className="text-sm">
                React.js, TypeScript, GraphQL, Apollo, Tailwind CSS
              </div>
            </div>
            <div className="w-full flex items-center mt-2">
              <div className="min-w-[120px] text-lg font-semibold">BackEnd</div>
              <div className="text-sm">
                NestJS, Typescript, TypeORM, GraphQL
              </div>
            </div>
            <div className="w-full flex items-center mt-2">
              <div className="min-w-[120px] text-lg font-semibold">
                Deployment
              </div>
              <div className="text-sm">
                Render(Backend, DB),Netlify(Frontend)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComFive;
