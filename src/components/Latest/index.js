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
    date: '2024-09-21',
    href: '/docs/world-news-daily/1-2024-09-21',
    description: (
      <>
        <Translate id="Latest.description3">Sri Lanka's Presidential Election: A Nation at a Crossroads</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title4">World News Daily</Translate>,
    date: '2024-09-20',
    href: '/docs/world-news-daily/1-2024-09-20',
    description: (
      <>
        <Translate id="Latest.description4">Lebanon Faces Heightened Tensions Amid Explosive Attacks and Hezbollah's Threats</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title5">World News Daily</Translate>,
    date: '2024-09-18',
    href: '/docs/world-news-daily/1-2024-09-18',
    description: (
      <>
        <Translate id="Latest.description5">Jammu and Kashmir Holds First Assembly Election in a Decade</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title6">World News Daily</Translate>,
    date: '2024-09-01',
    href: '/docs/world-news-daily/1-2024-09-01',
    description: (
      <>
        <Translate id="Latest.description6">TikTok Faces U.S. Ban: Court Battle Over National Security Concerns</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title7">World News Daily</Translate>,
    date: '2024-09-15',
    href: '/docs/world-news-daily/1-2024-09-15',
    description: (
      <>
        <Translate id="Latest.description7">Hunan Dongkou County Shantytown Renovation Project Fraud Case: 88 Public Officials Held Accountable</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title8">World News Daily</Translate>,
    date: '2024-09-13',
    href: '/docs/world-news-daily/1-2024-09-13',
    description: (
      <>
        <Translate id="Latest.description8">The Standing Committee of the National People's Congress decides to gradually delay the statutory retirement age</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title1">World News Daily</Translate>,
    date: '2024-09-11',
    href: '/docs/world-news-daily/1-2024-09-11',
    description: (
      <>
        <Translate id="Latest.description1">US Confirms Russia Received Ballistic Missiles from Iran, Prompting New Sanctions</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title2">World News Daily</Translate>,
    date: '2024-09-07',
    href: '/docs/world-news-daily/1-2024-09-07',
    description: (
      <>
        <Translate id="Latest.description2">OpenAI CEO Leads Multi-Billion Dollar AI Infrastructure Initiative</Translate>
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
