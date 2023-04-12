import Head from 'next/head';
import { FC, useRef, useState } from 'react';
import { IHomePage } from '../types/home';
import { GetStaticProps } from 'next';
import { getBets } from '../services';
import { VISIBLE_DATA_LENGTH } from '../constants';
import React from 'react';
import { DATA } from '../models';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { BasketProvider } from '../context/basket';
import Table from '../components/Table';
import Basket from '../components/Basket';

const HomePage: FC<IHomePage> = props => {
  const { data } = props;

  const [visibleData, setVisibleData] = useState<DATA[]>(data.slice(0, VISIBLE_DATA_LENGTH));
  const [index, setIndex] = useState<number>(0);

  React.useEffect(() => {
    setVisibleData(data.slice(0, VISIBLE_DATA_LENGTH * index + VISIBLE_DATA_LENGTH));
  }, [index]);

  const next = React.useCallback(() => {
    setIndex(prevState => prevState + 1);
  }, [index]);
  const pageEndRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver({
    target: pageEndRef,
    rootMargin: '400px',
    onIntersect: next,
    enabled: !(data.length <= index * VISIBLE_DATA_LENGTH),
  });

  return (
    <>
      <Head>
        <title>Betting Site</title>
        <meta name="description" content="Use this bet site to increase your income" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BasketProvider>
          <Table visibleData={visibleData} size={data.length} />
          <div ref={pageEndRef} />
          <Basket />
        </BasketProvider>
      </main>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  let _data = [];

  try {
    const { data } = await getBets();
    _data = data;
  } catch (err) {
    _data = [];
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return {
      props: {
        data: _data,
      },
    };
  }
};
