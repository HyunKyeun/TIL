/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  editLink: { text: "" },
  feedback: { content: "" },
  logo: <strong>HyunKyeun</strong>,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Na",
    };
  },
  sidebar: {
    toggleButton: true,
  },
};
