import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Enterprise Engineering',
    description: (
      <>
        Leading monitoring and observability work at Northwestern Mutual with a
        focus on scalable systems, architecture, and delivery quality.
      </>
    ),
  },
  {
    title: 'Founder Mindset',
    description: (
      <>
        Built and operated products end-to-end, including Live From Wisco and
        Julian Storage, from idea through production and growth.
      </>
    ),
  },
  {
    title: 'Hands-On Technical Breadth',
    description: (
      <>
        Shipping across web and mobile with JavaScript, TypeScript, Node.js,
        AWS, and a practical full-stack approach to product development.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className="padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
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
