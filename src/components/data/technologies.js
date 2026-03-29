import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaPhp, FaFigma, FaAws } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiFlutter, SiPython } from 'react-icons/si';
import { BiLogoTypescript, BiLogoPostgresql } from 'react-icons/bi';

const iconCls = 'size-6 text-emerald-400/95';

export const Html = { icon: <FaHtml5 className={iconCls} />, label: 'HTML' };
export const Css = { icon: <FaCss3Alt className={iconCls} />, label: 'CSS' };
export const JavaScript = { icon: <IoLogoJavascript className={iconCls} />, label: 'JavaScript' };
export const Tailwind = { icon: <SiTailwindcss className={iconCls} />, label: 'Tailwind CSS' };
export const Next = { icon: <SiNextdotjs className={iconCls} />, label: 'Next.js' };
export const ReactJS = { icon: <FaReact className={iconCls} />, label: 'React.js' };
export const TypeScript = { icon: <BiLogoTypescript className={iconCls} />, label: 'TypeScript' };
export const NodeJS = { icon: <FaNodeJs className={iconCls} />, label: 'Node.js' };
export const Express = { icon: <SiExpress className={iconCls} />, label: 'Express.js' };
export const Figma = { icon: <FaFigma className={iconCls} />, label: 'Figma' };
export const PHP = { icon: <FaPhp className={iconCls} />, label: 'PHP' };
export const SQL = { icon: <BiLogoPostgresql className={iconCls} />, label: 'SQL' };
export const MongoDB = { icon: <SiMongodb className={iconCls} />, label: 'MongoDB' };
export const Flutter = { icon: <SiFlutter className={iconCls} />, label: 'Flutter' };
export const Git = { icon: <FaGitAlt className={iconCls} />, label: 'Git' };
export const AWS = { icon: <FaAws className={iconCls} />, label: 'AWS' };
export const Python = { icon: <SiPython className={iconCls} />, label: 'Python' };
