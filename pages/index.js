import { gql } from '@apollo/client';
import { client } from "@/lib/Apollo/apollo";

import HomePage from '@/components/HomePage';

export default function Home(props) {
  const { homePage } = props;
  // console.log(homePage);
  return (
    <>
      <HomePage homePage={homePage}/>
    </>
  );
}

export async function getStaticProps() {
    
  const {data} = await client.query({
      query: gql`
        query getHomePage($id: ID!) {
          page(id: $id, idType: URI) {
            homePage {
              homeBannerSliderRepeater {
                homeBannerTitle
                homeBannerDescription
                homeBannerImage {
                  node {
                    mediaItemUrl
                  }
                }
              }
              
              whatWeDoTitle
              whatWeDoDescription
              whatWeDoRepeater {
                whatWeDoImage {
                  node {
                    mediaItemUrl
                  }
                }
                whatWeDoImageName
              }

              ourExpertiseTitle
              ourExpertiseDescription
              ourExpertiseRepeater {
                image {
                  node {
                    mediaItemUrl
                  }
                }
                imageName
              }

            }
          }
        }
    `,
    variables: { id: "/" },
  });

  // console.log(data);
  
  return {
      props: {
        homePage: data.page.homePage || null,
      }
  };
}
