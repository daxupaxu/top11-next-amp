import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import Layout from '../../components/Layout';
import Offline from '../offline';


interface Props {
    singleTop: any
}

export const config = { amp: true }

const singleTop = ({singleTop}: Props) => {
    if (!singleTop) return <Offline />
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


export async function getStaticPaths(): Promise<any> {
    let data = await client.getEntries({
        content_type: 'singleTop',
    });

  return {
      paths: data.items.map((singleSlug: any) => ({
          params: { slug: singleSlug.fields.slug },
      })), 
      fallback: true,
  };
}


const client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })  

export async function getStaticProps({ params }: any): Promise<any> {
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

export default singleTop
