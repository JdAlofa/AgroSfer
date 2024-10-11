'use client'

import { useState } from "react";
import TopNav from '@/components/ui/TopNav'
import Sidebar from '@/components/ui/Sidebar'

export default function LayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col h-full">
      <TopNav toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 pt-24"> 
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <main className="flex-1 p-4 lg:ml-20">{children}</main>
      </div>
    </div>
  );
}