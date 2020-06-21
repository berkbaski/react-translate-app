import React from 'react';
import { useTranslation } from 'react-i18next';

import Card from './components/card';
import Header from "./components/header";

import './index.css';

function App() {
    const {t, i18n} = useTranslation();

    const changeLanguage = async language => {
        await i18n.changeLanguage(language);
    };

    return (
        <div className="App">

            <Header title={t('title')} languageChanged={changeLanguage}/>

            <div className="container">
                {
                    [1, 2, 3, 4, 5, 6, 7].map(book => (
                        <Card
                            key={book}
                            name={t(`books.${book}.name`)}
                            year={t(`books.${book}.year`)}
                            image={t(`books.${book}.image`)}
                            link={t(`books.${book}.wikiUrl`)}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default App;
