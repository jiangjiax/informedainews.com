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
        <Translate id="news.description1">World News Daily is a comprehensive international news daily, dedicated to providing global perspective news coverage. It covers a wide range of topics including politics, economics, society, entertainment, technology, health, and sports, helping readers understand the latest developments and events around the world. Daily Release.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="news.title2">Tech Enthusiast Weekly</Translate>,
    Svg: require('@site/static/img/techfan.jpeg').default,
    href: '/docs/tech-enthusiast-weekly',
    description: (
      <>
        <Translate id="news.description2">Tech Enthusiast Weekly is a newspaper dedicated to the field of technology, aiming to provide the latest tech news and practical tool recommendations for tech enthusiasts. Its sections include tech news, articles, tools, resources, and social media commentary. Every Friday Released.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="news.title3">AI Enthusiast Weekly</Translate>,
    Svg: require('@site/static/img/aifan.jpeg').default,
    href: '/docs/ai-enthusiast-daily',
    description: (
      <>
        <Translate id="news.description3">AI Enthusiast Weekly is a newspaper dedicated to the field of artificial intelligence, designed to provide AI enthusiasts with the latest AI news, technological advancements, industry insights, and tool recommendations. Its sections cover AI news, articles, tools, resources, and social media commentary. Every Monday Released.</Translate>
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
          <a href={href}>
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
      <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100 pb-3"><Translate>Publications</Translate></h2>
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
