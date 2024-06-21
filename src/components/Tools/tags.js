import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';

const LatestHref = translate({
    id: 'Latest.href',
    message: ''
})


const FeatureList = [
    {
        title: <Translate id="tag1">World News Daily</Translate>,
        href: '/docs/world-news-daily/1-2024-06-20',
    },
    {
        title: <Translate id="tag2">World News Daily</Translate>,
        href: '/docs/world-news-daily/1-2024-06-20',
    },
    {
        title: <Translate id="tag3">World News Daily</Translate>,
        href: '/docs/world-news-daily/1-2024-06-20',
    },
    {
        title: <Translate id="tag4">AI Enthusiast Weekly</Translate>,
        href: '/docs/world-news-daily/1-2024-06-20',
    },
];

function Feature({ title, href, active }) {
    return (
        <div className={clsx(
            "overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800 hover:bg-blue-500 dark:hover:bg-blue-600 no-underline ml-1 mr-1 mt-1",
        )}>
            <a href={LatestHref+href} className="no-underline" style={{ textDecoration: 'none' }}>
                <div className={clsx(
                    "font-medium p-2 text-center hover:text-white",
                    active ? "text-white bg-blue-600 dark:bg-blue-600" : "text-gray-900 dark:text-gray-100" // 根据 active 属性应用文字颜色
                )}>
                    {title}
                </div>
            </a>
        </div>
    );
}

export default function Latest() {
    return (
        <section className="pt-5 pb-5">
            <h1 className="text-center text-6xl font-bold text-gray-900 dark:text-gray-100"><Translate>Informed AI News Tools Directory</Translate></h1>
            <p className="text-center text-gray-600 dark:text-gray-400 text-lg">
                <Translate>Discover practical internet software, AI tools, and products of 2024 through the Informed AI News Tools Directory!</Translate>
            </p>
            <div className="container flex justify-center">
                <div className="row">
                    <div className={"overflow-hidden rounded-lg bg-blue-100 dark:bg-zinc-800 hover:bg-sky-500 dark:hover:bg-sky-500 no-underline ml-1 mr-1 mb-3"}>
                        <a href="/docs/tools-daily" className="no-underline" style={{ textDecoration: 'none' }}>
                            <div className={clsx("font-medium p-2 text-center hover:text-white")}>
                                <Translate>Subscribe</Translate>
                            </div>
                        </a>
                    </div>
                    {/* <div className={"overflow-hidden rounded-lg bg-blue-100 dark:bg-zinc-800 hover:bg-sky-500 dark:hover:bg-sky-500 no-underline ml-1 mr-1 mb-3"}>
                        <a href="#" className="no-underline" style={{ textDecoration: 'none' }}>
                            <div className={clsx("font-medium p-2 text-center hover:text-white")}>
                                <Translate>Submit</Translate>
                            </div>
                        </a>
                    </div> */}
                </div>
            </div>
            {/* <div className="container flex justify-center">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                    <Feature key={idx} {...props} />
                    ))}
                </div>
            </div> */}
        </section>
    );
}
