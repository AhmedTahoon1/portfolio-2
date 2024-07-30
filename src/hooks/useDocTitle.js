import { useEffect } from "react";

const useDocTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return title;
};

export default useDocTitle;
