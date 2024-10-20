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
    title: <Translate id="Latest.title8">World News Daily</Translate>,
    date: '2024-10-20',
    href: '/docs/world-news-daily/1-2024-10-20',
    description: (
      <>
        <Translate id="Latest.description8">Biden Administration Forgives $175 Billion in Student Loans for 5 Million Borrowers</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title1">World News Daily</Translate>,
    date: '2024-10-17',
    href: '/docs/world-news-daily/1-2024-10-17',
    description: (
      <>
        <Translate id="Latest.description1">Los Angeles Catholic Archdiocese Settles Child Sex Abuse Claims for $880 Million</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title2">World News Daily</Translate>,
    date: '2024-10-16',
    href: '/docs/world-news-daily/1-2024-10-16',
    description: (
      <>
        <Translate id="Latest.description2">Ukraine War Update: Evacuation Ordered in Kupiansk Amidst Ongoing Conflict</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title4">World News Daily</Translate>,
    date: '2024-10-14',
    href: '/docs/world-news-daily/1-2024-10-14',
    description: (
      <>
        <Translate id="Latest.description3">Hezbollah Drone Attack on Israeli Base: Escalating Tensions and US Response</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title4">World News Daily</Translate>,
    date: '2024-10-12',
    href: '/docs/world-news-daily/1-2024-10-12',
    description: (
      <>
        <Translate id="Latest.description4">Japanese Atomic Bomb Survivors' Group Wins 2024 Nobel Peace Prize</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title5">World News Daily</Translate>,
    date: '2024-10-10',
    href: '/docs/world-news-daily/1-2024-10-10',
    description: (
      <>
        <Translate id="Latest.description5">North Korean Troops Deployed with Russian Forces in Ukraine</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title6">World News Daily</Translate>,
    date: '2024-10-09',
    href: '/docs/world-news-daily/1-2024-10-09',
    description: (
      <>
        <Translate id="Latest.description6">Global Rivers Face Rapid Decline Amid Climate Change</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title7">World News Daily</Translate>,
    date: '2024-10-07',
    href: '/docs/world-news-daily/1-2024-10-07',
    description: (
      <>
        <Translate id="Latest.description7">Scientists Discover Plastic-Eating Bacteria to Combat Pollution</Translate>
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
