import { MdConnectWithoutContact, MdPsychologyAlt, MdDiversity3 } from "react-icons/md";
import { WiTime9 } from "react-icons/wi";
import { HiUserGroup } from "react-icons/hi2";
import { FaCuttlefish } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandHtml5 } from "react-icons/tb";
import { RiCss3Fill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiAngular } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaJira } from "react-icons/fa";
import { LuFigma } from "react-icons/lu";
import { FaRegCircleDot } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { TbBrandTelegram } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { FaAppStore } from "react-icons/fa";
import { BsLayoutWtf } from "react-icons/bs";
import { GoDatabase } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa";
import { SiVitest } from "react-icons/si";
import { IoIosArrowUp } from "react-icons/io";
import { TbArrowBigUpLine } from "react-icons/tb";
import { PiStarFourBold } from "react-icons/pi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";

const IconList = {
    communication: MdConnectWithoutContact,
    teamWork: MdDiversity3,
    leadership: HiUserGroup,
    problemSolving: MdPsychologyAlt,
    timeManagement: WiTime9,
    cLang: FaCuttlefish,
    cPlusPlus: SiCplusplus,
    python: FaPython,
    html: TbBrandHtml5,
    css: RiCss3Fill,
    javascript: IoLogoJavascript,
    typescript: TbBrandTypescript,
    react: FaReact,
    redux: SiRedux,
    mui: SiMui,
    nextjs: TbBrandNextjs,
    tailwind: SiTailwindcss,
    bootstrap: FaBootstrap,
    angular: SiAngular,
    antDesign: SiAntdesign,
    nodejs: TbBrandNodejs,
    express: SiExpress,
    mysql: TbBrandMysql,
    mongodb: SiMongodb,
    git: FaGitAlt,
    github: FaGithubAlt,
    photoshop: SiAdobephotoshop,
    postman: SiPostman,
    jira: FaJira,
    figma: LuFigma,
    circleDot: FaRegCircleDot,
    settings: FiSettings,
    linkedin: FaLinkedinIn,
    facebook: FaFacebookF,
    instagram: FaInstagram,
    user: LuUserRound,
    email: MdOutlineMail,
    phone: IoCallOutline,
    whatsapp: IoLogoWhatsapp,
    telegram: TbBrandTelegram,
    twitter: FaXTwitter,
    location: IoLocationOutline,
    copyright: FaRegCopyright,
    copy: MdOutlineContentCopy,
    web: MdWeb,
    app: FaAppStore,
    layout: BsLayoutWtf,
    database: GoDatabase,
    backend: FaLaptopCode,
    testing: SiVitest,
    arrowUp: IoIosArrowUp,
    bigArrowUp: TbArrowBigUpLine,
    star: PiStarFourBold,
    eye: MdOutlineRemoveRedEye,
    google: FaGoogle,
    password: TbPasswordUser
};

type IconName = keyof typeof IconList;

export { IconList };
export type { IconName };