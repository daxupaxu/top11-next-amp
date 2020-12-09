import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Layout from '../components/Layout';
import { fetchEntries } from '../utils/contentfulTopList';


const Item = styled.div`
    :hover {
        background-color: #89888a;
    }
    a {
        font-size: 24px;
        text-decoration: none;
        justify-content: space-between;
        width: 100%;
        display: flex;
        color: #000000;
        padding: 25px;
        :hover {
            color: #FFFFFF;
        }
    }
    p {
        padding: 2rem;
    }
`


export const config = { amp: true }

export async function getStaticProps() {
    const res: any = await fetchEntries()
    const topList = res.map((singleTop: any) => {
      return singleTop
    })
    return {
      props: {
        topList,
      }
    }
  }
  
  interface Props {
      singleTop: {}
      topList: any[]
  }

const BrowsePage = ({ topList }: Props) => {
    return (
        <Layout title='Top 11 | Browse'>
            {topList.map((singleTop) => (
            <Item key={singleTop.sys.id}>
                <Link href={`/browse/${singleTop.fields.slug}`}>
                    <a>{singleTop.fields.title}</a>
                </Link> 
            </Item>
            ))}
        </Layout>
    )
} 

export default BrowsePage
