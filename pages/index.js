import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import { getRickMortyApi } from '../lib/api';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const apiRickMorty = await getRickMortyApi();
  return {
    props: {
      allPostsData,
      apiRickMorty
    },
  };
}




export default function Home({ allPostsData, apiRickMorty }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! I am Sean, I am a software developer</p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, content }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={"posts/" + id}>{title}</Link>
              <br />
              {id}
              <br />
              {date}
              <br />
           
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}