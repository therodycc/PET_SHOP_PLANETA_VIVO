import { CSSProperties, useEffect, useState } from "react";

export const LoadingPage = () => {
    const [animationEnd, setAnimationEnd] = useState(false);
    const [loading, setLoading] = useState(true);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setLoading(false);
            clearTimeout(loadingTimer);
        }, 1000);
    }, []);

    useEffect(() => {
        if (!loading) {
            setAnimationEnd(true);
            const timer = setTimeout(() => {
                setFinished(true);
                clearTimeout(timer)
            }, 800);
        }
    }, [loading, setFinished]);

    return !finished ? (
        <div
            className={`d-flex justify-content-center align-items-center  ${animationEnd ? "animate__animated animate__fadeOut" : ""
                }`}
            style={styles.bg}
        >
            <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
            </div>
        </div>
    ) : null;
};


const styles: { [key: string]: CSSProperties } = {
    bg: {
        backgroundColor: "#008374",
        height: "100vh",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 99909,
    }
}