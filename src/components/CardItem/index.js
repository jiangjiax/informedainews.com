import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function LinkCard({
title,
href,
imgsrc,
info,
sources
}) {
    return (
        <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src={imgsrc} alt="content"/>
                {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
                <div className="flex flex-col justify-between">
                    <div className="flex"> {/* 使用 flex 布局 */}
                        <Link className="no-underline mr-4" style={{ textDecoration: 'none' }} href={href}>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4 hover:text-blue-600">{title}</h2>
                        </Link>
                        <div className="flex-grow"></div> {/* 使用 flex-grow 来推 SVG 到右边 */}
                        <Link className="no-underline" style={{ textDecoration: 'none' }} href={sources}>
                        <svg width="20" height="20" aria-hidden="true" viewBox="0 0 25 25" className="mt-1">
                            <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
                        </svg>
                        </Link>
                    </div>
                </div>
                <p class="leading-relaxed text-base line-clamp-4">{info}</p>
            </div>
        </div>
    )
}