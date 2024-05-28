import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import uzTranslation from './locals/uz.json';
import enTranslation from './locals/en.json';
import ruTranslation from './locals/ru.json';
 

i18n
 .use(Backend)

  // detect user language
  .use(LanguageDetector)

  .use(initReactI18next).init({
    fallbackLng: 'en',
    lng: "uz",
    debug: true,
    resources: {
        uz:{translation: uzTranslation},
        en:{translation: enTranslation},
        ru:{translation: ruTranslation},
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;