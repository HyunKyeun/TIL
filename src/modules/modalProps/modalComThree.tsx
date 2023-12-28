import { classNames } from "@/modules/common.modules";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import carYakIMG from "../../../public/img/caryak.png";
const ModalComThree = (props: any) => {
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
            <Image src={carYakIMG} alt="carYak" width={400} />
          </div>
          <div className="flex flex-col text-sm ml-0 md:ml-2 font-sans">
            <p className="">
              <span className="font-bold">
                자동차 소유주들이 2년에 한 번씩 필요한 자동차 정기점검을 쉽게
                예약하고, 1급 정비사와의 연결을 통해 편리한 정비 서비스를 이용할
                수 있는 웹사이트
              </span>
              입니다.
            </p>
            <p className="mt-1">
              기획 단계부터 와이어 프레임 제작으로 참여하여 프론트엔드 작업,
              지속적인 모니터링 및 문제식별까지 웹 개발을 진행하면서 다양한
              경험을 쌓을 수 있었습니다.
            </p>
            <p className="mt-1">
              Next.js를 이용한 코드 작성 뿐만 아니라, 프로젝트 전반에서
              <span className="text-blue-800 font-bold">
                백엔드 개발자와의 협업
              </span>
              을 경험했습니다. 프론트엔드 컴포넌트간의 상호작용 뿐만 아니라
              백엔드와의 서버 통신에 대한 복합적인 고려도 학습할 수 있었습니다.
            </p>
            <p className="mt-1">
              또한 복수 페이지인 웹사이트를 만들면서
              <span className="text-blue-800 font-bold">라우팅,SSR,CSR</span>에
              대한 개념을 숙지할 수 있었으며,컴포넌트를 만들어 이용할 수 있는
              코드 간소화를 할 수 있었습니다.
            </p>
            <div className="w-full flex items-center mt-2">
              <div className="min-w-[120px] text-lg font-semibold">
                주요기능
              </div>
              <div className="text-sm">
                소셜 로그인, 개인정보 수정, 주변 정비소 위치 검색, 정비소 예약
                기능, 예약 알림 문자, 정비소 측 예약 현황 검색, 정산, Admin기능
              </div>
            </div>
            <div className="w-full flex items-center mt-2">
              <div className="min-w-[120px] text-lg font-semibold">
                FrontEnd
              </div>
              <div className="text-sm">Next.js, TypeScript, Tailwind CSS</div>
            </div>
            <div className="w-full flex items-center mt-2">
              <div className="min-w-[120px] text-lg font-semibold">BackEnd</div>
              <div className="text-sm">Nest.js, TypeScript</div>
            </div>
            <div className="w-full flex items-center mt-2">
              <div className="min-w-[120px] text-lg font-semibold">
                Deployment
              </div>
              <div className="text-sm">AWS, Docker, Kubernetes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComThree;
