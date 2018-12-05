import React from 'react';
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby';

const About = ({ location }) => (
    <StaticQuery 
        query={graphql`
            query markDownQuery {
                allMarkdownRemark {
                 totalCount
                    edges {
                        node {
                            excerpt
                            frontmatter {
                                slug
                                title
                                date(formatString: "MMMM DD, YYYY")
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <>  
                <Layout location={location}>
                <h1>About Us</h1>
                <p>
                Lorem ipsum dolor amet ugh gluten-free actually salvia. Chambray cliche vexillologist,
                succulents aesthetic vape thundercats. Cred wayfarers irony, intelligentsia pop-up
                waistcoat pour-over flexitarian distillery DIY hoodie twee actually banjo. Occupy viral
                pug sustainable adaptogen.
                </p>

                </Layout>
                
            </>
        )}
    />
)

export default About;