import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { classNames } from "@/modules/common.modules";
import ModalCom from "@/modules/modalCom";
import { FaRegUser } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import nextIMG from "../../public/img/nextjs.png";
import typeIMG from "../../public/img/typescript.png";
import githubIMG from "../../public/img/github.png";
import blogIMG from "../../public/img/blog.png";
import caryakIMG from "../../public/img/caryak.png";
import portFolioIMG from "../../public/img/portfolio.png";
import uberIMG from "../../public/img/uber.png";
import CardCom from "@/modules/components/cardCom";
import ModalComOne from "@/modules/modalProps/modalComOne";
import ModalComTwo from "@/modules/modalProps/modalComTwo";
import SeeMoreCom from "@/modules/components/seeMoreCom";
import ModalComThree from "@/modules/modalProps/modalComThree";
import ModalComFour from "@/modules/modalProps/modalComFour";
import Image from "next/image";
import ModalComFive from "@/modules/modalProps/modalComFive";
const MainPage: NextPage<any> = (props) => {
  /*********************************************************************
   * 1. Init Libs
   *********************************************************************/
  const router: NextRouter = useRouter();
  /*********************************************************************
   * 2. State settings
   *********************************************************************/

  const [scroll, setScroll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>();

  let modalProps = {
    modalOpen: modalOpen,
    setModalOpen: setModalOpen,
    modalContent: modalContent,
  };
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
        <section className="w-full">
          <div className="w-full flex justify-center my-4 text-4xl font-bold">
            It&apos;s me
          </div>
          <div className=" mt-5 grid grid-flow-rows grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            <CardCom
              {...{
                icon: <FaRegUser size={30} />,
                name: "이름",
                detail: "나현균",
              }}
            />
            <CardCom
              {...{
                icon: <BsCalendar2Date size={30} />,
                name: "생년월일",
                detail: "94-02-19",
              }}
            />
            <CardCom
              {...{
                icon: <FaMapMarkerAlt size={30} />,
                name: "주소지",
                detail: "대전 유성구",
              }}
            />
            <CardCom
              {...{
                icon: <IoPhonePortraitOutline size={30} />,
                name: "연락처",
                detail: "010-9368-1143",
              }}
            />
            <CardCom
              {...{
                icon: <MdOutlineAlternateEmail size={30} />,
                name: "이메일",
                detail: "dango11371137@gmail.com",
                size: "text-xs",
              }}
            />{" "}
            <CardCom
              {...{
                icon: <FaSchool size={30} />,
                name: "학력",
                detail: "광운대학교(전자공학과)",
                size: "text-sm",
              }}
            />
          </div>
          <div className="bg-yellow-300 mt-6 grid grid-flow-rows grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            <div
              className="w-[240px] h-[140px] bg-white m-2 font-sans flex flex-col justify-between rounded-md"
              onClick={() => {
                setModalContent(ModalComOne);
                setModalOpen(true);
              }}
            >
              <div className="flex w-full font-extrabold text-lg justify-center px-2">
                I have these skills!
              </div>
              <div className="flex justify-around px-4">
                <Image src={nextIMG} alt="next.js" width={80} height={40} />
                <Image src={typeIMG} alt="type" width={60} height={40} />
              </div>
              <SeeMoreCom />
            </div>
            <div
              className="w-[240px] h-[200px] bg-white m-2 font-sans flex flex-col justify-between rounded-md"
              onClick={() => {
                setModalContent(ModalComTwo);
                setModalOpen(true);
              }}
            >
              <div className="flex w-full font-extrabold text-lg justify-center px-2">
                Archiving
              </div>
              <div className=" flex justify-around px-4">
                <div>
                  <Image src={githubIMG} alt="github" width={80} height={40} />
                </div>
                <div>
                  <Image src={blogIMG} alt="blog" width={120} height={40} />
                </div>
              </div>
              <SeeMoreCom />
            </div>
            <div
              className="w-[240px] h-[260px] bg-white m-2 font-sans flex flex-col justify-between rounded-md"
              onClick={() => {
                setModalContent(ModalComThree);
                setModalOpen(true);
              }}
            >
              <div className="flex w-full font-extrabold text-lg justify-center px-2">
                What I did - (1)
              </div>
              <div className="flex justify-center px-4">
                <Image src={caryakIMG} alt="caryak" width={120} height={40} />
              </div>
              <SeeMoreCom />
            </div>
            <div
              className="w-[240px] h-[220px] bg-white m-2 font-sans flex flex-col justify-between rounded-md"
              onClick={() => {
                setModalContent(ModalComFour);
                setModalOpen(true);
              }}
            >
              <div className="flex w-full font-extrabold text-lg justify-center px-2">
                What I did - (2)
              </div>
              <div className="flex justify-center px-4">
                <Image
                  src={portFolioIMG}
                  alt="portfolio"
                  width={120}
                  height={40}
                />
              </div>
              <SeeMoreCom />
            </div>
            <div
              className="w-[240px] h-[220px] bg-white m-2 font-sans flex flex-col justify-between rounded-md"
              onClick={() => {
                setModalContent(ModalComFive);
                setModalOpen(true);
              }}
            >
              <div className="flex w-full font-extrabold text-lg justify-center px-2">
                What I did - (3)
              </div>
              <div className="flex justify-center px-4">
                <Image src={uberIMG} alt="uber" width={120} height={40} />
              </div>
              <SeeMoreCom />
            </div>
          </div>
        </section>
      </main>
      <ModalCom {...modalProps} />
    </>
  );
};

export default MainPage;
