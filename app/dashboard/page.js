import Dashboard from '@/component/Dashboard';
import Login from '@/component/Login';
import Main from '@/component/Main';
import React from 'react'

export const metadata = {
  title: "trackit • dashboard"
};

export default function DashboardPage() {
  const isAuthenticated = false;

  return (
    <Main>
      {isAuthenticated ? <Dashboard /> : <Login />}
    </Main>
  )
}
