import React from 'react';
import Layout from '@theme-original/Layout';
import PageFade from '@site/src/components/PageFade';

export default function LayoutWrapper(props) {
  return (
    <Layout {...props}>
      <PageFade>{props.children}</PageFade>
    </Layout>
  );
}
