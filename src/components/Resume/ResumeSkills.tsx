import React from "react";
import { Container, Row, Table } from "react-bootstrap";

type ProgrammingLanguageSkill = {
    language: string,
    skillLevel: number // 1-5
}

type LanguageSkill = {
    language: string,
    proficiency: string
}

type ResumeSkillsProps = {
    programmingLanguages: ProgrammingLanguageSkill[],
    languages: LanguageSkill[],
    talents: string[]
}

const starF = "★";
const starE = "☆"

export const ResumeSkills: React.FC<ResumeSkillsProps> = (props) => {
    const lexiSort = (n : ProgrammingLanguageSkill, m : ProgrammingLanguageSkill) => n.language.localeCompare(m.language);
    const skillLevelSort = (n : ProgrammingLanguageSkill, m : ProgrammingLanguageSkill) => m.skillLevel - n.skillLevel;
    var orderedProgramming = props.programmingLanguages.sort(lexiSort).sort(skillLevelSort);

    var programmingHtml = [];
    for (let lang of orderedProgramming) {
        var starRating = "";
        for (var i=0; i<lang.skillLevel; i++){
            starRating = starRating.concat(starF)
        }
        for (i=0; i<5-lang.skillLevel; i++){
            starRating = starRating.concat(starE)
        }
        programmingHtml.push((
            <tr key={lang.language} className="p-0">
                <td>{starRating}</td>
                <td>{lang.language}</td>
                
            </tr>
        ))
    }

    var languageHtml = [];
    for (let lang of props.languages) {
        languageHtml.push(
            <tr key={lang.language} className="p-0">
                <td>{lang.language}</td>
                <td>{lang.proficiency}</td>
            </tr>
        )
    }
    
    return (
    <Container className="mb-1">
        <h2 className="font-weight-light my-0 text-center text-md-left">Skills</h2>
        <Row>
            <Container fluid className="my-0">
                <h5 className="my-0">Programming</h5>
                <Table size="sm" borderless>
                    <tbody className="text-dark">
                        {programmingHtml}
                    </tbody>
                </Table>
            </Container>
            <Container fluid className="my-0">
                <h5 className="my-0">Languages</h5>
                <Table size="sm" borderless>
                    <tbody className="text-dark">
                        {languageHtml}
                    </tbody>
                </Table>
            </Container>
            <Container fluid className="my-0">
                <h5 className="my-0">Talents</h5>
                <p>{props.talents.join(", ")}</p>
            </Container>
        </Row>
    </Container>
);};