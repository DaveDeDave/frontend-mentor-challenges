export const classNames = (...classes: (string | undefined)[]) => {
  return classes.filter((className) => className).join(" ");
};

export const emailRegex = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/;
