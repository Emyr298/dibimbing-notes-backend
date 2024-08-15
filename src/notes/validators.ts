export const validateNote = ({ title }: { title: string }) => {
  return title.length <= 64;
};
