import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  Hero,
  Services,
  Work,
  Experience,
  Writing,
  Contact,
} from '@site/src/components/home/sections';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Tyler Thompson is a senior software engineer and founder of Thompson Software. Custom web and mobile apps, SaaS products, and browser extensions — with the work to prove it.">
      <Hero />
      <main>
        <Services />
        <Work />
        <Experience />
        <Writing />
        <Contact />
      </main>
    </Layout>
  );
}
