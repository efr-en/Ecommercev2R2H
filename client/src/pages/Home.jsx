import { Container, Title, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

const Home = () => {
    return (
        <Container size="lg" style={{ marginTop: "2rem" }}>
            <Title align="center" order={1}>
                Welcome to steez
            </Title>
            <Text align="center" size="lg" color="dimmed">
                Your one-stop shop for the latest gear
            </Text>

            <Carousel withIndicators height={400} loop
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
                <Carousel.Slide>
                    <img
                    src="..."
                    alt="..."
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </Carousel.Slide>

                <Carousel.Slide>
                    <img
                    src="..."
                    alt="..."
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </Carousel.Slide>

                <Carousel.Slide>
                    <img
                    src="..."
                    alt="..."
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </Carousel.Slide>

                <Carousel.Slide>
                    <img
                    src="..."
                    alt="..."
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </Carousel.Slide>

                <Carousel.Slide>
                    <img
                    src="..."
                    alt="..."
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </Carousel.Slide>
            </Carousel>
        </Container>
    );
};

export default Home;