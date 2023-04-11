import Head from 'next/head';
import { FC } from 'react';
import { IHomePage } from '../types/home';
import { GetStaticProps } from 'next';
import { getBets } from '../services';
import TableHeader from '../components/TableHeader';
import { Table } from '../styles/home';
import { HEADERS } from '../constants';
import React from 'react';
import TableRow from '../components/TableRow';

const HomePage: FC<IHomePage> = props => {
  const { data } = props;

  return (
    <>
      <Head>
        <title>Betting Site</title>
        <meta name="description" content="Use this bet site to increase your income" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Table>
          <thead>
            <tr>
              {HEADERS.map((header, index) => (
                <TableHeader key={index}>{`${header}${index === 0 ? `: ${data.length}` : ''}`}</TableHeader>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(data => (
              <TableRow key={data.NID} data={data} />
            ))}
          </tbody>
        </Table>
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
