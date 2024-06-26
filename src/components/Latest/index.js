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
    date: '2024-06-26',
    href: '/docs/world-news-daily/1-2024-06-26',
    description: (
      <>
        <Translate id="Latest.description7">International Criminal Court Issues Arrest Warrants for Russian Officials Over War Crimes</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title8">World News Daily</Translate>,
    date: '2024-06-25',
    href: '/docs/world-news-daily/1-2024-06-25',
    description: (
      <>
        <Translate id="Latest.description8">Julian Assange Pleads Guilty in US Espionage Case, Potentially Ending Imprisonment</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title1">AI Enthusiast Weekly</Translate>,
    date: '2024-06-24',
    href: '/docs/ai-enthusiast-weekly/3-2024-06-24',
    description: (
      <>
        <Translate id="Latest.description1">China Leads in Developing IEEE Financial Language Model Standard</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title2">World News Daily</Translate>,
    date: '2024-06-24',
    href: '/docs/world-news-daily/1-2024-06-24',
    description: (
      <>
        <Translate id="Latest.description2">Mecca Pilgrimage Tragedy: Over 1300 Deaths Amidst Heat and Chaos</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title3">World News Daily</Translate>,
    date: '2024-06-23',
    href: '/docs/world-news-daily/1-2024-06-23',
    description: (
      <>
        <Translate id="Latest.description3">Change Healthcare Experiences Ransomware Attack, Medical Records of Many Americans Stolen</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title4">World News Daily</Translate>,
    date: '2024-06-22',
    href: '/docs/world-news-daily/1-2024-06-22',
    description: (
      <>
        <Translate id="Latest.description4">Major Healthcare Data Breach Affects Millions in the U.S</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title5">World News Daily</Translate>,
    date: '2024-06-21',
    href: '/docs/tech-enthusiast-weekly/1-2024-06-21',
    description: (
      <>
        <Translate id="Latest.description5">China Leads in Developing IEEE Financial Language Model Standard</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title6">World News Daily</Translate>,
    date: '2024-06-21',
    href: '/docs/world-news-daily/1-2024-06-21',
    description: (
      <>
        <Translate id="Latest.description6">Supreme Court to Announce Key Decisions on Trump Immunity and Abortion Rights</Translate>
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
