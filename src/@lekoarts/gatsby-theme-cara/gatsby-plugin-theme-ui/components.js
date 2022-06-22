import * as React from "react"
import ProjectCard from "../../../components/project-card"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, target, title, bg, children, ...props }) => (
    <ProjectCard {...props} link={link} target={target} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
}

export default components
