import { useParams } from "react-router-dom";
import { TopTierPage } from "../components/Projects/TopTierPage";
import { default as ProjectsData} from "../data/Projects/Projects.json";
import NotFound from "./NotFound";

interface ProjectParams {
    id: string
}

const Project = () => {
    let { id } = useParams<ProjectParams>();
    var filteredProjects = ProjectsData.projects.filter(p => p.title===id && p.rating>=4);
    if (filteredProjects.length === 0) {
        return NotFound();
    }

    var specificProject = filteredProjects[0];

    return (<TopTierPage {...specificProject}/>)
};

export default Project;