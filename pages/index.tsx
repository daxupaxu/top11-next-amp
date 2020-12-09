import React from 'react'
import Head from 'next/head';

import Layout from '../components/Layout'


export const config = { amp: true }

const Home = () => {
    return (
    <Layout title="Top11 | Home">
          <h1>Top11</h1>
    </Layout>
    )
}

export default Home
