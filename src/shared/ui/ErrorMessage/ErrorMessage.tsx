import React, {useEffect, useState} from 'react';
import styles from './ErrorMessage.module.css';
import {ErrorMessageType} from "@shared/ui/ErrorMessage/ErrorMessage.type.ts";


const ErrorMessage: React.FC<ErrorMessageType> = ({ error }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Set a timer to hide the notice after 5 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        // Clean up the timer when the component unmounts or isVisible changes
        return () => clearTimeout(timer);
    }, []);

    return isVisible ? <div className={styles.errorMessage}>{error}</div> : null;
};

export default ErrorMessage;
