import { FC, ReactNode } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
export interface ILayoutProps {

}

const Layout: FC<ILayoutProps & { children: ReactNode }> = ({ children }) => {


  return (
    <div className='flex flex-col w-full h-full min-h-screen'>
      <Navbar />
      <main className='flex-1'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;