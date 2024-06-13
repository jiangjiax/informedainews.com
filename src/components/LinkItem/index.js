import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function LinkCard({
title,
href,
date
}) {
    return (
    <Link className="border-t hover:bg-sky-100 dark:hover:bg-sky-600 no-underline" style={{ textDecoration: 'none' }} id="linkCard" href={href}>
        <div className="flex flex-wrap md:flex-nowrap hover:bg-sky-100 dark:hover:bg-sky-600 rounded-lg pl-3">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 title-font pt-3">
                <span className="text-sm text-gray-500 dark:text-gray-300 mt-1 pr-1.5">[{date}]</span>
                {title}
            </h3>
        </div>
    </Link>
    )
}