import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider, AppShell } from '@mantine/core';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';       // The new mobile + desktop Navbar
import FooterComponent from './components/Footer.jsx';       // The new Footer

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <AppShell
          padding="md"
          // Header
          header={
            <AppShell.Header height={60} p="md">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                {/* Your brand/logo on the left */}
                <h1 style={{ margin: 0 }}>Steez</h1>

                {/* Desktop and Mobile nav from Navbar.jsx */}
                <Navbar />
              </div>
            </AppShell.Header>
          }
          // Footer
          footer={
            <AppShell.Footer height={60} p="md">
              <FooterComponent />
            </AppShell.Footer>
          }
        >
          {/* Main content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AppShell>
      </Router>
    </MantineProvider>
  );
}

export default App;



// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { MantineProvider, AppShell, Burger, Group } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
// import NavbarComponent from './components/Navbar.jsx';
// import FooterComponent from './components/Footer.jsx';
// import Home from './pages/Home.jsx';
// import Products from './pages/Products.jsx';
// import Contact from './pages/Contact.jsx';

// const App = () => {
//   const [opened, { toggle }] = useDisclosure(false); // Manage the state of the mobile navbar

//   return (
//     <MantineProvider withGlobalStyles withNormalizeCSS>
//       <Router>
//         <AppShell
//           padding="md"
//           header={
//             <AppShell.Header height={60}>
//               <Group h="100%" px="md">
//                 <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
//                 <Group justify="space-between" style={{ flex: 1 }}>
//                   <h1>Steez</h1>
//                   <NavbarComponent opened={opened} toggle={toggle} />
//                 </Group>
//               </Group>
//             </AppShell.Header>
//           }
//           navbar={
//             <NavbarComponent opened={opened} toggle={toggle} /> // Pass the opened state to your NavbarComponent
//           }
//           footer={<FooterComponent />}
//         >
//           {/* Main Content */}
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/products' element={<Products />} />
//             <Route path='/contact' element={<Contact />} />
//           </Routes>
//         </AppShell>
//       </Router>
//     </MantineProvider>
//   );
// };



// import '@mantine/core/styles.css';
// import '@mantine/carousel/styles.css';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { MantineProvider, AppShell, Burger, Group } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
// import NavbarComponent from './components/Navbar.jsx';      // Mobile drawer + desktop nav
// import FooterComponent from './components/Footer.jsx';      // Custom footer content
// import Home from './pages/Home.jsx';
// import Products from './pages/Products.jsx';
// import Contact from './pages/Contact.jsx';

// const App = () => {
//   const [opened, { toggle }] = useDisclosure(false);

//   return (
//     <MantineProvider withGlobalStyles withNormalizeCSS>
//       <Router>
//         <AppShell
//           padding="md"
//           // 1) Use AppShell.Header
//           header={
//             <AppShell.Header height={60} p="md">
//               <Group position="apart" align="center" sx={{ height: '100%' }}>

//                 <h1 style={{ margin: 0 }}>Steez</h1>

//                 <Group>
//                   <Burger
//                     opened={opened}
//                     onClick={toggle}
//                     size="sm"
//                   />

//                   <NavbarComponent opened={opened} toggle={toggle} />
//                 </Group>
//               </Group>
//             </AppShell.Header>
//           }
//           // 2) Use AppShell.Navbar if you want a left sidebar
//           //    For a simple burger+drawer, we can skip it or make it empty:
//           navbar={
//             <AppShell.Navbar hidden>
//               {/* You could render a permanent sidebar here if needed */}
//             </AppShell.Navbar>
//           }
//           // 3) Use AppShell.Footer for the bottom area
//           footer={
//             <AppShell.Footer height={60} p="md">
//               <FooterComponent />
//             </AppShell.Footer>
//           }
//         >

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </AppShell>
//       </Router>
//     </MantineProvider>
//   );
// };

// export default App;