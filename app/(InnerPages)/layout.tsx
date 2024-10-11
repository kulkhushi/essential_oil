type InnerLayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: InnerLayoutProps) => {
  return <>{children}</>;
};

export default Layout;
