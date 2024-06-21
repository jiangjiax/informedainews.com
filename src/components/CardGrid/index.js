import React from 'react';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

export default function ListLink({ children }) {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className='flex flex-wrap -m-4'>
                { children }
            </div>
        </section>
    )
}