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
  faCog,
  faCloudSun,
} from '@fortawesome/free-solid-svg-icons';
import { MobileNavbarMenu } from './WindowChrome';

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
  | 'FolderColor'
  | 'Settings'
  | 'Calendar'
  | 'Weather'
  | '';

export const getIcon = (name: string, size?: number) => {
  switch (name) {
    case 'Weather': {
      const s = size ?? 48;
      return (
        <div
          style={{ width: s, height: s }}
          className="flex items-center justify-center rounded-[22%] bg-gradient-to-b from-[#3f8fd6] to-[#7cc0f5]"
        >
          <FontAwesomeIcon
            icon={faCloudSun as IconProp}
            style={{ fontSize: s * 0.55, color: '#ffffff' }}
          />
        </div>
      );
    }
    case 'Calendar': {
      const s = size ?? 48;
      const today = new Date();
      const weekday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][
        today.getDay()
      ];
      return (
        <div
          style={{ width: s, height: s }}
          className="flex flex-col rounded-[22%] overflow-hidden bg-white shadow"
        >
          <div
            className="flex items-center justify-center bg-[#ff3b30] font-bold text-white"
            style={{ height: Math.round(s * 0.3), fontSize: Math.max(s * 0.19, 5) }}
          >
            {weekday}
          </div>
          <div
            className="flex-1 flex items-center justify-center font-semibold text-[#1d1d1f]"
            style={{ fontSize: s * 0.5 }}
          >
            {today.getDate()}
          </div>
        </div>
      );
    }
    case 'Settings':
      return (
        <div
          style={{ width: size ?? 48, height: size ?? 48 }}
          className="flex items-center justify-center rounded-[22%] bg-gradient-to-b from-[#8e8e93] to-[#66666b]"
        >
          <FontAwesomeIcon
            icon={faCog as IconProp}
            style={{ fontSize: (size ?? 48) * 0.6, color: '#f2f2f4' }}
          />
        </div>
      );
    case 'FolderColor':
      return (
        <svg
          width={size ?? 56}
          height={size ?? 56}
          viewBox="0 0 100 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 22 q0-7 7-7 h26 q3 0 5 2 l6 6 h37 q7 0 7 7 v36 q0 7-7 7 H13 q-7 0-7-7 Z"
            fill="#3B8FE6"
          />
          <path
            d="M6 30 h88 v36 q0 7-7 7 H13 q-7 0-7-7 Z"
            fill="#5AA8F2"
          />
        </svg>
      );
    case 'Calculator':
      return (
        <svg
          width={size ?? 50}
          height={size ?? 50}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="0" width="100" height="100" rx="22" fill="#1c1c1e" />
          <circle cx="20" cy="20" r="7" fill="#d4d4d2" />
          <circle cx="40" cy="20" r="7" fill="#d4d4d2" />
          <circle cx="60" cy="20" r="7" fill="#d4d4d2" />
          <circle cx="80" cy="20" r="7" fill="#ff9f0a" />
          <circle cx="20" cy="37" r="7" fill="#505050" />
          <circle cx="40" cy="37" r="7" fill="#505050" />
          <circle cx="60" cy="37" r="7" fill="#505050" />
          <circle cx="80" cy="37" r="7" fill="#ff9f0a" />
          <circle cx="20" cy="54" r="7" fill="#505050" />
          <circle cx="40" cy="54" r="7" fill="#505050" />
          <circle cx="60" cy="54" r="7" fill="#505050" />
          <circle cx="80" cy="54" r="7" fill="#ff9f0a" />
          <circle cx="20" cy="71" r="7" fill="#505050" />
          <circle cx="40" cy="71" r="7" fill="#505050" />
          <circle cx="60" cy="71" r="7" fill="#505050" />
          <circle cx="80" cy="71" r="7" fill="#ff9f0a" />
          <rect x="13" y="81" width="34" height="14" rx="7" fill="#505050" />
          <circle cx="60" cy="88" r="7" fill="#505050" />
          <circle cx="80" cy="88" r="7" fill="#ff9f0a" />
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
      return <img src={googleDocs} alt={name} width={size} height={size} />;
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
