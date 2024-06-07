import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id="faq.title1">What is Informed-AI-News?</Translate>,
    description: (
      <>
        <Translate id="faq.desc1">Informed-AI-News is an information aggregation platform that evaluates over 2000 pieces of the latest news daily across multiple dimensions, selects the most relevant and valuable information, generates concise summaries for each article, and compiles these curated pieces into corresponding daily, weekly, and other publications.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="faq.title2">How does Informed-AI-News filter news?</Translate>,
    description: (
      <>
        <Translate id="faq.desc2">Our filtering process begins by selecting information from multiple reliable public news sources, then sets different evaluation criteria based on the characteristics of different subjects. For example, news is assessed on aspects such as objectivity, social impact, credibility, potential, practicality, and entertainment value; while social media commentary is evaluated on practicality, rationality, entertainment value, depth of thought, and social impact.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="faq.title3">What types of information does Informed-AI-News include?</Translate>,
    description: (
      <>
        <Translate id="faq.desc3">We offer a variety of publications, with the main ones currently being World News Daily, Tech Enthusiast Daily, and AI Enthusiast Daily.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="faq.title4">What is the update frequency of Informed-AI-News?</Translate>,
    description: (
      <>
        <Translate id="faq.desc4">We search for information hourly to ensure you receive the latest news. publications are updated according to their respective schedules, such as daily updates for the daily newspaper, and weekly updates for future weekly issues.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="faq.title5">How can I get more support?</Translate>,
    description: (
      <>
        <Translate id="faq.desc5">You can contact us via email or social media (details can be found in the footer of the page), and we will respond to your questions as soon as possible.</Translate>
      </>
    ),
  }
];

function Feature({title, description}) {
  return (
      <details className="group [&_summary::-webkit-details-marker]:hidden pb-3" open>
        <summary
          className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
        >
          <h3 className="font-medium">{title}</h3>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-100">
          {description}
        </p>
      </details>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="pt-8 pb-8">
      <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100 pb-3" id="faq">FAQ</h2>
      <div className="container">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
