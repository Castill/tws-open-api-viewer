import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import FetchBackend from 'i18next-fetch-backend';

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(FetchBackend)
    .init({
        keySeparator: false,
        fallbackLng: 'zh-Hant',
        load: 'currentOnly',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
            requestOptions: {
                credentials: 'same-origin',
                cache: 'no-cache',
            },
        },
    })
    .catch(error => {
        console.error('i18n init error:', error);
    });

export default i18n;
