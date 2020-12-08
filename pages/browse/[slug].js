import React from 'react'
import Layout from '../../components/Layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';


const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function getStaticPaths() {
      let data = await client.getEntries({
          content_type: 'singleTop',
      });

    return {
        paths: data.items.map((singleSlug) => ({
            params: { slug: singleSlug.fields.slug },
        })), 
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    let data = await client.getEntries({  
        content_type: 'singleTop',
        'fields.slug': params.slug
  });

  return {
      props: {
          singleTop: data.items[0],
      }
  }
}

export const config = { amp: true }

const singleTop = ({singleTop}) => {
    if (!singleTop) return <h1>404</h1>
    return (
        <Layout>
            {singleTop.fields.title}
            {documentToReactComponents(singleTop.fields.description, {
                renderNode: {
                    [BLOCKS.EMBEDDED_ASSET]: node => (
                        <amp-img src={`https:${node.data.target.fields.file.url}`} width={node.data.target.fields.file.details.image.width} height={node.data.target.fields.file.details.image.height} />
                        )
                }
            })}
        </Layout>
    )
}

export default singleTop
