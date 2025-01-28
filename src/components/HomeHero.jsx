import { Text, Image, Button, Stack, Group } from "@mantine/core";
// If you're using React Router, import Link:
import { Link } from "react-router-dom";

function HomeHeroSection() {
  return (
    <>
      {/* First text */}
      <Text align="center" size="lg" color="dimmed" mb="md">
        Your one-stop shop for the latest skate gear
      </Text>

      {/* Hero image + Button */}
      <Stack align="center" mb="md">
        <Image
          src="/nyjahHero.jpeg"
          alt="nyjah hero"
          width="80%"     // adjust as needed
          radius="md"
 // optional if your image is large
        />
        <Button
          component={Link}
          to="/products"  // Your products page route
          variant="filled"
          size="md"
        >
          Shop Now
        </Button>
      </Stack>

      {/* Second text */}
      <Text className="home-steez" align="center" size="xl">
        Check out Thrasher's latest shoot below, or{" "}
        <a
          href="https://www.thrashermagazine.com/articles/halloween-hellbomb-2024-photos/"
          target="_blank"
          rel="noreferrer"
        >
          click here
        </a>
      </Text>
    </>
  );
}

export default HomeHeroSection;
