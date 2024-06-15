import React from 'react';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

export default function ListLink({ children }) {
    return (
        <section className="text-gray-600 body-font overflow-hidden pt-2">
            <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100 pt-3"><Translate>News</Translate></h2>
            <p className="text-center text-gray-600 dark:text-gray-400"><Translate>news selected from the past 5 days</Translate></p>
            <div className='pl-5 pr-5'>
                { children }
            </div>
        </section>
    )
}