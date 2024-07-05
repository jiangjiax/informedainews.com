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
    title: <Translate id="Latest.title3">World News Daily</Translate>,
    date: '2024-07-05',
    href: '/docs/world-news-daily/1-2024-07-05',
    description: (
      <>
        <Translate id="Latest.description3">Solving the Ozone Hole: Science, Policy, and Global Action</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title4">Tech Enthusiast Weekly</Translate>,
    date: '2024-07-05',
    href: '/docs/tech-enthusiast-weekly/2-2024-07-05',
    description: (
      <>
        <Translate id="Latest.description4">Motiff: AI-Enhanced UI Design Tool for Professional Designers</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title5">World News Daily</Translate>,
    date: '2024-07-04',
    href: '/docs/world-news-daily/1-2024-07-04',
    description: (
      <>
        <Translate id="Latest.description5">Japanese Government Ordered to Pay Damages for Forced Sterilizations</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title6">World News Daily</Translate>,
    date: '2024-07-03',
    href: '/docs/world-news-daily/1-2024-07-03',
    description: (
      <>
        <Translate id="Latest.description6">Putin and Xi to Meet in Kazakhstan Amid Strengthening Ties</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title7">World News Daily</Translate>,
    date: '2024-07-02',
    href: '/docs/world-news-daily/1-2024-07-02',
    description: (
      <>
        <Translate id="Latest.description7">EU Finds Meta's 'Pay or Consent' Model Violates Competition Rules</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title8">World News Daily</Translate>,
    date: '2024-07-01',
    href: '/docs/world-news-daily/1-2024-07-01',
    description: (
      <>
        <Translate id="Latest.description8">US Secret Services Campaign Against Nord Stream 2 in Germany</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title1">AI Enthusiast Weekly</Translate>,
    date: '2024-07-01',
    href: '/docs/ai-enthusiast-weekly/3-2024-07-01',
    description: (
      <>
        <Translate id="Latest.description1">Dify: Revolutionizing AI with Rapid Growth and Global Impact</Translate>
      </>
    ),
  },
  {
    title: <Translate id="Latest.title2">World News Daily</Translate>,
    date: '2024-06-30',
    href: '/docs/world-news-daily/1-2024-06-30',
    description: (
      <>
        <Translate id="Latest.description2">China Strengthens State Control Over Rare Earth Resources</Translate>
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
