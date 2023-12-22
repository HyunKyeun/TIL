import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { classNames } from "@/modules/common.modules";

const MainPage: NextPage<any> = (props) => {
  /*********************************************************************
   * 1. Init Libs
   *********************************************************************/
  const router: NextRouter = useRouter();
  /*********************************************************************
   * 2. State settings
   *********************************************************************/

  const [scroll, setScroll] = useState(false);
  /*********************************************************************
   * 3. Handlers
   *********************************************************************/
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  /*********************************************************************
   * 4. Props settings
   *********************************************************************/
  /*********************************************************************
   * 5. Page configuration
   *********************************************************************/
  return (
    <>
      <div
        className={classNames(
          scroll ? "bg-black" : "",
          "page__header transition-all border-b"
        )}
      >
        <nav className="page__header--inner">
          <div className={classNames(scroll ? "text-white" : "text-black")}>
            NHK&apos;s Portfolio
          </div>

          <div className="flex">
            <div
              className={classNames(
                scroll ? "text-gray-300" : "text-gray-600",
                "px-2 cursor-pointer"
              )}
            >
              About me
            </div>
            <div
              className={classNames(
                scroll ? "text-white" : "text-black",
                "px-2 cursor-pointer hover:text-gray-600"
              )}
              onClick={() => {
                router.push("/blogs");
              }}
            >
              Blogs
            </div>
          </div>
        </nav>
      </div>
      <main className="page__content">
        <section className="w-full">
          <div>
            <div className="flex text-[24px] py-2">It&#39;s me</div>
          </div>
          <div className="w-full py-2 border-t">
            <div className="flex flex-col justify-between py-1 md:flex-row">
              <div className="w-full p-2 bg-blue-50 md:w-1/2 font-semibold border-b md:border-b-0 border-gray-600">
                Who am I
              </div>
              <div className="w-full p-2  md:w-1/2">
                1년차 프론트엔드 개발자입니다.
              </div>
            </div>
            <div className="flex flex-col justify-between py-1 md:flex-row">
              <div className="w-full p-2 bg-blue-50 md:w-1/2 font-semibold border-b md:border-b-0 border-gray-600">
                Possible Framework
              </div>
              <div className="w-full p-2  md:w-1/2">Next.js, React</div>
            </div>
            <div className="flex flex-col justify-between py-1 md:flex-row">
              <div className="w-full p-2 bg-blue-50 md:w-1/2 font-semibold border-b md:border-b-0 border-gray-600">
                Possible Programing Language{" "}
              </div>
              <div className="w-full p-2  md:w-1/2">TypeScript, JavaScript</div>
            </div>
            <div className="flex flex-col justify-between py-1 md:flex-row">
              <div className="w-full p-2 bg-blue-50 md:w-1/2 font-semibold border-b md:border-b-0 border-gray-600">
                Project Management Tool
              </div>
              <div className="w-full p-2  md:w-1/2">Git</div>
            </div>
            <div className="flex flex-col justify-between py-1 md:flex-row">
              <div className="w-full p-2 bg-blue-50 md:w-1/2 font-semibold border-b md:border-b-0 border-gray-600">
                {" "}
                Document Management Tool
              </div>
              <div className="w-full p-2  md:w-1/2">Nextra</div>
            </div>
          </div>
          <div>
            <div className="flex text-[24px] py-2">What I did</div>
          </div>
          <div className="w-full py-2 border-t">
            <div className="flex flex-col justify-between py-1 md:flex-row">
              <div className="w-full p-2 bg-blue-50 md:w-1/2 font-semibold border-b md:border-b-0 border-gray-600">
                project Name
              </div>
              <div className="w-full p-2  md:w-1/2 break-keep">CarYak</div>
            </div>
            <div className="flex flex-col justify-between py-1 md:flex-row">
              <div className="w-full p-2 bg-blue-50 md:w-1/2 font-semibold border-b md:border-b-0 border-gray-600">
                기술 스택
              </div>
              <div className="w-full p-2  md:w-1/2 break-keep">
                Linux, Next.Js, Nest.Js, MongoDB
              </div>
            </div>
            <div className="flex flex-col justify-between py-1 md:flex-row">
              <div className="w-full p-2 bg-blue-50 md:w-1/2 font-semibold border-b md:border-b-0 border-gray-600">
                주요 업무
              </div>
              <div className="w-full p-2  md:w-1/2 break-keep">
                <div>&#183; 웹페이지 실행 순서 로직 정리</div>
                <div>&#183; 각 페이지에 사용할 컴포넌트 제작</div>
                <div>&#183; 기능 개발</div>
                <div>&#183; 디버깅 작업</div>
                <div>&#183; 관리자용 페이지 제작</div>
              </div>
            </div>
            <div className="flex flex-col justify-between py-1 md:flex-row">
              <div className="w-full p-2 bg-blue-50 md:w-1/2 font-semibold border-b md:border-b-0 border-gray-600">
                기능 구현
              </div>
              <div className="w-full p-2  md:w-1/2 break-keep">
                <div
                  className="flex cursor-pointer"
                  onClick={() => {
                    router.push("/Project/NextJs/p1");
                  }}
                >
                  &#183; Naver geocoding api를 이용한 현재 위치의 좌표 및 주소
                  찾기 기능 &#10148;
                </div>
                <div
                  className="flex cursor-pointer"
                  onClick={() => {
                    router.push("/BackUp/backUp");
                  }}
                >
                  &#183; Kakao, Naver Social Login &#10148;
                </div>
                <div
                  className="flex cursor-pointer"
                  onClick={() => {
                    router.push("/Project/NextJs/p2");
                  }}
                >
                  &#183; Web to App DeepLink &#10148;
                </div>
                <div
                  className="flex cursor-pointer"
                  onClick={() => {
                    router.push("/Project/NextJs/p3");
                  }}
                >
                  &#183; CSV DownLoad &#10148;
                </div>
              </div>
            </div>
          </div>
          <div className="w-full py-2 border-t">
            <div className="flex flex-col justify-between py-1 md:flex-row">
              <div className="w-full p-2 bg-blue-50 md:w-1/2 font-semibold border-b md:border-b-0 border-gray-600">
                project Name
              </div>
              <div className="w-full p-2  md:w-1/2 break-keep">Cargle</div>
            </div>
            <div className="flex flex-col justify-between py-1 md:flex-row">
              <div className="w-full p-2 bg-blue-50 md:w-1/2 font-semibold border-b md:border-b-0 border-gray-600">
                기술 스택
              </div>
              <div className="w-full p-2  md:w-1/2 break-keep">
                Linux, Next.Js, Nest.Js, MongoDB
              </div>
            </div>
            <div className="flex flex-col justify-between py-1 md:flex-row">
              <div className="w-full p-2 bg-blue-50 md:w-1/2 font-semibold border-b md:border-b-0 border-gray-600">
                주요 업무
              </div>
              <div className="w-full p-2  md:w-1/2 break-keep">
                <div>&#183; 서비스 유지 보수 및 개선</div>

                <div>
                  &#183; 중복으로 불러오는 api를 최적화 하여 서버가 부담할
                  리스크 감소
                </div>
                <div>&#183; api 호출 시 반환에 걸린 응답 시간 감소</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainPage;
