import Container from '@material-ui/core/Container';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import LanguageIcon from '@material-ui/icons/Language';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { language } from './../../constants/config';
import './Header.scss';
import Navigate from './Navigate';

function Header(props) {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const handleLanguage = (event, lang) => {
        event.stopPropagation();
        i18n.changeLanguage(lang);
        setOpen((open) => !open);
    }

    const handleDropdown = () => {
        setOpen((open) => !open);
    }
    return (
        <header className="header">
            <div className="header__wrapper-top">
                <Container>
                    <div className="header__top">
                        <p className="header__top-left">
                            <AccessTimeIcon className="icon" />
                            {t("open time")}: 8:00 - 20:00
                            <span>{t("monday")} - {t("sunday")}</span>
                        </p>
                        <div className="header__top-right">
                            <a href="/login">
                                <PersonIcon className="icon" />
                                <span>{t("login")}</span>
                            </a>
                            <a href="/logout">
                                <PersonAddIcon className="icon" />
                                <span>{t("register")}</span>
                            </a>
                            <div className="header__top-right-language">
                                <div onClick={handleDropdown} className="language-top">
                                    <LanguageIcon className="icon" />
                                    {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                                </div>
                                <ul className="language-change"
                                    style={open ? { display: "block" } : { display: "none" }}
                                >
                                    {language.map((lang, index) => {
                                        return (
                                            <li key={index} onClick={(event) => handleLanguage(event, lang.value)}>
                                                <img src={lang.icon} alt="language icon" />
                                                <span>
                                                    {t(`language.${lang.label}`)}
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Navigate />
        </header>
    );
}

export default Header;