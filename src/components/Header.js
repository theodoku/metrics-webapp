import { useEffect, useState } from "react";
import { useLocation, useHistory } from 'react-router-dom';
import { IoIosArrowBack, IoIosSettings } from 'react-icons/io'
import { BsMicFill } from 'react-icons/bs';

const Header = () => {
    const [title, setTitle] = useState('');
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setTitle('World Index');
                break;
            case '/continent':
                setTitle('Continent Details');
                break;
            case '/country':
                setTitle('Country Details');
                break;
            default:
                setTitle('Page Not Found');
                break;
        }
    }, [location]);

    const goBack = () => {
        history.goBack();
    };

    return (
        <header className="header" data-testid="header">
            <div className="chevron-left">
                <IoIosArrowBack className="nav-icon" onClick={goBack} />
            </div>
            <h1 className="header-title">{title}</h1>
            <div className="nav-right">
                <BsMicFill className="mic-icon" />
                <IoIosSettings className="settings-icon" />
            </div>
        </header>
    );
};

export default Header;