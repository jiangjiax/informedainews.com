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
    title: <Translate id="Latest.title7">World News Daily</Translate>,
    date: '2024-08-23',
    href: '/docs/world-news-daily/1-2024-08-23',
    description: (
      <>
        <Translate id="Latest.description7">Israel-Hezbollah Conflict Escalates Amid Gaza Truce Talks</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title8">World News Daily</Translate>,
    date: '2024-08-22',
    href: '/docs/world-news-daily/1-2024-08-22',
    description: (
      <>
        <Translate id="Latest.description8">Blinken's Middle East Tour Ends with Ceasefire Unachieved</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title1">World News Daily</Translate>,
    date: '2024-08-13',
    href: '/docs/world-news-daily/1-2024-08-13',
    description: (
      <>
        <Translate id="Latest.description1">U.S. Nuclear Strategy Shift Focuses on China</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title2">World News Daily</Translate>,
    date: '2024-08-12',
    href: '/docs/world-news-daily/1-2024-08-12',
    description: (
      <>
        <Translate id="Latest.description2">States Sue Live Nation for Monopoly Practices</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title3">World News Daily</Translate>,
    date: '2024-08-19',
    href: '/docs/world-news-daily/1-2024-08-19',
    description: (
      <>
        <Translate id="Latest.description3">IAEA Warns of Deteriorating Safety at Zaporizhzhia Nuclear Plant</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title4">World News Daily</Translate>,
    date: '2024-08-18',
    href: '/docs/world-news-daily/1-2024-08-18',
    description: (
      <>
        <Translate id="Latest.description4">Indian Doctors Strike Over Trainee's Rape and Murder</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title5">World News Daily</Translate>,
    date: '2024-08-17',
    href: '/docs/world-news-daily/1-2024-08-17',
    description: (
      <>
        <Translate id="Latest.description5">India to Hold First Regional Elections in Jammu and Kashmir Since Revoking Autonomy</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title6">World News Daily</Translate>,
    date: '2024-08-16',
    href: '/docs/world-news-daily/1-2024-08-16',
    description: (
      <>
        <Translate id="Latest.description6">Paetongtarn Shinawatra Elected as Thailand's New Prime Minister</Translate>
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
