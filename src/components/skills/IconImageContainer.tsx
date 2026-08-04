interface IconImageContainerProps {
  children: React.ReactNode;
}

const IconImageContainer: React.FC<IconImageContainerProps> = ({ children }) => (
  <div className="flex flex-col w-12 h-12 bg-white rounded-lg justify-center items-center">
    {children}
  </div>
);

export default IconImageContainer;
