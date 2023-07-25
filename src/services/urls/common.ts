

const commonController = () => {
  const getCommonUrl = (url: string) => `${url}`;

  const commonUrl = {
    questions: getCommonUrl(`questions`),
  };

  return {
    commonUrl,
  };
};

export default commonController;
