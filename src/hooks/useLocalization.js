import LocalTkm from "../localization/local-tkm.json";
import LocalEn from "../localization/local-en.json";
import { useEffect, useState } from "react";

const useLocalization = () => {
  const [lang, setLang] = useState("en");

  const strings = lang === "tkm" ? LocalTkm : LocalEn;

  useEffect(() => {
    console.log(lang);
  }, [strings]);

  return {
    ...strings,
    getLanguage: () => {
      return lang;
    },
    setLanguage: (lang) => setLang(lang),
  };
};

export default useLocalization;
