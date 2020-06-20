import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

import HamburgerIcon from "./hambuger-icon";

export default function Header(props) {
    const [lang, setLang] = useState('en');
    const [showSidebar, setShowSidebar] = useState(false);

    const changeLanguage = language => {
        setLang(language);
        props.languageChanged(language);
    };

    const {i18n} = useTranslation();
    useEffect(() => {
        const splitLanguage = i18n.language.split('-')[0];
        changeLanguage(splitLanguage);
    }, [i18n.language])

    const sidebar = () => (
        <div
            className={["header__sidebar", showSidebar ? 'sidebar__animation-open' : 'sidebar__animation-close'].join(' ')}>
            <button
                className={[['header__sidebar-lang-button', lang === 'tr' ? 'header__sidebar-lang-button--active' : ''].join(' ')]}
                onClick={() => changeLanguage('tr')}>
                tr
            </button>
            <button
                className={[['header__sidebar-lang-button', lang === 'en' ? 'header__sidebar-lang-button--active' : ''].join(' ')]}
                onClick={() => changeLanguage('en')}>en
            </button>
        </div>
    );

    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__nav--title">{props.title}</div>
                <div className="header__nav-buttons">
                    <button
                        className={[['header__lang-button', lang === 'tr' ? 'header__lang-button--active' : ''].join(' ')]}
                        onClick={() => changeLanguage('tr')}>
                        tr
                    </button>
                    <button
                        className={[['header__lang-button', lang === 'en' ? 'header__lang-button--active' : ''].join(' ')]}
                        onClick={() => changeLanguage('en')}>en
                    </button>
                </div>
                <div className="header__nav-sidebar-button" onClick={() => setShowSidebar(!showSidebar)}>
                    <HamburgerIcon/>
                </div>
            </nav>
            {
                sidebar()
            }
        </header>
    );
};
