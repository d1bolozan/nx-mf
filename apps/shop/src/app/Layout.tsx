import { Outlet } from "react-router-dom";
import { NavbarSearch } from "../components/Navbar/Navbar";
import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();
  const [openedWidgets, { toggle: toggleWidgets }] = useDisclosure();

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: !opened }
      }}
      aside={{
        width: 300,
        breakpoint: "md",
        collapsed: { desktop: !openedWidgets, mobile: !openedWidgets }
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} size="sm" />
          <IconBrandGithub size={30} />
          <Burger className="ml-auto" opened={openedWidgets} onClick={toggleWidgets} size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <NavbarSearch />
      </AppShell.Navbar>
      <AppShell.Main className="w-full flex flex-col h-screen overflow-hidden">
        <Outlet />
      </AppShell.Main>
      <AppShell.Aside></AppShell.Aside>
    </AppShell>
  );
  // return (
  //   <div className="flex w-full h-screen overflow-hidden">
  //     <NavbarSearch />
  //     <div className="flex-1 overflow-y-auto">
  //       <Outlet />
  //     </div>
  //   </div>
  // );
};

export default Layout;
