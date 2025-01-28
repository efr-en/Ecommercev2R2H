import { useState } from "react";
import { Drawer, Burger, Group, UnstyledButton } from "@mantine/core";
import { NavLink } from "react-router-dom";
import "../Navbar.css";

const Navbar = () => {
  const [opened, setOpened] = useState(false);

  const toggleDrawer = () => setOpened((o) => !o);
  const closeDrawer = () => setOpened(false);

  return (
    <>
      {/* Burger always visible (hide it on large screens in CSS if you like) */}
      <Burger opened={opened} onClick={toggleDrawer} size="sm" />

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={closeDrawer}
        title="Navigation"
        padding="md"
        size="sm"
      >
        <Group direction="column" spacing="md">
          <NavLink to="/" style={{ textDecoration: "none" }} onClick={closeDrawer}>
            <UnstyledButton>Home</UnstyledButton>
          </NavLink>
          <NavLink to="/products" style={{ textDecoration: "none" }} onClick={closeDrawer}>
            <UnstyledButton>Products</UnstyledButton>
          </NavLink>
          <NavLink to="/contact" style={{ textDecoration: "none" }} onClick={closeDrawer}>
            <UnstyledButton>Contact Us</UnstyledButton>
          </NavLink>
        </Group>
      </Drawer>

      {/* Desktop nav */}
      <Group spacing="lg" className="desktop-navbar">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <UnstyledButton>Home</UnstyledButton>
        </NavLink>
        <NavLink to="/products" style={{ textDecoration: "none" }}>
          <UnstyledButton>Products</UnstyledButton>
        </NavLink>
        <NavLink to="/contact" style={{ textDecoration: "none" }}>
          <UnstyledButton>Contact Us</UnstyledButton>
        </NavLink>
      </Group>
    </>
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