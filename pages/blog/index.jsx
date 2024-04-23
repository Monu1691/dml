
import { gql } from '@apollo/client';
import { client } from "@/lib/Apollo/apollo";

import BlogCards from '@/components/Blogs/BlogCards';

export default function Blog(props) {
  const { posts } = props;
    return (
        <>
          <BlogCards posts={posts} />
        </>
    );
}

export async function getStaticProps() {
    
    const {data} = await client.query({
        query: gql`
      query GetAllPosts {
        posts {
          nodes {
            title
            content
            uri
            date
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
      `,
    });

    // console.log(data);
    
    return {
        props: {
            posts: data.posts.nodes,
        }
    };
}
