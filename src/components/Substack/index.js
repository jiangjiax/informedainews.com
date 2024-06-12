import React from 'react';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const href = translate({
    id: 'substack.href',
    message: 'https://informedainews.substack.com/embed'
})

export default function Substack() {
    return (
        <iframe src={href} width="100%" height="200" className={styles.substackembed}></iframe>
    );
}