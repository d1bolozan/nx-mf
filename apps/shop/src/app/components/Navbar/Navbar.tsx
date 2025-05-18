import {
  IconBuildingStore,
  IconChartGridDots,
  IconHome,
  IconMail,
  IconPlus,
  IconSearch,
  IconShoppingCart,
  IconShoppingCartCheck,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Badge,
  Box,
  Code,
  Group,
  NavLink,
  Text,
  TextInput,
  Tooltip,
} from '@mantine/core';
import { UserButton } from '../UserButton/UserButton';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

const links = [
  { icon: IconHome, label: 'Home', notifications: 3, path: '/' },
  {
    icon: IconBuildingStore,
    label: 'Products',
    notifications: 4,
    path: '/products',
  },
  { icon: IconShoppingCart, label: 'Cart', notifications: 4, path: '/cart' },
  { icon: IconShoppingCartCheck, label: 'Checkout', path: '/checkout' },
  { icon: IconChartGridDots, label: 'Flow Editor', path: '/flow-editor' },
  { icon: IconMail, label: 'Chat', path: '/chat' },
];

const collections = [
  { emoji: '👍', label: 'Sales' },
  { emoji: '🚚', label: 'Deliveries' },
  { emoji: '💸', label: 'Discounts' },
  { emoji: '💰', label: 'Profits' },
  { emoji: '✨', label: 'Reports' },
  { emoji: '🛒', label: 'Orders' },
  { emoji: '📅', label: 'Events' },
  { emoji: '🙈', label: 'Debts' },
  { emoji: '💁‍♀️', label: 'Customers' },
];

export function NavbarSearch() {
  const navigate = useNavigate();
  const [active, setActive] = useState<number>(0);
  const mainLinks = links.map((link, index) => (
    <NavLink
      href="#required-for-focus"
      key={link.label}
      label={link.label}
      className="mainLink px-4"
      active={index === active}
      leftSection={
        <link.icon size={20} className={'mainLinkIcon'} stroke={1.5} />
      }
      rightSection={
        link.notifications && (
          <Badge size="sm" variant="filled" className={'mainLinkBadge'}>
            {link.notifications}
          </Badge>
        )
      }
      onClick={(e) => {
        e.preventDefault();
        navigate(link.path);
        setActive(index);
      }}
    />
    /* <div className={'mainLinkInner'}>
        <link.icon size={20} className={'mainLinkIcon'} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={'mainLinkBadge'}>
          {link.notifications}
        </Badge>
      )}
    </NavLink> */
  ));

  const collectionLinks = collections.map((collection) => (
    <span
      onClick={(event) => event.preventDefault()}
      key={collection.label}
      className={'collectionLink'}
    >
      <Box component="span" mr={9} fz={16}>
        {collection.emoji}
      </Box>{' '}
      {collection.label}
    </span>
  ));

  return (
    <nav className="navbar flex flex-col">
      <div className="section">
        <UserButton />
      </div>

      <div className="section">
        <TextInput
          placeholder="Search"
          size="xs"
          px="xs"
          leftSection={<IconSearch size={12} stroke={1.5} />}
          rightSectionWidth={70}
          rightSection={<Code className={'searchCode'}>Ctrl + K</Code>}
          styles={{ section: { pointerEvents: 'none' } }}
        />
      </div>

      <div className="section overflow-y-auto">
        <div className={'mainLinks'}>{mainLinks}</div>
      </div>

      <div className="section overflow-y-auto">
        <Group className={'collectionsHeader'} justify="space-between">
          <Text size="xs" fw={500} c="dimmed">
            Collections
          </Text>
          <Tooltip label="Create collection" withArrow position="right">
            <ActionIcon variant="default" size={18}>
              <IconPlus size={12} stroke={1.5} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <div className="collections">{collectionLinks}</div>
      </div>
    </nav>
  );
}
