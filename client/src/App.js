import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Login from './pages/Login';
import theme from './theme';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Box display="flex" minH="100vh">
          <Sidebar />
          <Box flex="1" p={6}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
