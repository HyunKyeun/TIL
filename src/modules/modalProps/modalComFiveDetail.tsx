import { classNames } from "@/modules/common.modules";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import uberIMG from "../../../public/img/uber.png";

const ModalComFiveDetail = (props: any) => {
  /*********************************************************************
   * 1. Init Libs
   *********************************************************************/
  const router: NextRouter = useRouter();
  /*********************************************************************
   * 2. State settings
   *********************************************************************/
  console.log(props);
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
      <div className="w-full flex items-center mt-2 border-b-[1px] border-gray-200">
        <div className="min-w-[120px] text-lg font-semibold">프로젝트 기간</div>
        <div className="text-sm">2024/01/04 ~ 2023/02/13</div>
      </div>
      <div className="w-full flex items-center mt-2 border-b-[1px] border-gray-200">
        <div className="min-w-[120px] text-lg font-semibold">직무 및 역할</div>
        <div className="text-sm">풀스택 경험</div>
      </div>
      <div className="w-full flex items-center mt-2 border-b-[1px] border-gray-200">
        <div className="min-w-[120px] text-lg font-semibold ">성과</div>
        <div>
          <div className="text-lg font-semibold mb-1">Backend</div>
          <div className="text-base font-semibold text-gray-600">
            Authorization 및 Guard:
          </div>
          <div className="text-sm mb-2">
            인증과 권한 부여를 위해 Guard를 구현하고, 다양한 권한 수준을 가진
            사용자를 처리하는데 성공적으로 활용함으로써 보안 강화
          </div>
          <div className="text-base font-semibold text-gray-600">
            Module 및 Common Module:
          </div>
          <div className="text-sm mb-2">
            모듈화를 통해 코드를 조직하고 관리함으로써 확장성과 유지보수성을
            향상
          </div>
          <div className="text-base font-semibold text-gray-600">
            TypeORM 및 Schema
          </div>
          <div className="text-sm mb-2">
            TypeORM을 통해 데이터베이스와의 효과적인 상호작용을 구현하고,
            GraphQL Schema를 정의하여 API의 명확한 구조 제작
          </div>
          <div className="text-base font-semibold text-gray-600">
            DTOs와 PartialType
          </div>
          <div className="text-sm mb-2">
            데이터 전송 객체(DTOs)를 사용하여 입력 및 출력 데이터의 형식을
            관리하고, PartialType을 통해 유연한 데이터 처리
          </div>
          <div className="text-base font-semibold text-gray-600">
            Subscription
          </div>
          <div className="text-sm mb-2">
            Subscription을 통해 실시간 업데이트를 구현
          </div>
          <div className="text-base font-semibold text-gray-600">
            이메일 발송 및 File Upload
          </div>
          <div className="text-sm mb-2">
            인증 이메일 발송 및 AWS S3 파일 업로드 기능을 구현
          </div>
          <div className="text-lg font-semibold mb-1">Frontend</div>
          <div className="text-base font-semibold text-gray-600">
            유저 등급에 따른 다양한 대시보드 구현
          </div>
          <div className="text-sm mb-2">
            유저 등급에 따라 다르게 표시되는 대시보드를 구현하여, 사용자마다
            다른 정보 및 기능을 제공
          </div>
          <div className="text-base font-semibold text-gray-600">구글 맵</div>
          <div className="text-sm mb-2">
            구글 맵을 프로젝트에 사용하여, 지리적 데이터를 시각적으로 표현하여
            사용자에게 제공
          </div>
          <div className="text-base font-semibold text-gray-600">
            이메일 인증 기능 추가
          </div>
          <div className="text-sm mb-2">
            이메일 인증 기능을 도입하여 사용자의 신원을 보호하고, 보안을
            강화함으로써 안전한 서비스 제공
          </div>
          <div className="text-base font-semibold text-gray-600">
            Subscription을 활용한 실시간 팝업 구현
          </div>
          <div className="text-sm mb-2">
            GraphQL Subscription을 사용하여 실시간으로 발생하는 이벤트를
            사용자에게 알리는 팝업 기능을 도입하여 더 동적이고 실용적인 서비스를
            제공
          </div>
        </div>
      </div>
      <div className="w-full flex items-center mt-2 border-b-[1px] border-gray-200">
        <div className="min-w-[120px] text-base font-semibold">
          문제 해결 경험
        </div>
        <div className="text-sm">
          <div>
            <div className="text-lg font-semibold mb-1">문제 해결 과정</div>
            <div className="text-base font-semibold text-gray-600">
              원인 파악 및 로컬 디버깅
            </div>
            <div className="text-sm mb-2">
              먼저, 문제의 원인을 찾기 위해 로컬 환경에서 디버깅을
              수행하였습니다. 로컬에서는 문제가 발생하지 않았기 때문에, 배포된
              환경과의 차이점을 파악하려 했습니다.
            </div>
            <div className="text-base font-semibold text-gray-600">
              환경 변수 및 설정 검토
            </div>
            <div className="text-sm mb-2">
              배포 환경의 데이터베이스 연결 설정 및 관련 환경 변수를
              검토하였습니다. 대소문자 구분 관련 설정이 올바르게 이루어져 있는지
              확인하였습니다.
            </div>
            <div className="text-base font-semibold text-gray-600">
              문제 해결 방안 시도
            </div>
            <div className="text-sm mb-2">
              대소문자 인식이 정상적으로 이루어지지 않는 문제를 해결하기 위해
              다양한 방안을 시도하였습니다. 인덱스 설정 변경, 검색 쿼리 수정
              등을 통해 문제를 해결하려 노력하였습니다.
            </div>
            <div className="text-base font-semibold text-gray-600">
              아직 해결되지 않은 상태
            </div>
            <div className="text-sm mb-2">
              현재까지 완전한 해결책을 찾지 못하였습니다. 그러나 문제를 극복하기
              위해 계속해서 다양한 시도를 하고 있습니다. Deploy 측 DB 버전을
              확인하고 백엔드를 맞추거나 로컬의 DB를 연결하는 방법 등을 고려하고
              있습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComFiveDetail;
