import React from "react"
import { Heading, Flex } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Seo from "../@lekoarts/gatsby-theme-minimal-blog/components/seo"

const ProjectsPage = () => {
  
  return (
    <Layout>
      <Seo title="Projects" />
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Heading as="h1" variant="styles.h1" sx={{ marginY: 2 }}>
          Проекты
        </Heading>
      </Flex>
      
     
      
      

    </Layout>
  )
}

export default ProjectsPage