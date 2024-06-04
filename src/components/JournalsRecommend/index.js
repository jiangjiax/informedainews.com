import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id="news.title1">World News Daily</Translate>,
    Svg: require('@site/static/img/worldnews.jpeg').default,
    href: '/docs/world-news-daily',
    description: (
      <>
        <Translate id="news.description1">World News Daily is a comprehensive international news daily aimed at providing global perspective news coverage. It encompasses politics, economy, society, entertainment, technology, health, sports, and more, helping readers understand the latest developments and events around the world. World News Daily is committed to delivering objective and accurate information, enabling readers to better comprehend global affairs.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="news.title2">Tech Enthusiast Daily</Translate>,
    Svg: require('@site/static/img/techfan.jpeg').default,
    href: '/docs/world-news-daily',
    description: (
      <>
        <Translate id="news.description2">Tech Enthusiast Daily is a daily publication dedicated to the tech realm, designed to offer tech enthusiasts the latest tech news, trend analysis, and in-depth reports. It covers various aspects such as artificial intelligence, internet, mobile devices, software development, and more, assisting readers in understanding the latest dynamics and future developments in the tech field. Tech Enthusiast Daily is dedicated to providing deep, insightful tech information, allowing readers to keep pace with the advancements in technology.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="news.title3">AI Enthusiast Daily</Translate>,
    Svg: require('@site/static/img/aifan.jpeg').default,
    href: '/docs/world-news-daily',
    description: (
      <>
        <Translate id="news.description3">AI Enthusiast Daily is a daily publication focused on the field of artificial intelligence, intended for AI enthusiasts to provide the latest AI news, technological advancements, and industry insights. It covers subfields such as machine learning, deep learning, natural language processing, and more, helping readers understand the latest developments and future trends in artificial intelligence. AI Enthusiast Daily is committed to delivering deep, insightful AI information, enabling readers to gain a profound understanding of the development and application of artificial intelligence.</Translate>
      </>
    ),
  },
];

function Feature({Svg, title, href, description}) {
  return (
    <div className={clsx('col col--4 pb-5')}>
      <article className="overflow-hidden rounded-lg bg-white dark:bg-zinc-800 shadow-sm">
        <img
          src={Svg} alt={title}
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            {title}
            </h3>
          </a>

          <p className="mt-2 line-clamp-5 text-sm/relaxed text-gray-500 dark:text-gray-200">
            {description}
          </p>

          <a href={href} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400">
            Find out more

            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
              &rarr;
            </span>
          </a>
        </div>
      </article>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="pt-8 pb-8 bg-zinc-100 dark:bg-zinc-900">
      <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100 pb-3"><Translate>publications</Translate></h2>
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
