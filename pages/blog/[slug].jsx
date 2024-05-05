import { gql } from '@apollo/client';
import { client } from "@/lib/Apollo/apollo";

import BlogSinglePost from '@/components/Blogs/BlogSinglePost';

export default function SingleBlog(props) {
    const { post } = props;

    return (
        <>
            <BlogSinglePost post={post} />
        </>
    );
}

export async function getStaticPaths() {
    const { data } = await client.query({
        query: gql`
        query GetAllPosts {
          posts {
            nodes {
                slug
            }
          }
        }
      `,
    });

    const paths = data.posts.nodes.map((post) => ({
        params: { slug: post.slug },
    }));

    // console.log(paths);

    return { paths, fallback: false };
}


export async function getStaticProps({ params }) {
    const { data } = await client.query({
        query: gql`
        query GetPostBySlug($id: ID!) {
          post(id: $id, idType: SLUG) {
            title
            content
            date
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            categories {
              nodes {
                name
                link
              }
            }
          }
        }
      `,
        variables: { id: params.slug },
    });

    // यदि पोस्ट नहीं मिला, तो 404 पेज दिखाएं
    if (!data.post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post: data.post, // यहाँ परिवर्तन किया गया है
        },
    };
}
