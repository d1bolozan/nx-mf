import { Icon, IconProps } from '@tabler/icons-react';

export interface IRoute {
  path: string;
  label: string;
  icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  element: React.JSX.Element;
  children?: IRoute[];
}
