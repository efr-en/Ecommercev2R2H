import { Flex, Container, Group, Burger, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div style={{ backgroundColor: "#f8f9fa", borderBottom: "1px solid #e9ecef", padding: "10px 0" }}>
      <Container size="lg">
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Text
            component={Link}
            to="/"
            weight={700}
            size="xl"
            style={{ textDecoration: "none", color: "black" }}
          >
            Steez
          </Text>

          {/* Navigation Links */}
          {isMobile ? (
            // Mobile View: Burger menu
            <Burger opened={opened} onClick={toggle} size="sm" 
            />
          ) : (
            // Desktop View: Full navigation links
            <Group spacing="xl">
              <Link to="/" style={{ textDecoration: "none", color: "black", fontSize: "1rem" }}>
                Home
              </Link>
              <Link to="/products" style={{ textDecoration: "none", color: "black", fontSize: "1rem" }}>
                Products
              </Link>
              <Link to="/contact" style={{ textDecoration: "none", color: "black", fontSize: "1rem" }}>
                Contact Us
              </Link>
            </Group>
          )}
        </Flex>
      </Container>
    </div>
  );
};



export default Navbar;



// OLD DEPRECATED MANTINE CODE INC OF BREAKAGE
// {/* <Header height={70} p="md" style={{ marginBottom: "2rem" }}>
// <Container size="lg" style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>

// {/* Logo placeholder */}
// <Text component={Link} to="/" weight={700} size="xl" style={{ textDecoration: "none", color: "black" }}>
// steez
// </Text>

// {/* Navigation Links */}
// <MediaQuery smallerThan="sm" style={{ display: "none" }}>
//     <Group spacing="xl">
//         <Anchor component={Link} to="/" size="md">
//         Home
//         </Anchor>
//         <Anchor component={Link} to="/products" size="md">
//         Products
//         </Anchor><Anchor component={Link} to="/contact" size="md">
//         Contact Us
//         </Anchor>
//     </Group>
// </MediaQuery>

// {/* Mobile Menu */}
// <MediaQuery largerThan="sm" styles={{ display: "none" }}>
//     <Burger opened={opened} onClick={toggle} size="sm" />
// </MediaQuery>
// </Container>
// </Header>
// );
// ;} */}


// import { Drawer, Group, UnstyledButton } from '@mantine/core';
// import { NavLink } from 'react-router-dom';
// import './Navbar.css';

// const NavbarComponent = ({ opened, toggle }) => {
//     console.log("Navbar component rendered");
//     return (
//         <>
//             {/* Mobile Navigation */}
//             <Drawer
//                 opened={opened}
//                 onClose={toggle}
//                 title="Navigation"
//                 padding="md"
//                 size="sm"
//             >
//                 <Group direction="column" spacing="md">
//                     <NavLink to="/" style={{ textDecoration: "none" }}>
//                         <UnstyledButton>Home</UnstyledButton>
//                     </NavLink>
//                     <NavLink to="/products" style={{ textDecoration: "none" }}>
//                         <UnstyledButton>Products</UnstyledButton>
//                     </NavLink>
//                     <NavLink to="/contact" style={{ textDecoration: "none" }}>
//                         <UnstyledButton>Contact Us</UnstyledButton>
//                     </NavLink>
//                 </Group>
//             </Drawer>

//             <Group spacing="lg" position="right" style={{ display: 'none' }} className="desktop-navbar">
//                     <NavLink to="/" style={{ textDecoration: "none" }}>
//                         <UnstyledButton>Home</UnstyledButton>
//                     </NavLink>
//                     <NavLink to="/products" style={{ textDecoration: "none" }}>
//                         <UnstyledButton>Products</UnstyledButton>
//                     </NavLink>
//                     <NavLink to="/contact" style={{ textDecoration: "none" }}>
//                         <UnstyledButton>Contact Us</UnstyledButton>
//                     </NavLink>
//             </Group>
//         </>
//     );
// };


// export default NavbarComponent;


// import { Drawer, Group, UnstyledButton, Burger } from '@mantine/core';
// import { NavLink } from 'react-router-dom';
// import './Navbar.css';

// const NavbarComponent = ({ opened, toggle }) => {
//     console.log("Navbar component rendered");
//     return (
//         <>

//         <Burger opened={opened} onClick={toggle} size="sm" />
//             {/* Mobile Navigation */}
//             <Drawer
//                 opened={opened}
//                 onClose={toggle}
//                 title="Navigation"
//                 padding="md"
//                 size="sm"
//             >
//                 <Group direction="column" spacing="md">
//                     <NavLink to="/" style={{ textDecoration: "none" }}>
//                         <UnstyledButton>Home</UnstyledButton>
//                     </NavLink>
//                     <NavLink to="/products" style={{ textDecoration: "none" }}>
//                         <UnstyledButton>Products</UnstyledButton>
//                     </NavLink>
//                     <NavLink to="/contact" style={{ textDecoration: "none" }}>
//                         <UnstyledButton>Contact Us</UnstyledButton>
//                     </NavLink>
//                 </Group>
//             </Drawer>

//             <Group spacing="lg" position="right" className="desktop-navbar">
//                     <NavLink to="/" style={{ textDecoration: "none" }}>
//                         <UnstyledButton>Home</UnstyledButton>
//                     </NavLink>
//                     <NavLink to="/products" style={{ textDecoration: "none" }}>
//                         <UnstyledButton>Products</UnstyledButton>
//                     </NavLink>
//                     <NavLink to="/contact" style={{ textDecoration: "none" }}>
//                         <UnstyledButton>Contact Us</UnstyledButton>
//                     </NavLink>
//             </Group>
//         </>
//     );
// };


// export default NavbarComponent;



// import { useState } from "react";
// import { Drawer, Burger, Group, UnstyledButton } from "@mantine/core";
// import { NavLink } from "react-router-dom";
// import "../Navbar.css";

// const Navbar = () => {
//   const [opened, setOpened] = useState(false);

//   const toggleDrawer = () => setOpened((o) => !o);
//   const closeDrawer = () => setOpened(false);

//   return (
//     <>
//       {/* Burger always visible (hide it on large screens in CSS if you like) */}
//       <Burger opened={opened} onClick={toggleDrawer} size="sm" />

//       {/* Mobile Drawer */}
//       <Drawer
//         opened={opened}
//         onClose={closeDrawer}
//         title="Navigation"
//         padding="md"
//         size="sm"
//       >
//         <Group direction="column" spacing="md">
//           <NavLink to="/" style={{ textDecoration: "none" }} onClick={closeDrawer}>
//             <UnstyledButton>Home</UnstyledButton>
//           </NavLink>
//           <NavLink to="/products" style={{ textDecoration: "none" }} onClick={closeDrawer}>
//             <UnstyledButton>Products</UnstyledButton>
//           </NavLink>
//           <NavLink to="/contact" style={{ textDecoration: "none" }} onClick={closeDrawer}>
//             <UnstyledButton>Contact Us</UnstyledButton>
//           </NavLink>
//         </Group>
//       </Drawer>

//       {/* Desktop nav */}
//       <Group spacing="lg" className="desktop-navbar">
//         <NavLink to="/" style={{ textDecoration: "none" }}>
//           <UnstyledButton>Home</UnstyledButton>
//         </NavLink>
//         <NavLink to="/products" style={{ textDecoration: "none" }}>
//           <UnstyledButton>Products</UnstyledButton>
//         </NavLink>
//         <NavLink to="/contact" style={{ textDecoration: "none" }}>
//           <UnstyledButton>Contact Us</UnstyledButton>
//         </NavLink>
//       </Group>
//     </>
//   );
// };

// export default Navbar;