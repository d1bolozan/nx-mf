import {
  IconBulb,
  IconCheckbox,
  IconPlus,
  IconSearch,
  IconUser,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Badge,
  Box,
  Code,
  Group,
  Text,
  TextInput,
  Tooltip,
  UnstyledButton,
} from '@mantine/core';
import { UserButton } from '../UserButton/UserButton';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const links = [
  { icon: IconBulb, label: 'Home', notifications: 3, path: '/' },
  {
    icon: IconCheckbox,
    label: 'Products',
    notifications: 4,
    path: '/products',
  },
  { icon: IconCheckbox, label: 'Cart', notifications: 4, path: '/cart' },
  { icon: IconUser, label: 'Checkout', path: '/checkout' },
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
  const mainLinks = links.map((link) => (
    <UnstyledButton
      key={link.label}
      className={'mainLink'}
      onClick={() => navigate(link.path)}
    >
      <div className={'mainLinkInner'}>
        <link.icon size={20} className={'mainLinkIcon'} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={'mainLinkBadge'}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
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
    <nav className="navbar">
      <div className="section">
        <UserButton />
      </div>

      <TextInput
        placeholder="Search"
        size="xs"
        leftSection={<IconSearch size={12} stroke={1.5} />}
        rightSectionWidth={70}
        rightSection={<Code className={'searchCode'}>Ctrl + K</Code>}
        styles={{ section: { pointerEvents: 'none' } }}
        mb="sm"
      />

      <div className='flex flex-col overflow-y-auto overflow-hidden'>
        <div className="section">
        <div className={'mainLinks'}>{mainLinks}</div>
      </div>

      <div className="section">
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
      </div>
    </nav>
  );
}
