
export type Project = {
    title: string,
    description: string,
    additionalParagraphs: string[],
    languages: string[],
    tools: string[],
    tags: string[],
    gitURL: string,
    deployedURL: string,
    rating: number, //1-5
    imageURL: string,
    media: string[],
    videoURL: string

};

export type ProjectsProps = {
    projects: Project[]
    title ?: string
};