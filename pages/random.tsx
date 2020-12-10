import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components'


import Layout from '../components/Layout'
import { fetchEntries } from '../utils/contentfulTopList';


const Header = styled.header`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h2 {
        padding: 2rem;
    }
    span {
        padding: 2rem;
    }
`
const Main = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const H1 = styled.h1`
    text-align: center;
`
export const config = { amp: true }

export async function getStaticProps(): Promise<any> {
    const res: any = await fetchEntries()
    const topList = res.map((singleTop: any) => {
      return singleTop.fields
    })
    return {
      props: {
        topList,
      }
    }
  }

  interface Props {
      topList: any[]
  }

const RandomPage = ( { topList }:Props) => {
    const random = topList[Math.floor(Math.random() * topList.length)] 
    return (
        <Layout title="Top 11 | Random">
        <H1>
            Random Top for you is:
        </H1>
        <Header>
            <h2>{random.title}</h2>
            <span>{random.dateAdded}</span>
        </Header>
        <Main>
            {documentToReactComponents(random.description)}
        </Main>
        </Layout>
    )
}

export default RandomPage
