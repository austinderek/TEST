const HelloWorld = () => {
  return "Hello World";
};

const getSport = (id) => {
  switch (id) {
    case 1:
      return "basketball";
    case 2:
      return "soccer";
    default:
      return "no sport found.";
  }
};
