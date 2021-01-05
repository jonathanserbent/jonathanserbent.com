import React from "react";
import {Container} from "react-bootstrap";
import { ProjectsProps, Project } from "./ProjectProps";
import {TopTierProjects} from "./ProjectTiers/TopTierProjects";
import {MidTierProjects} from "./ProjectTiers/MidTierProjects";
import {LowTierProjects} from "./ProjectTiers/LowTierProjects";


export const Projects: React.FC<ProjectsProps> = (props) => {

    // Seperate the projects into a dict based on their rating
    var projectGroups: { [key: number]: Project[]} = [];
    for(var i=1; i<=5; ++i) {
        projectGroups[i] = [];
    }
    for (var p of props.projects) {
        var tempGroup: Project[] = projectGroups[p.rating];
        if(tempGroup == null) {
            tempGroup = [p];
            projectGroups[p.rating] = tempGroup;
        }
        else {
            projectGroups[p.rating].push(p);
        }
    }

    // Generate custom groupings based on ratings
    var lowTierProjectsData = projectGroups[2].concat(projectGroups[1]);
    var midTierProjectsData = projectGroups[3];
    var topTierProjectsData = projectGroups[5].concat(...projectGroups[4]);

    return (
        <Container>
            <h3 className="display-3 text-center">{props.title}</h3>
            <hr className="hr-nice"/>
            <TopTierProjects projects={topTierProjectsData}/>
            <MidTierProjects projects={midTierProjectsData}/>
            <LowTierProjects projects={lowTierProjectsData}/>
            
        </Container>
    );
};