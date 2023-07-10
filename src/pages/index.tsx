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
          scroll ? "bg-yellow-500" : "",
          "page__header transition-all border-b"
        )}
      >
        <nav className="page__header--inner">
          <div>NHK&apos;s Portfolio</div>

          <div className="flex">
            <div className="px-2 text-gray-600 cursor-pointer">About me</div>
            <div
              className="px-2 cursor-pointer hover:text-gray-600"
              onClick={() => {
                router.push("/blogs");
              }}
            >
              Blogs
            </div>
            <div className="px-2 cursor-pointer hover:text-gray-600">
              Archive
            </div>
          </div>
        </nav>
      </div>
      <main className="page__content">
        <section className="w-full">
          <div>
            <div className="flex text-[32px] py-2">
              신중을 기하는 프론트엔드 개발자
            </div>
          </div>

          <div className="w-full py-2 border-t">
            <div className="flex flex-col justify-between py-1 md:flex-row">
              <div className="w-full p-2 bg-red-100 md:w-1/2">About Me</div>
              <div className="w-full p-2 bg-green-100 md:w-1/2">
                준비중입니다 기다려주세용
              </div>
            </div>
            <div className="flex flex-col justify-between py-1 md:flex-row">
              <div className="w-full p-2 bg-red-100 md:w-1/2">About Me</div>
              <div className="w-full p-2 bg-green-100 md:w-1/2">
                준비중입니다 기다려주세용
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainPage;
