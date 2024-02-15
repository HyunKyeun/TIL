import { classNames } from "@/modules/common.modules";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import uberIMG from "../../../public/img/uber.png";

const ModalComThreeDetail = (props: any) => {
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
        <div className="text-sm">2021/12/27 ~ 2023/08/01</div>
      </div>
      <div className="w-full flex items-center mt-2 border-b-[1px] border-gray-200">
        <div className="min-w-[120px] text-lg font-semibold">직무 및 역할</div>
        <div>
          <div className="text-lg font-semibold mb-1">프론트 엔드 개발자</div>
          <div className="text-base font-semibold text-gray-600">
            웹 애플리케이션 개발
          </div>
          <div className="text-sm mb-2">
            react 기반의 프레임 워크인 next.js를 활용하여 성능이 최적화 된 웹
            애플리케이션을 개발
          </div>

          <div className="text-base font-semibold text-gray-600">
            서버 사이드 렌더링 및 정적 사이트 구현
          </div>
          <div className="text-sm mb-2">
            SSR,SSG를 이용하여 해당 웹 애플리케이션에 특정 페이지를 미리
            빌드하여 초기 로딩 속도 개선
          </div>

          <div className="text-base font-semibold text-gray-600">
            컴포넌트 개발
          </div>
          <div className="text-sm mb-2">
            사용자의 인터페이스를 위한 재사용 가능한 컴포넌트를 개발하여
            재활용성을 극대화
          </div>
          <div className="text-base font-semibold text-gray-600">
            디자이너, 백엔드 개발자와의 커뮤니케이션
          </div>
          <div className="text-sm mb-2">
            디자이너와의 의사소통을 유지하며 반응형 웹 페이지 디자인, git을
            이용한 백엔드 개발자와의 협업을 통해 일정 진행
          </div>
          <div className="text-base font-semibold text-gray-600">
            웹 애플리케이션의 기본 보안 및 취약점 예방
          </div>
          <div className="text-sm mb-2">
            입력 유효성 검사를 통해 크로스사이트 요청 위조, 스크립팅등의 공격
            방지 인증 및 권한 관리를 부여하여 비 인가된 사용자의 특정 페이지
            추측 및 사용 방지
          </div>
          <div className="text-base font-semibold text-gray-600">
            테스트 및 디버깅
          </div>
          <div className="text-sm mb-2">
            각 컴포넌트, 기능 단위로 테스트를 수행하여 코드의 기능을 확인
            브라우저 개발자 도구, 개발 환경의 디버깅 도구를 통해 버그 수정
            운영중인 웹 애플리케이션을 지속적으로 모니터링 및 문제 식별
          </div>
        </div>
      </div>
      <div className="w-full flex items-center mt-2 border-b-[1px] border-gray-200">
        <div className="min-w-[120px] text-lg font-semibold">참여 및 성과</div>
        <div>
          <div className="text-base font-semibold text-gray-600">초기단계</div>
          <div className="text-sm mb-2">
            초기에는 디자이너와의 원활한 협업을 위해 와이어프레임을 제작 이
            과정에서 사용자 경험 및 디자인 요소에 대한 이해를 확립, 디자이너와의
            의사소통을 강화
          </div>

          <div className="text-base font-semibold text-gray-600">
            개발 단계 - 프론트엔드 담당
          </div>
          <div className="text-sm">프로젝트의 주요 책임은 프론트 엔드 개발</div>
          <div className="text-sm mb-2">
            Next.js를 이용하여 웹 애플리케이션을 구현 사용자 경험 향상을 위해
            레이아웃 및 컴포넌트 개발에 주력
          </div>

          <div className="text-base font-semibold text-gray-600">
            완료 단계 - 테스트 및 디버깅
          </div>
          <div className="text-sm">
            완료 단계에서는 테스트 및 디버깅에 집중, 웹 애플리케이션의 안정성을
            보장하기 위해
          </div>
          <div className="text-sm mb-2">
            각 부분을 철저히 테스트하고, 디버깅을 통해 발생한 이슈를 신속히 해결
          </div>
        </div>
      </div>
      <div className="w-full flex items-center mt-2 border-b-[1px] border-gray-200">
        <div className="min-w-[120px] text-base font-semibold">
          문제 해결 경험
        </div>
        <div>
          <div className="text-lg font-semibold mb-1">브라우저간 호환성</div>
          <div className="text-base font-semibold text-gray-600">
            일관되지 않은 스크롤바
          </div>
          <div className="text-sm mb-2">
            프로젝트 진행중 브라우저간 호환성 문제로 스크롤바의 모양이 일관되지
            않아 사용자 경험에 영향을 미쳤습니다. 특히 안드로이드의 chrome
            웹페이지와 애플의 chrome 웹페이지의 기본 스크롤바의 디자인이 예상과
            다르게 크게 차이 나는 상황이 발생했습니다.
          </div>

          <div className="text-base font-semibold text-gray-600">해결방법</div>
          <div className="text-sm mb-2">
            이 문제를 해결하기 위해 커스텀 스크롤바를 구현하였습니다.
            webpack으로 기존 스크롤바를 숨김 처리를 하였고, 사용자에게
            스크롤바의 존재 및 활용 가능하다고 알리기위해 커스텀 스크롤바를
            CSS,javascript를 통해 디자인하였습니다. 이로써 브라우저간의 호환성
            문제를 극복하고, 일관된 인터페이스를 제공할 수 있었습니다.
          </div>

          <div className="text-base font-semibold text-gray-600">
            Cross-Browser 및 DeepLink
          </div>
          <div className="text-sm mb-2">
            프로젝트에서 각 브라우저 및 모바일 환경에서 사용자가 이미 설치된
            지도 앱, 또는 App Store에 이동 되는 간단한 DeepLink 기능을 제공
            하였습니다. 그러나 특정 브라우저, 모바일 환경에서 이 DeepLink 기능이
            올바르게 작동 하지 않거나, 이후 추가 동작에 어색함이 발견
            되었습니다. 결과적으로 사용자들이 의도한 페이지로 원할하게 이동하지
            못하는 문제가 발생했습니다.
          </div>
          <div className="text-base font-semibold text-gray-600">해결방법</div>
          <div className="text-sm mb-2">
            이 문제를 해결하기 위해 각각의 모바일 환경, 브라우저에 대해 독립적인
            로직을 가진 DeepLink를 설정하였습니다. 각 브라우저 및 모바일
            플랫폼의 특수한 동작 방식을 고려하여 DeepLink 기능을 개선하였습니다.
            비록 완벽한 일관성은 달성하지 못햇지만, 사용자들이 모어떤 환경에서도
            DeepLink 기능을 사용하여 의도한 결과를 얻을 수 있었습니다.
          </div>
        </div>
      </div>
      <div className="w-full flex items-center mt-2 border-b-[1px] border-gray-200">
        <div className="min-w-[120px] text-base font-semibold">협업</div>
        <div>
          <div className="text-lg font-semibold mb-1">
            팀원들과의 협업 방식 및 내 소통에 대한 경험
          </div>
          <div className="text-base font-semibold text-gray-600">
            우선도를 두어 작업
          </div>
          <div className="text-sm mb-2">
            팀원과의 협업이 필요한 작업을 진행할 때, 작업에 우선순위를 부여하여
            효율적으로 협업하였습니다. 이를 통해 작업의 중요도와 긴급성을
            고려하였고, 이를 통해 프로젝트의 일정을 지키고 목표를 달성하는데
            기여하였습니다.
          </div>

          <div className="text-base font-semibold text-gray-600">
            Clean Coding
          </div>
          <div className="text-sm mb-2">
            프로젝트에서 나만이 아닌 팀원들도 코드를 이해하고 유지보수
            가능하도록 간결한 코드를 작성하는데 주의를 기울였습니다. 코드의 양이
            늘어나더라도 코드의 가독성을 높이는데 집중 하였으며, 불가피한
            경우에는 주석을 활용하여 작업 내용을 설명하였습니다.
          </div>

          <div className="text-base font-semibold text-gray-600">
            일지 작성 및 공유
          </div>
          <div className="text-sm mb-2">
            작업 내용 및 수정 사항을 간결한 일지 형태로 작성하여 팀원들과
            공유하였습니다. 이를 통해 팀원들과 프로젝트의 진행 상황을 시각적으로
            공유할 수 있었고, 다음 일정을 수월하게 결정 할 수 있었습니다.
          </div>
          <div className="text-base font-semibold text-gray-600">
            Code Review
          </div>
          <div className="text-sm mb-2">
            격주로 팀원들과의 코드리뷰를 주도하여 코드의 통일성을 유지
            하였습니다. 또한 서로의 코드를 보완하는 작업을 진행하였습니다. 이를
            통해 팀 내의 의견을 나누며 효과적인 코드를 작성 할수 있었고, 팀원들
            간의 협업을 강화하는데 기여하였습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComThreeDetail;
