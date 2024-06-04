import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import JournalsRecomment from '@site/src/components/JournalsRecommend';
import FAQ from '@site/src/components/FAQ';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './index.module.css';
import Heading from '@theme/Heading';

const IndexTitle =translate({
  message: 'AI-Curated, Selected publications',
})

const tagline = translate({
  id: 'homepage.tagline',
  message: '"Informed AI News" is the AI curates publications, ensuring you only gain the most valuable information. To eliminate information asymmetry and break through the limits of information cocoons.'
})

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="md:text-5xl bg-gradient-to-r from-green-300 via-white-300 to-red-300 bg-clip-text font-extrabold text-transparent sm:text-4xl">
          <Translate>AI-Curated, Selected publications</Translate>
        </Heading>
        <p className="md:text-xl sm:text-base">{tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg hover:-rotate-2 hover:scale-110 focus:outline-none focus:rin"
            to="/docs/guides">
            <Translate>Get Start Free</Translate>
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
        <FAQ />
      </main>
    </Layout>
  );
}
