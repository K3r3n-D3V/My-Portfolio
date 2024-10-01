import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core';
import { DashboardLayout } from '@toolpad/core';

// Modernized Navigation structure
const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/',
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
    path: '/orders',
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
        path: '/reports/sales',
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
        path: '/reports/traffic',
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
    path: '/integrations',
  },
];

// Modern Material UI theme using v5 best practices
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Content component that reflects the current route
function App() {
  const navigate = useNavigate();
  
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content goes here</Typography>
      <button onClick={() => navigate('/orders')}>Go to Orders</button>
    </Box>
  );
}

// Layout Component: Handles the rendering of the navigation and pages
function DashboardLayoutBasic() {
  return (
    <ThemeProvider theme={demoTheme}>
      <AppProvider navigation={NAVIGATION}>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<DemoPageContent />} />
            <Route path="/orders" element={<Typography>Orders Page</Typography>} />
            <Route path="/reports/sales" element={<Typography>Sales Report</Typography>} />
            <Route path="/reports/traffic" element={<Typography>Traffic Report</Typography>} />
            <Route path="/integrations" element={<Typography>Integrations Page</Typography>} />
          </Routes>
        </DashboardLayout>
      </AppProvider>
    </ThemeProvider>
  );
}
export default App;
