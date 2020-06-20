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
                <Card
                    name={t('books.1.name')}
                    year={t('books.1.year')}
                />
                <Card
                    name={t('books.2.name')}
                    year={t('books.2.year')}
                />
                <Card
                    name={t('books.3.name')}
                    year={t('books.3.year')}
                />
                <Card
                    name={t('books.4.name')}
                    year={t('books.4.year')}
                />
                <Card
                    name={t('books.5.name')}
                    year={t('books.5.year')}
                />
                <Card
                    name={t('books.6.name')}
                    year={t('books.6.year')}
                />
                <Card
                    name={t('books.7.name')}
                    year={t('books.7.year')}
                />
            </div>
        </div>
    );
}

export default App;
