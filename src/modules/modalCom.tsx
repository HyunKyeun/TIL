import { classNames } from "@/modules/common.modules";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import { HiXMark } from "react-icons/hi2";

const ModalCom = (props: any) => {
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
    <Transition.Root show={props.modalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={props.setModalOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={classNames(
              props.clearBg ? "" : "bg-gray-500 bg-opacity-75",
              "fixed inset-0  transition-opacity"
            )}
          />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform flex flex-col overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all w-full">
                <>
                  <div className="w-full flex justify-end">
                    <HiXMark
                      className="cursor-pointer"
                      onClick={() => {
                        props.setDetail(false);
                        props.setModalOpen(false);
                      }}
                    />
                  </div>
                  {props.modalContent}

                  {props.detail && (
                    <>
                      <div
                        className="mt-2 border-b-2 flex justify-center w-full cursor-pointer"
                        onClick={() => {
                          props.setModalsDetailOpen(!props.modalsDetailOpen);
                        }}
                      >
                        {props.modalsDetailOpen ? "Close" : "See Detail"}
                      </div>
                      {props.modalsDetailOpen && props.modalDetailContent}
                    </>
                  )}
                </>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalCom;
