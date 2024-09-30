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
    date: '2024-09-30',
    href: '/docs/world-news-daily/1-2024-09-30',
    description: (
      <>
        <Translate id="Latest.description4">Hezbollah Leader's Death in Israeli Strike Shifts Middle East Conflict</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title5">World News Daily</Translate>,
    date: '2024-09-28',
    href: '/docs/world-news-daily/1-2024-09-28',
    description: (
      <>
        <Translate id="Latest.description5">California Apologizes for Slavery and Takes Steps Towards Reparations</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title6">World News Daily</Translate>,
    date: '2024-09-27',
    href: '/docs/world-news-daily/1-2024-09-27',
    description: (
      <>
        <Translate id="Latest.description6">Allegations of Sexual Assault Against Mohamed Al Fayed During Fulham FC Tenure</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title7">World News Daily</Translate>,
    date: '2024-09-26',
    href: '/docs/world-news-daily/1-2024-09-26',
    description: (
      <>
        <Translate id="Latest.description7">Thailand Legalizes Same-Sex Marriage, First in Southeast Asia</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title8">World News Daily</Translate>,
    date: '2024-09-25',
    href: '/docs/world-news-daily/1-2024-09-25',
    description: (
      <>
        <Translate id="Latest.description8">China Considers Ending Collective Punishment for Relatives of Criminals</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title1">World News Daily</Translate>,
    date: '2024-09-24',
    href: '/docs/world-news-daily/1-2024-09-24',
    description: (
      <>
        <Translate id="Latest.description1">Biden Administration Proposes Ban on Chinese Vehicles and Software in U.S. Cars</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title2">World News Daily</Translate>,
    date: '2024-09-23',
    href: '/docs/world-news-daily/1-2024-09-23',
    description: (
      <>
        <Translate id="Latest.description2">Leftist Outsider Dissanayake Wins Sri Lankan Presidential Election</Translate>
      </>
    ),
  },
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
