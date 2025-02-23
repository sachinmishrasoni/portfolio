import { IconList } from "../utils/iconList";

const skills = {
    professional: [
        { label: 'Communication', icon: IconList.communication },
        { label: 'Team Work', icon: IconList.teamWork },
        { label: 'Leadership', icon: IconList.leadership },
        { label: 'Problem Solving', icon: IconList.problemSolving },
        { label: 'Time Management', icon: IconList.timeManagement }, 
    ],
    language: [
        { label: 'C', icon: IconList.cLang },
        { label: 'C++', icon: IconList.cPlusPlus },
        { label: 'Python', icon: IconList.python },
        { label: 'JavaScript', icon: IconList.javascript },
        { label: 'TypeScript', icon: IconList.typescript },
    ],
    frontend: [
        { label: 'HTML', icon: IconList.html },
        { label: 'CSS', icon: IconList.css },
        { label: 'React', icon: IconList.react },
        { label: 'Redux', icon: IconList.redux },
        { label: 'Next.js', icon: IconList.nextjs },
        { label: 'Tailwind', icon: IconList.tailwind },
        { label: 'Bootstrap', icon: IconList.bootstrap },
        { label: 'Angular', icon: IconList.angular },
        { label: 'Ant Design', icon: IconList.antDesign },
        { label: 'Mui', icon: IconList.mui },
    ],
    backend: [
        { label: 'Node.js', icon: IconList.nodejs },
        { label: 'Express', icon: IconList.express },
        { label: 'Nest.js', icon: IconList.nextjs },
    ],
    database: [
        { label: 'MySQL', icon: IconList.mysql },
        { label: 'MongoDB', icon: IconList.mongodb },
    ],
    // cloud: [
    //     { label: 'Git', icon: IconList.git },
    //     { label: 'GitHub', icon: IconList.github },
    // ],
    other: [
        { label: 'Git', icon: IconList.git },
        { label: 'GitHub', icon: IconList.github },
        { label: 'Postman', icon: IconList.postman },
        { label: 'Jira', icon: IconList.jira },
        { label: 'Photoshop', icon: IconList.photoshop },
        { label: 'Figma', icon: IconList.figma },
    ],
};

export default skills;