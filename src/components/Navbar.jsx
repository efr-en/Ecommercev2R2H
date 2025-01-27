import { Header, Container, Group, Burger, MediaQuery, Text, Anchor } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <Header height={70} p="md" style={{ marginBottom: "2rem" }}>
            <Container size="lg" style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>

            {/* Logo placeholder */}
            <Text component={Link} to="/" weight={700} size="xl" style={{ textDecoration: "none", color: "black" }}>
            steez
            </Text>

            {/* Navigation Links */}
            <MediaQuery smallerThan="sm" style={{ display: "none" }}>
                <Group spacing="xl">
                    <Anchor component={Link} to="/" size="md">
                    Home
                    </Anchor>
                    <Anchor component={Link} to="/products" size="md">
                    Products
                    </Anchor><Anchor component={Link} to="/contact" size="md">
                    Contact Us
                    </Anchor>
                </Group>
            </MediaQuery>

            {/* Mobile Menu */}
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger opened={opened} onClick={toggle} size="sm" />
            </MediaQuery>
            </Container>
        </Header>
    );
;}

export default Navbar;