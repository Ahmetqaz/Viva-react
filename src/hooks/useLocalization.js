import LocalTkm from "../localization/local-tkm.json";
import LocalEn from "../localization/local-en.json";
import LocalRu from "../localization/local-ru.json";

import { useEffect, useState } from "react";

const useLocalization = () => {
  const [lang, setLang] = useState("ru");

  const getLanguageValue = () => {
    if (lang === "en") {
      return LocalEn;
    }
    if (lang === "tkm") {
      return LocalTkm;
    }
    if (lang === "ru") {
      return LocalRu;
    }
  };

  const strings = getLanguageValue();

  useEffect(() => {
    console.log(lang);
  }, [strings]);

  return {
    ...strings,
    setLanguage: (lang) => setLang(lang),
  };
};

export default useLocalization;
