import { IconType } from 'react-icons';
import {
  SiJavascript, SiTypescript, SiPython, SiReact, SiRedux, SiMui, SiChakraui, SiTailwindcss,
  SiBootstrap, SiHtml5, SiDotnet, SiBlazor, SiNodedotjs, SiSpringboot, SiSpring, SiMysql,
  SiAmazondynamodb, SiMongodb, SiOpensearch, SiVite, SiJest, SiJira, SiTrello, SiIntellijidea,
  SiWebstorm, SiXcode, SiAndroidstudio, SiGithub, SiGitlab, SiBitbucket, SiApache, SiServerless,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa6';
import {
  TbBrandAzure, TbBrandCSharp, TbBrandVscode, TbBrandOffice, TbBroadcast, TbPlugConnected,
  TbApi, TbRobot, TbMessages, TbSql, TbTopologyStar3, TbUsers, TbCode, TbPalette, TbServer,
  TbBrain, TbCloudComputing, TbDatabase, TbTerminal2, TbMessageCircle, TbBulb, TbClock,
  TbPuzzle, TbHeartHandshake, TbArrowsShuffle,
} from 'react-icons/tb';
import { SkillCategory } from '@/types/cv.types';

export interface SkillIcon {
  Icon: IconType;
  /** Brand colour. Omit for logos that are black or white, so they follow the theme. */
  color?: string;
}

const skillIcons: Record<string, SkillIcon> = {
  // Languages
  JavaScript: { Icon: SiJavascript, color: '#F0DB4F' },
  TypeScript: { Icon: SiTypescript, color: '#3178C6' },
  Java: { Icon: FaJava, color: '#E76F00' },
  'C#': { Icon: TbBrandCSharp, color: '#9B4F96' },
  Python: { Icon: SiPython, color: '#3776AB' },
  // Frontend
  React: { Icon: SiReact, color: '#61DAFB' },
  'React Native': { Icon: SiReact, color: '#61DAFB' },
  'Blazor WebAssembly (.NET 9)': { Icon: SiBlazor, color: '#512BD4' },
  Redux: { Icon: SiRedux, color: '#764ABC' },
  'Material UI': { Icon: SiMui, color: '#007FFF' },
  'Chakra UI': { Icon: SiChakraui, color: '#319795' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#06B6D4' },
  Bootstrap: { Icon: SiBootstrap, color: '#7952B3' },
  'HTML/CSS': { Icon: SiHtml5, color: '#E34F26' },
  // Backend
  'Node.js': { Icon: SiNodedotjs, color: '#5FA04E' },
  'ASP.NET': { Icon: SiDotnet, color: '#512BD4' },
  'Spring Boot': { Icon: SiSpringboot, color: '#6DB33F' },
  'Spring MVC': { Icon: SiSpring, color: '#6DB33F' },
  'Spring MicroService': { Icon: SiSpring, color: '#6DB33F' },
  'REST APIs': { Icon: TbApi, color: '#0EA5E9' },
  WebSocket: { Icon: TbPlugConnected, color: '#F59E0B' },
  SignalR: { Icon: TbBroadcast, color: '#512BD4' },
  // AI/ML
  'Azure AI Foundry': { Icon: TbBrandAzure, color: '#0078D4' },
  'AI Agent Development': { Icon: TbRobot, color: '#A855F7' },
  'Bot Framework': { Icon: TbMessages, color: '#0078D4' },
  // Cloud & DevOps
  Azure: { Icon: TbBrandAzure, color: '#0078D4' },
  'Azure Communication Services': { Icon: TbBrandAzure, color: '#0078D4' },
  'Azure DevOps': { Icon: TbBrandAzure, color: '#0078D4' },
  AWS: { Icon: FaAws, color: '#FF9900' },
  Serverless: { Icon: SiServerless, color: '#FD5750' },
  Apache: { Icon: SiApache, color: '#D22128' },
  GitHub: { Icon: SiGithub },
  GitLab: { Icon: SiGitlab, color: '#FC6D26' },
  Bitbucket: { Icon: SiBitbucket, color: '#0052CC' },
  // Databases
  MySQL: { Icon: SiMysql, color: '#4479A1' },
  SQL: { Icon: TbSql, color: '#4479A1' },
  DynamoDB: { Icon: SiAmazondynamodb, color: '#4053D6' },
  GraphDB: { Icon: TbTopologyStar3, color: '#14B8A6' },
  MongoDB: { Icon: SiMongodb, color: '#47A248' },
  'OpenSearch (Elasticsearch)': { Icon: SiOpensearch, color: '#005EB8' },
  // Tools
  Vite: { Icon: SiVite, color: '#646CFF' },
  Jest: { Icon: SiJest, color: '#C21325' },
  Jira: { Icon: SiJira, color: '#0052CC' },
  Trello: { Icon: SiTrello, color: '#0079BF' },
  'IntelliJ IDEA': { Icon: SiIntellijidea },
  WebStorm: { Icon: SiWebstorm },
  'Visual Studio Code': { Icon: TbBrandVscode, color: '#007ACC' },
  Xcode: { Icon: SiXcode, color: '#147EFB' },
  'Android Studio': { Icon: SiAndroidstudio, color: '#3DDC84' },
  'Microsoft Office': { Icon: TbBrandOffice, color: '#D83B01' },
  // Soft skills
  Adaptability: { Icon: TbArrowsShuffle },
  Communication: { Icon: TbMessageCircle },
  'Critical Thinking': { Icon: TbBulb },
  'Problem-Solving': { Icon: TbPuzzle },
  'Interpersonal Skills': { Icon: TbHeartHandshake },
  'Time Management': { Icon: TbClock },
  Creativity: { Icon: TbPalette },
};

export const getSkillIcon = (skill: string): SkillIcon => skillIcons[skill] ?? { Icon: TbCode };

export const categoryIcons: Record<SkillCategory, IconType> = {
  Languages: TbCode,
  Frontend: TbPalette,
  Backend: TbServer,
  'AI/ML': TbBrain,
  'Cloud & DevOps': TbCloudComputing,
  Databases: TbDatabase,
  Tools: TbTerminal2,
  'Soft Skills': TbUsers,
};
