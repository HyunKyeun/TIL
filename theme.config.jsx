/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  editLink: { text: "" },
  feedback: { content: "" },
  logo: <strong>개발새발</strong>,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – HyunKyeun.Na",
    };
  },
  sidebar: {
    toggleButton: true,
  },
  footer: {
    text: <span>© 2023 HyunKyeun Na</span>,
  },
};
