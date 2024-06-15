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
    date: '2024-06-15',
    href: '/docs/world-news-daily/1-2024-06-15',
    description: (
      <>
        <Translate id="Latest.description1">China, Russia, and North Korea Consider Allowing Ships Access to Sea of Japan via Tumen River</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title2">Tech Enthusiast Weekly</Translate>,
    date: '2024-06-14',
    href: '/docs/tech-enthusiast-weekly/2-2024-06-14',
    description: (
      <>
        <Translate id="Latest.description2">ASML Unveils Next-Generation 'Hyper-NA' EUV Technology Roadmap</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title3">World News Daily</Translate>,
    date: '2024-06-14',
    href: '/docs/world-news-daily/1-2024-06-14',
    description: (
      <>
        <Translate id="Latest.description3">ASML Unveils Next-Generation 'Hyper-NA' EUV Technology Roadmap</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title4">World News Daily</Translate>,
    date: '2024-06-13',
    href: '/docs/world-news-daily/1-2024-06-13',
    description: (
      <>
        <Translate id="Latest.description4">UN Report Accuses Both Hamas and Israel of War Crimes</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title5">World News Daily</Translate>,
    date: '2024-06-12',
    href: '/docs/world-news-daily/1-2024-06-12',
    description: (
      <>
        <Translate id="Latest.description5">Global Conflict Deaths Reach 30-Year High Amid Complex Conflicts</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title6">World News Daily</Translate>,
    date: '2024-06-11',
    href: '/docs/world-news-daily/1-2024-06-11',
    description: (
      <>
        <Translate id="Latest.description6">Trump Faces Probation Interview Amid Legal Battle Over Hush Money Conviction</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title7">World News Daily</Translate>,
    date: '2024-06-10',
    href: '/docs/world-news-daily/1-2024-06-10',
    description: (
      <>
        <Translate id="Latest.description7">Final Day of European Parliament Elections: Voters Shape the Continent's Future</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title8">Tech Enthusiast Weekly</Translate>,
    href: '/docs/tech-enthusiast-weekly/2-2024-06-10',
    date: '2024-06-10',
    description: (
      <>
        <Translate id="Latest.description8">5G Commercialization in China: Economic Impact and Network Expansion</Translate>
      </>
    ),
  }
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
