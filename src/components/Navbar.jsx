import { Drawer, Group, UnstyledButton } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavbarComponent = ({ opened, toggle }) => {
    return (
        <>
            {/* Mobile Navigation */}
            <Drawer
                opened={opened}
                onClose={toggle}
                title="Navigation"
                padding="md"
                size="sm"
            >
                <Group direction="column" spacing="md">
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
            </Drawer>

            <Group spacing="lg" position="right" style={{ display: 'none' }} className="desktop-navbar">
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


export default NavbarComponent;


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