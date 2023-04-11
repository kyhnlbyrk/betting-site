import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { FC } from 'react';
import { IHomePage } from '../types/home';
import { GetStaticProps } from 'next';
import { getBets } from '../services';

const HomePage: FC<IHomePage> = props => {
  const { data } = props;


  console.log('data = ', data);

  const Title = styled.h1`
    color: yellow;
  `;
  return (
    <>
      <Head>
        <title>Betting Site</title>
        <meta name="description" content="Use this bet site to increase your income" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
      </main>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  let _data = [];

  const data = await getBets();

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
