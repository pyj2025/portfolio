import React from 'react';

interface WindowConfig {
  Component: React.ComponentType;
  isOpen: boolean;
}

const WindowsContent: React.FC<{
  windows: WindowConfig[];
}> = ({ windows }) => {
  return (
    <>
      {windows.map(
        ({ Component, isOpen }, index) => isOpen && <Component key={index} />
      )}
    </>
  );
};

export default WindowsContent;
