import React from "react";
import Home from '../Pages/Home/Home'
import List from '../Pages/List/List'
import Activities from '../Pages/Activities/Activities'

export const arrRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: <Home />,
  },
  {
    path: '/desafios',
    name: 'Desafios',
    exact: true,
    component: <Activities />,
  },
  {
    path: '/beneficios',
    name: 'Benefícios',
    exact: true,
    component: <List />,
  }
]
