"use client";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import type { IAppStore } from "@/store";
import { useAppStore, setAppStore } from "@/store";

import { ShellRoot, MainContent } from "./styled";

interface AppShellProps {
  children: React.ReactNode;
}

const sidebarSelector = (store: IAppStore) => ({
  sidebarOpen: store.sidebarOpen,
});

const closeSidebar = () => {
  setAppStore({ sidebarOpen: false });
};

export const AppShell = ({ children }: AppShellProps) => {
  const { sidebarOpen } = useAppStore(sidebarSelector);

  return (
    <ShellRoot>
      <Header />
      <Sidebar open={sidebarOpen} onClose={closeSidebar} />
      <MainContent>{children}</MainContent>
    </ShellRoot>
  );
};
