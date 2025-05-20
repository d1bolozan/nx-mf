import { FC, PropsWithChildren, useCallback, useState } from 'react';
import NavigationContext from './navigation-context';
import { IRoute } from '../dto/IRoute';

export const NavigationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [routes, setRoutes] = useState<IRoute[]>([]);
  const [isLoadingNavigation, setIsLoadingNavigation] = useState<boolean>(true);

  const initializeRoutes = useCallback((routes: IRoute[]) => {
    setIsLoadingNavigation(true);
    setRoutes((prevRoutes) => {
      const firstRoute = routes[0];
      if (!firstRoute) return prevRoutes;

      const existingIndex = prevRoutes.findIndex(
        (route) => route.path === firstRoute.path
      );
      if (existingIndex !== -1) {
        // Update the existing route at found index
        const updatedRoutes = [...prevRoutes];
        updatedRoutes[existingIndex] = firstRoute;
        return updatedRoutes;
      } else {
        // Add all new routes
        return [...prevRoutes, ...routes];
      }
    });
    setTimeout(() => setIsLoadingNavigation(false), 100);
  }, []);

  return (
    <NavigationContext.Provider
      value={{ routes, initializeRoutes, isLoadingNavigation }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
