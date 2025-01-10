import React from 'react';
import { DraggableData, Position, ResizableDelta } from 'react-rnd';
import { Window, WindowBody, WindowBodyContent } from '../../../GlobalStyle';
import {
  AboutIndexType,
  WindowPositionSetting,
  WindowSizeSetting,
} from '../../../types';
import useScreenSize, { TABLET_MAX_WIDTH } from '../../../utils/useScreenSize';
import WindowTopbar from '../../../components/WindowTopbar';
import useWindowsStore from '../../../utils/useWindowsStore';
import Info from '../../../components/about/Info';
import Experience from '../../../components/about/Experience';
import Education from '../../../components/about/Education';
import AboutNavbar from '../../../components/about/AboutNavbar';
import Certifications from '../../../components/about/Certifications';
import GenAIFundamentals from '../../../components/about/certification/GenAIFundamentals';

const BASIC_COMPONENTS: Record<string, React.ComponentType> = {
  Info: Info,
  Education: Education,
  GenAI: GenAIFundamentals,
};

interface ExperienceWrapperProps {
  showDate: boolean;
}

const ExperienceWrapper: React.FC<ExperienceWrapperProps> = ({ showDate }) => (
  <Experience showDate={showDate} />
);

interface CertificationsWrapperProps {
  setIndex: (index: AboutIndexType) => void;
}

const CertificationsWrapper: React.FC<CertificationsWrapperProps> = ({
  setIndex,
}) => <Certifications toggleIndex={setIndex} />;

interface AboutContentProps {
  index: AboutIndexType;
  setIndex: (index: AboutIndexType) => void;
  showDate: boolean;
}

const AboutContent: React.FC<AboutContentProps> = ({
  index,
  setIndex,
  showDate,
}) => {
  if (index === 'Menu') {
    return null;
  }

  if (index === 'Experience') {
    return (
      <WindowBodyContent>
        <ExperienceWrapper showDate={showDate} />
      </WindowBodyContent>
    );
  }

  if (index === 'Certifications') {
    return (
      <WindowBodyContent>
        <CertificationsWrapper setIndex={setIndex} />
      </WindowBodyContent>
    );
  }

  const Component = BASIC_COMPONENTS[index];
  if (Component) {
    return (
      <WindowBodyContent>
        <Component />
      </WindowBodyContent>
    );
  }

  return null;
};

const AboutWindow: React.FC = () => {
  const { width, height } = useScreenSize();
  const { focusedWindow, setFocusedWindow } = useWindowsStore((state) => state);

  const aboutRef = React.useRef<any>();

  const [aboutSize, setAboutSize] = React.useState<WindowSizeSetting>({
    width: 500,
    height: 300,
  });
  const [aboutPosition, setAboutPosition] =
    React.useState<WindowPositionSetting>({
      x: 20,
      y: 20,
    });

  const [aboutPrevSetting, setAboutPrevSetting] = React.useState<
    (WindowSizeSetting & WindowPositionSetting) | null
  >(null);

  const [index, setIndex] = React.useState<AboutIndexType>('Info');
  const [isMobileWindow, setIsMobileWindow] = React.useState<boolean>(false);
  const [showDate, setShowDate] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (width < TABLET_MAX_WIDTH) {
      setAboutSize({
        width,
        height: height - 80 - 25,
      });
      setAboutPosition({
        x: 0,
        y: 0,
      });
      setIsMobileWindow(true);
    } else {
      setIsMobileWindow(false);
    }
  }, [height, width]);

  React.useEffect(() => {
    // 150 is menu
    if (aboutSize.width - 150 >= 470) {
      setShowDate(true);
    } else {
      setShowDate(false);
    }
  }, [aboutSize.width, showDate]);

  const focusAboutWindow = React.useCallback(() => {
    setFocusedWindow('About');
  }, [setFocusedWindow]);

  const handleClick = React.useCallback(
    (name: AboutIndexType) => {
      setIndex(name);
    },
    [setIndex]
  );

  return (
    <Window
      id="About"
      ref={aboutRef}
      size={{ width: aboutSize.width, height: aboutSize.height }}
      position={{ x: aboutPosition.x, y: aboutPosition.y }}
      dragHandleClassName="topbar"
      minWidth={isMobileWindow ? width : 500}
      minHeight={300}
      style={{ zIndex: focusedWindow === 'About' ? 10 : undefined }}
      onDragStart={(_e: any, _data: DraggableData) => {
        focusAboutWindow();
      }}
      onDragStop={(_e: any, data: DraggableData) => {
        setAboutPosition({ x: data.x, y: data.y });
      }}
      onResizeStop={(
        _e: MouseEvent | TouchEvent,
        _dir: any,
        ref: any,
        _delta: ResizableDelta,
        position: Position
      ) => {
        const newWidth = Number(
          ref.style.width.substring(0, ref.style.width.indexOf('p'))
        );
        const newHeight = Number(
          ref.style.height.substring(0, ref.style.height.indexOf('p'))
        );

        setAboutSize({
          width: newWidth,
          height: newHeight,
        });
        setAboutPosition({ x: position.x, y: position.y });
      }}
    >
      <WindowTopbar
        title="About"
        windowRef={aboutRef}
        size={aboutSize}
        setSize={setAboutSize}
        position={aboutPosition}
        setPosition={setAboutPosition}
        prevSetting={aboutPrevSetting}
        setPrevSetting={setAboutPrevSetting}
        isMobileWindow={isMobileWindow}
      />
      <WindowBody onClick={focusAboutWindow}>
        <AboutNavbar index={index} onClick={handleClick} />
        <AboutContent index={index} setIndex={setIndex} showDate={showDate} />
      </WindowBody>
    </Window>
  );
};

export default AboutWindow;
