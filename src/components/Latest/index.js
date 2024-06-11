import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate,{translate} from '@docusaurus/Translate';

const LatestHref = translate({
  id: 'Latest.href',
  message: ''
})


const FeatureList = [
  {
    title: <Translate id="Latest.title1">World News Daily</Translate>,
    date: '2024-06-10',
    href: '/docs/world-news-daily/1-2024-06-10',
    description: (
      <>
        <Translate id="Latest.description1">Final Day of European Parliament Elections: Voters Shape the Continent's Future</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title2">Tech Enthusiast Weekly</Translate>,
    href: '/docs/tech-enthusiast-daily/2-2024-06-10',
    date: '2024-06-10',
    description: (
      <>
        <Translate id="Latest.description2">5G Commercialization in China: Economic Impact and Network Expansion</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title3">AI Enthusiast Weekly</Translate>,
    href: '/docs/ai-enthusiast-daily/3-2024-06-10',
    date: '2024-06-10',
    description: (
      <>
        <Translate id="Latest.description3">Apple's WWDC 2024 to Introduce AI Enhancements in iOS 18 and iPadOS 18</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title4">World News Daily</Translate>,
    href: '/docs/world-news-daily/1-2024-06-09',
    date: '2024-06-09',
    description: (
      <>
        <Translate id="Latest.description4">Top 5 AI Tools Revolutionizing Content Creation in 2024</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title5">Tech Enthusiast Weekly</Translate>,
    href: '/docs/tech-enthusiast-daily/2-2024-06-09',
    date: '2024-06-09',
    description: (
      <>
        <Translate id="Latest.description5">5G Commercialization in China: Economic Impact and Network Expansion</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title6">AI Enthusiast Weekly</Translate>,
    href: '/docs/ai-enthusiast-daily/3-2024-06-09',
    date: '2024-06-09',
    description: (
      <>
        <Translate id="Latest.description6">Apple's WWDC 2024 to Introduce AI Enhancements in iOS 18 and iPadOS 18</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title7">World News Daily</Translate>,
    href: '/docs/world-news-daily/1-2024-06-08',
    date: '2024-06-08',
    description: (
      <>
        <Translate id="Latest.description7">Man Wrongfully Imprisoned for 41 Years in Taiwan Seeks Justice</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title8">Tech Enthusiast Weekly</Translate>,
    href: '/docs/tech-enthusiast-daily/2-2024-06-08',
    date: '2024-06-08',
    description: (
      <>
        <Translate id="Latest.description8">The world's longest undersea fiber optic cable, 2Africa, connects the UK, enhancing regional internet performance.</Translate>
      </>
    ),
  },
];

function Feature({ title, href, description, date }) {
  return (
    <div className={clsx('col col--3 pb-5')}>
      <article className="overflow-hidden rounded-lg bg-zinc-50 dark:bg-zinc-800 hover:bg-sky-100 dark:hover:bg-sky-600 no-underline">
        <a href={LatestHref+href} className="no-underline" style={{ textDecoration: 'none' }}>
          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-500 dark:text-gray-200" style={{ height: '5.7rem' }}>
              {description}
            </p>
            <div className="text-sm text-blue-500 dark:text-blue-200">
              {date}
            </div>
          </div>
        </a>
      </article>
    </div>
  );
}

export default function Latest() {
  return (
    <section className="pt-8 pb-8">
      <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100 pb-3"><Translate>Latest Resources</Translate></h2>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
