
import { gql } from '@apollo/client';
import { client } from "@/lib/Apollo/apollo";

export default function Blog({posts}) {
    console.log(JSON.stringify(posts));
    return (
        <>
            <section className="">
                blogs
            </section>
        </>
    );
}

export async function getStaticProps() {
    
    const result = await client.query({
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
                uri
              }
            }
          }
        }
      }
      `,
    });

    // const blogs = response.data.posts.map(({nodes}) => nodes);

    console.log('blogs', result);
    
    return {
        props: {
            posts: result.data.posts.nodes,
        }
    };
}
