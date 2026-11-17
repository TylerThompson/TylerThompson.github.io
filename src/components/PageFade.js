import React from 'react';
import {useLocation} from '@docusaurus/router';

export default function PageFade({children}) {
  const {pathname} = useLocation();
  return (
    <div key={pathname} className="page-fade">
      {children}
    </div>
  );
}
