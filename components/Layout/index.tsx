import { FC, ReactNode, useRef } from 'react';

export interface ILayoutProps {

}

const Layout: FC<ILayoutProps & { children: ReactNode }> = ({ children }) => {


  return (
    <div>
      <div>Navbar</div>
      <main className='w-full h-full min-h-screen'>
        {children}
      </main>
    </div>
  )
}

export default Layout;