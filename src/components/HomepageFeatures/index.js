import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id="homepage.title1">Intelligent Assessment, Precise Information</Translate>,
    Svg: require('@site/static/img/ai1.jpeg').default,
    description: (
      <>
      <Translate id="homepage.description1">Every day, we evaluate over 2000+ latest news items across multiple dimensions to select the most relevant and important information, ensuring that every piece of news delivered to you is worth your attention.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="homepage.title2">Diverse publications, Multiple Perspectives</Translate>,
    Svg: require('@site/static/img/ai2.jpeg').default,
    description: (
      <>
        <Translate id="homepage.description2">We compile important information into various types of daily and weekly publications, covering different fields and viewpoints, helping you broaden your horizons and avoid the limitations of a single source of information.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="homepage.title3">AI Summaries, Quick Comprehension</Translate>,
    Svg: require('@site/static/img/ai3.jpeg').default,
    description: (
      <>
        <Translate id="homepage.description3">Utilizing AI technology, we generate concise summaries for each article, allowing you to grasp the core content of the news in a short time and enhance your reading efficiency.</Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <img src={Svg} alt={title} className='object-cover object-center rounded-full h-40 w-40'/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="pt-8 pb-8">
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
