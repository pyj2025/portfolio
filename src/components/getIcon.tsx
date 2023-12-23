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

export const SMALL_ICON_SIZE = 16;

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
  | '';

export const getIcon = (name: string, size?: number) => {
  switch (name) {
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
