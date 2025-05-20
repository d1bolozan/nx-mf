import { createContext, FC } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { IRoute } from '../dto/IRoute';

interface INavigationContext {
  routes: IRoute[];
  initializeRoutes: (routes: IRoute[]) => void;
  isLoadingNavigation: boolean;
}

const NavigationContext = createContext<INavigationContext>({
  routes: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  initializeRoutes: () => {},
  isLoadingNavigation: false,
} as INavigationContext);

export default NavigationContext;

const Element: FC<{ temp?: string }> = () => {
  return <div>Element</div>;
};

// const temp: IRoute[] = [
//   {
//     path: '/',
//     label: '',
//     element: <div></div>,
//   },
//   {
//     path: '/user',
//     label: '',
//     element: <Element />,
//     children: [
//       {
//         path: '/create',
//         label: 'Create User',
//         element: <Element />,
//         children: [
//           {
//             path: '/',
//             label: '',
//             element: <div></div>,
//           },
//         ],
//       },
//     ],
//   },
// ];

const handleCreateRouter = (routes: IRoute[]): RouteObject[] => {
  return routes.map(({ element, path, children }) => ({
    path,
    element,
    children:
      children && children.length > 0
        ? handleCreateRouter(children)
        : undefined,
  }));
};

// const router = createBrowserRouter(handleCreateRouter(temp));
