import { NextPage } from "next";
import styles from "../styles/main.module.css";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";

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
      <div className={styles.wrap}>
        <div className={scroll ? styles.header_white : styles.header}>
          <div className={styles.header_target_indiv}>NHK&apos;s Portfolio</div>
          <div className={styles.header_target}>
            <div className={styles.header_target_indiv}>About me</div>
            <div
              className={styles.header_target_indiv}
              onClick={() => {
                router.push("/blogs");
              }}
            >
              Blogs
            </div>
            <div className={styles.header_target_indiv}>Archive</div>
          </div>
        </div>
        <main className={styles.content}>
          <div className={styles.block}>
            <div>
              <div>About Me</div>
              <div>준비중입니다 기다려주세용</div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainPage;
