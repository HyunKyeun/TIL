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
          scroll ? "bg-white border-b" : "",
          "page__header transition-all"
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
        <div>
          <div>
            <div>About Me</div>
            <div>준비중입니다 기다려주세용</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
