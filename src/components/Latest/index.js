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
    title: <Translate id="Latest.title4">World News Daily</Translate>,
    date: '2024-08-10',
    href: '/docs/world-news-daily/1-2024-08-10',
    description: (
      <>
        <Translate id="Latest.description4">U.S. and States File Antitrust Lawsuit Against Google</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title5">World News Daily</Translate>,
    date: '2024-08-09',
    href: '/docs/world-news-daily/1-2024-08-09',
    description: (
      <>
        <Translate id="Latest.description5">Ukraine Admits to Kursk Incursion, Citing Russian Aggression</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title6">World News Daily</Translate>,
    date: '2024-08-08',
    href: '/docs/world-news-daily/1-2024-08-08',
    description: (
      <>
        <Translate id="Latest.description6">Nobel Laureate Muhammad Yunus to Lead Bangladesh Interim Government</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title7">World News Daily</Translate>,
    date: '2024-08-07',
    href: '/docs/world-news-daily/1-2024-08-07',
    description: (
      <>
        <Translate id="Latest.description7">Massive Data Breach at Background Check Firm NPD Affects 29 Billion Records</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title8">World News Daily</Translate>,
    date: '2024-08-07',
    href: '/docs/world-news-daily/1-2024-08-07',
    description: (
      <>
        <Translate id="Latest.description8">Global Stock Market Crash: Causes and Consequences</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title1">World News Daily</Translate>,
    date: '2024-08-05',
    href: '/docs/world-news-daily/1-2024-08-05',
    description: (
      <>
        <Translate id="Latest.description1">Judge Denies Trump's Bid to Dismiss Election Subversion Case</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title2">World News Daily</Translate>,
    date: '2024-08-04',
    href: '/docs/world-news-daily/1-2024-08-04',
    description: (
      <>
        <Translate id="Latest.description2">U.S. Sues TikTok for Violating Children's Privacy</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title3">World News Daily</Translate>,
    date: '2024-08-03',
    href: '/docs/world-news-daily/1-2024-08-03',
    description: (
      <>
        <Translate id="Latest.description3">Historic Prisoner Swap Involving Journalists and Activists</Translate>
      </>
    ),
  },
];

function Feature({ title, href, description, date }) {
  return (
    <div className={clsx('col col--3 pb-5')}>
      <article className="overflow-hidden rounded-lg bg-zinc-50 dark:bg-zinc-800 hover:bg-sky-100 dark:hover:bg-sky-600 no-underline">
        <a href={LatestHref+href} className="no-underline" style={{ textDecoration: 'none' }}>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-500 dark:text-gray-200" style={{ height: '5.6rem' }}>
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
