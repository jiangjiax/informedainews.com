import React from 'react';
import styles from './styles.module.css';

export default function Substack() {
    return (
        <iframe src="https://informedainews.substack.com/embed" width="480" height="200" className={styles.substackembed}></iframe>
    );
}