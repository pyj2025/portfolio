import finder from '../image/icons/finder.png';
import vsCode from '../image/icons/vsCode.png';
import folder from '../image/icons/folder.png';
import googleDocs from '../image/icons/googleDocs.png';
import github from '../image/icons/github.png';
import linkedin from '../image/icons/linkedin.png';
import facebook from '../image/icons/facebook.png';
import gmail from '../image/icons/gmail.png';
import file from '../image/icons/file.png';
import codeFile from '../image/icons/codeFile.png';
import terminal from '../image/icons/terminal.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faFolder,
  faFileAlt,
  faFileCode,
} from '@fortawesome/free-solid-svg-icons';
import { MobileNavbarMenu } from '../GlobalStyle';

export const SMALL_ICON_SIZE = 16;

type NavIconType = 'File' | 'Folder' | 'CodeFile';

const NAV_ICON_MAP: Record<NavIconType, IconProp> = {
  File: faFileAlt as IconProp,
  Folder: faFolder as IconProp,
  CodeFile: faFileCode as IconProp,
};

export const getNavIcon = (icon: NavIconType, focused: boolean) => (
  <FontAwesomeIcon
    icon={NAV_ICON_MAP[icon]}
    className={focused ? 'text-white' : 'text-[#0a84ff]'}
    style={{ fontSize: 14 }}
  />
);

export type IconType =
  | 'About'
  | 'Skills'
  | 'Projects'
  | 'Resume'
  | 'Github'
  | 'Linkedin'
  | 'Facebook'
  | 'Email'
  | 'File'
  | 'Folder'
  | 'CodeFile'
  | 'Terminal'
  | 'Calculator'
  | '';

export const getIcon = (name: string, size?: number) => {
  switch (name) {
    case 'Calculator':
      return (
        <svg
          width={size ?? 50}
          height={size ?? 50}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="3" width="94" height="94" rx="22" fill="#1c1c1e" />
          <rect x="15" y="13" width="70" height="15" rx="4" fill="#0a0a0a" />
          <rect x="15" y="34" width="48" height="52" rx="6" fill="#3a3a3c" />
          <rect x="67" y="34" width="18" height="52" rx="6" fill="#ff9f0a" />
        </svg>
      );
    case 'About':
      return <img src={finder} alt={name} width={size} height={size} />;
    case 'Skills':
      return <img src={vsCode} alt={name} width={size} height={size} />;
    case 'Folder':
    case 'Projects':
      return <img src={folder} alt={name} width={size} height={size} />;
    case 'Resume':
      return <img src={googleDocs} alt={name} />;
    case 'Github':
      return <img src={github} alt={name} />;
    case 'Linkedin':
      return <img src={linkedin} alt={name} />;
    case 'Facebook':
      return <img src={facebook} alt={name} />;
    case 'Email':
      return <img src={gmail} alt={name} />;
    case 'File':
      return <img src={file} alt={name} width={size} height={size} />;
    case 'CodeFile':
      return <img src={codeFile} alt={name} width={size} height={size} />;
    case 'Terminal':
      return <img src={terminal} alt={name} width={size} height={size} />;
    default:
      return;
  }
};

export const getMobileNavbarMenuIcon = (name: string) => {
  switch (name) {
    case 'Folder':
      return <MobileNavbarMenu src={folder} alt={name} />;
    case 'File':
      return <MobileNavbarMenu src={file} alt={name} />;
    case 'CodeFile':
      return <MobileNavbarMenu src={codeFile} alt={name} />;
    default:
      return;
  }
};
