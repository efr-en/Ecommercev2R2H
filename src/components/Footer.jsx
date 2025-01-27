import { Footer, Container, Group, Text, Anchor } from "@mantine/core";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin} from "@tabler/icons-react";

const FooterComponent = () => {
    return (
        <Footer height={100} p="md">
            <Container size="lg" style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                {/* Copyright - color is deprecated MAY NEED CHANGE*/}
                <Text size="sm" color="dimmed"> 
                © 2024 steez. All rights reserved.
                </Text>

                {/* Social Media Links */}
                <Group spacing="sm">
                    <Anchor href="https://www.facebook.com/efren.laris.1?mibextid=LQQJ4d" target="_blank">
                        <IconBrandFacebook size={20} />
                    </Anchor>

                    <Anchor href="https://www.instagram.com/youbuiltlikeafart" target="_blank">
                        <IconBrandInstagram size={20} />
                    </Anchor>

                    <Anchor href="https://www.linkedin.com/in/efren-laris-5605a7312" target="_blank">
                        <IconLinkedin size={20} />
                    </Anchor>
                </Group>
            </Container>
        </Footer>
    );
};

export default FooterComponent;