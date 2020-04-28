import React from 'react';

// Local Modules
import styles from './components.module.scss';

export default function Loader({ loading } : LoaderProps) {
    return (
        <div className={loading ? styles.loaderWrapper : styles.loaderWrapperHidden}>
            Loading ...
        </div>
    );
}