import '@mantine/core/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider, AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NavbarComponent from './components/Navbar.jsx';
import FooterComponent from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Contact from './pages/Contact.jsx';

const App = () => {
  const [opened, { toggle }] = useDisclosure(false); // Manage the state of the mobile navbar

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <AppShell
          padding="md"
          header={
            <AppShell.Header height={60}>
              <Group h="100%" px="md">
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                <Group justify="space-between" style={{ flex: 1 }}>
                  <h1>Steez</h1> {/* Logo or Title */}
                  <NavbarComponent /> {/* Your existing NavbarComponent */}
                </Group>
              </Group>
            </AppShell.Header>
          }
          navbar={
            <NavbarComponent opened={opened} toggle={toggle} /> // Pass the opened state to your NavbarComponent
          }
          footer={<FooterComponent />}
        >
          {/* Main Content */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </AppShell>
      </Router>
    </MantineProvider>
  );
};


export default App;
