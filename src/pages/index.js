import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import JournalsRecomment from '@site/src/components/JournalsRecommend';
import FAQ from '@site/src/components/FAQ';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './index.module.css';
import Heading from '@theme/Heading';
import ResourcesSection from '@site/src/components/Latest';

const IndexTitle =translate({
  message: 'AI-Curated, Informed Choices',
})

const tagline = translate({
  id: 'homepage.tagline',
  message: '"Informed AI News" is an AI-curated publications aggregation platform, ensuring you access only the most valuable information, with the aim of eliminating the information gap and transcending the confines of information cocoons.'
})

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="md:text-7xl bg-gradient-to-r from-green-300 via-white-300 to-red-300 bg-clip-text font-extrabold text-transparent sm:text-5xl">
          <Translate>AI-Curated, Informed Choices</Translate>
        </Heading>
        <p className="md:text-xl sm:text-base">{tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg hover:-rotate-2 hover:scale-110 focus:outline-none focus:rin"
            to="/docs/guides">
            <Translate>Get Started Free</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={IndexTitle}
      description={tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <JournalsRecomment />
        <ResourcesSection />
        <FAQ />
      </main>
    </Layout>
  );
}
