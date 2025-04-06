import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { navTree } from '../configs/navigationConfig';

const AppViews: React.FC = () => (
  <Suspense fallback={<div>Загрузка...</div>}>
    <Routes>
      <Route
        path='/'
        Component={lazy(() => import('./organizations'))}
      />
      <Route
        path='/contarctors'
        Component={lazy(() => import('./contarctors'))}
      />
      <Route
        path='/clients'
        Component={lazy(() => import('./clients'))}
      />
      {/* {navTree.map((navItem) => (
        <Route
          key={navItem.key}
          path={navItem.path}
          Component={lazy(() => import(`./${navItem.key}`))} // auto-deploy warnings
        />
      ))} */}
      <Route path='*' element={<Navigate to={navTree[0]?.path} replace />} />
    </Routes>
  </Suspense>
);

export default AppViews;
