import React, { useCallback, useEffect, useState } from 'react';
import Layout from '@theme/Layout';

import { Link, PuzzleIcon, AlgorithmIcon, OOPIcon, FxIcon, ColumnsIcon } from '../components';

import styles from './index.module.css';

export default function Home() {
  const [urlPrefix, setUrlPrefix] = useState('');
  const createURL = useCallback(
    url => `/docs${urlPrefix === 'current' ? '' : `/${urlPrefix}`}${url}`,
    [urlPrefix],
  );

  useEffect(() => {
    const currentVersion = localStorage?.getItem('docs-preferred-version-default') ?? 'current';

    setUrlPrefix(prevState => (prevState !== currentVersion ? currentVersion : prevState));
  });

  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.linksContainer}>
          <Link
            url={createURL('/building-blocks-of-oop-part-1/programming_paradigm')}
            title="Building Blocks of OOP, Part 1, Part 2"
          >
            <OOPIcon />
          </Link>
          <Link
            url={createURL('/functional-programming/fp_introduction')}
            title="Functional Programming"
          >
            <FxIcon />
          </Link>
          <Link url={createURL('/design-patterns/design_patterns')} title="Design Patterns">
            <PuzzleIcon />
          </Link>
          <Link url={createURL('/solid-principles/introduction')} title="SOLID Principles">
            <ColumnsIcon />
          </Link>
          <Link
            url={createURL('/algorithms-and-data-structures-part-1/elementary_data_structures')}
            title="Algorithms and Data Structures, Part 1, Part 2"
          >
            <AlgorithmIcon />
          </Link>
        </div>
      </main>
    </Layout>
  );
}
