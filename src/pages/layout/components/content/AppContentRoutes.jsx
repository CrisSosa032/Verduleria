import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from '../routes/AppRoutes';

const renderRoutes = (routes) => {
  return routes.map(route => {
    if (route.children) {
      return (
        <Route
          key={route.key}
          path={route.path}
          element={
            <Route
              path={route.path}
              element={route.element}
            >
              {renderRoutes(route.children)}
            </Route>
          }
        />
      );
    } else {
      return (
        <Route
          key={route.key}
          path={route.path}
          element={route.element}
        />
      );
    }
  });
};

const AppContentRoutes = ({ agregarAlCarro}) => {
  let arrayRoute = [];
  let path = '';

  const getRoute = route => {
    if (route.children) {
      route.children.forEach(routeSubmenu => {
        getRoute(routeSubmenu);
      });
    } else {
      let url = route.path;
      if (!route.menu) {
        url = path + route.path + '/*';
      }
      arrayRoute.push({
        key: route.key,
        role: route.role,
        path: url,
        element: React.cloneElement(route.element, { agregarAlCarro}),
      });
    }
  };

  AppRoutes.forEach(route => getRoute(route));

  return (
    <Routes agregarAlCarro={agregarAlCarro}>
      {renderRoutes(arrayRoute)}
    </Routes>
  );
};

export default AppContentRoutes;