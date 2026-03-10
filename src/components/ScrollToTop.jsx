import {useLayoutEffect} from 'react';
import {useLocation} from 'react-router-dom';

const ScrollToTop = () => {
    // Use useLayoutEffect for less visual "jank" as it runs synchronously after all DOM mutations
    const {pathname} = useLocation();

    useLayoutEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant" // Use "instant" for an immediate jump to the top
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
