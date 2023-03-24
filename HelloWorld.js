const HelloWorld = () => {
  return "Hello World";
};

const getSport = (id) => {
  switch (id) {
    case 1:
      return "Basketball";
    case 2:
      return "Baseball";
    case 3:
      return "Football";
    default:
      return "No sport found.";
  }
};
