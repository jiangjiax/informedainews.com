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
    title: <Translate id="Latest.title5">World News Daily</Translate>,
    date: '2024-08-01',
    href: '/docs/world-news-daily/1-2024-08-01',
    description: (
      <>
        <Translate id="Latest.description5">Biden administration announces $4.3 billion in funding for local climate projects.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title6">World News Daily</Translate>,
    date: '2024-07-30',
    href: '/docs/world-news-daily/1-2024-07-30',
    description: (
      <>
        <Translate id="Latest.description6">BRICS Nations Represent 35% of Global GDP, Challenging Traditional Economic Paradigms</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title7">World News Daily</Translate>,
    date: '2024-07-29',
    href: '/docs/world-news-daily/1-2024-07-29',
    description: (
      <>
        <Translate id="Latest.description7">World News Daily(2024-07-29) : Japan and U.S. Strengthen Defense Ties Amid Global Threats</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title8">World News Daily</Translate>,
    date: '2024-07-28',
    href: '/docs/world-news-daily/1-2024-07-28',
    description: (
      <>
        <Translate id="Latest.description8">Kamala Harris's Historic Ascent in US Politics</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title1">World News Daily</Translate>,
    date: '2024-07-27',
    href: '/docs/world-news-daily/1-2024-07-27',
    description: (
      <>
        <Translate id="Latest.description1">Russia and China Conduct First Joint Bomber Patrol Near Alaska</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title2">World News Daily</Translate>,
    date: '2024-07-26',
    href: '/docs/world-news-daily/1-2024-07-26',
    description: (
      <>
        <Translate id="Latest.description2">UAE Involvement in Sudan Civil War Revealed by Leaked Documents</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title3">World News Daily</Translate>,
    date: '2024-07-25',
    href: '/docs/world-news-daily/1-2024-07-25',
    description: (
      <>
        <Translate id="Latest.description3">New Zealand Report Reveals Widespread Abuse in State Care</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title4">World News Daily</Translate>,
    date: '2024-07-24',
    href: '/docs/world-news-daily/1-2024-07-24',
    description: (
      <>
        <Translate id="Latest.description4">China releases "National Carbon Market Development Report (2024)" to promote the development of the carbon emission trading market.</Translate>
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
