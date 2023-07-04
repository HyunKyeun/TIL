import { NextPageContext } from "next";

/**
 * 접속 기기 확인
 * @param ctx
 * @returns web: true / mobile: false
 */
export const getDevice = (ctx: NextPageContext) => {
  const userAgent: string = ctx.req?.headers["user-agent"] ?? "";
  if (/Mobi/i.test(userAgent)) return false;
  else return true;
};

export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};
