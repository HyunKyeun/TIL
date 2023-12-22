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
  // 스크롤
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
        <section className="w-full"></section>
      </main>
    </>
  );
};

export default MainPage;
