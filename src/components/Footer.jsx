import { Container, Flex, Group, Text, Anchor } from "@mantine/core";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin} from "@tabler/icons-react";

const FooterComponent = () => {
    return (
    <div style={{ backgroundColor: "black", padding: "2rem 0", borderTop: "1px solid #e9ecef", marginTop: "2rem" }}>
    <Container size="lg">
      <Flex justify="space-around" align="center">
        {/* Copyright Text */}
        <Text size="sm" color="white">
          © 2024 steez. All rights reserved.
        </Text>

        {/* Social Media Links */}
            <Group spacing="sm">
                <Text size="sm" color="white">
                    Follow us on social media:
                </Text>
                <Anchor href="https://www.facebook.com/efren.laris.1?mibextid=LQQJ4d" target="_blank" style={{ color: "white" }}>
                <IconBrandFacebook size={40} />
                </Anchor>
                <Anchor href="https://www.instagram.com/youbuiltlikeafart" target="_blank" style={{ color: "white" }}>
                <IconBrandInstagram size={40} />
                </Anchor>
                <Anchor href="https://www.linkedin.com/in/efren-laris-5605a7312" target="_blank" style={{ color: "white" }}>
                <IconBrandLinkedin size={40} />
                </Anchor>
            </Group>
        </Flex>
    </Container>
</div>
);
};

export default FooterComponent;

// OLD DEPRECATED MANTINE CODE INC OF BREAKAGE
// <Footer height={100} p="md">
// <Container size="lg" style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>

//     {/* Copyright - color is deprecated MAY NEED CHANGE*/}
//     <Text size="sm" color="dimmed"> 
//     © 2024 steez. All rights reserved.
//     </Text>

//     {/* Social Media Links */}
//     <Group spacing="sm">
//         <Anchor href="https://www.facebook.com/efren.laris.1?mibextid=LQQJ4d" target="_blank">
//             <IconBrandFacebook size={20} />
//         </Anchor>

//         <Anchor href="https://www.instagram.com/youbuiltlikeafart" target="_blank">
//             <IconBrandInstagram size={20} />
//         </Anchor>

//         <Anchor href="https://www.linkedin.com/in/efren-laris-5605a7312" target="_blank">
//             <IconLinkedin size={20} />
//         </Anchor>
//     </Group>
// </Container>
// </Footer>
// );
// };


// import { Group, Text, Anchor } from '@mantine/core';
// import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin} from '@tabler/icons-react';

// const FooterComponent = () => {
//     console.log("footer component rendered");

//     return (
//         <footer style={{ padding: "1rem", backgroundColor: "#f8f9fa", borderTop: "1px solid #e9ecef" }}>
//           <Group position="apart">
//             {/* Copyright Text */}
//             <Text size="sm" color="dimmed">
//               © 2024 Steez. All rights reserved.
//             </Text>
    
//             {/* Social Media Links */}
//             <Group spacing="sm">
//               <Anchor href="https://www.facebook.com/efren.laris.1?mibextid=LQQJ4d" target="_blank" style={{ color: "inherit" }}>
//                 <IconBrandFacebook size={20} />
//               </Anchor>
//               <Anchor href="https://www.instagram.com/youbuiltlikeafart" target="_blank" style={{ color: "inherit" }}>
//                 <IconBrandInstagram size={20} />
//               </Anchor>
//               <Anchor href="https://www.linkedin.com/in/efren-laris-5605a7312" target="_blank" style={{ color: "inherit" }}>
//                 <IconBrandLinkedin size={20} />
//               </Anchor>
//             </Group>
//           </Group>
//         </footer>
//       );
//     };

// export default FooterComponent;





// import { Group, Text, Anchor } from '@mantine/core';
// import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin} from '@tabler/icons-react';

// const FooterComponent = () => {
//     console.log("footer component rendered");

//     return (
//         <footer style={{ padding: "1rem", backgroundColor: "#f8f9fa", borderTop: "1px solid #e9ecef" }}>
//           <Group position="apart">
//             {/* Copyright Text */}
//             <Text size="sm" color="dimmed">
//               © 2024 Steez. All rights reserved.
//             </Text>
    
//             {/* Social Media Links */}
//             <Group spacing="sm">
//               <Anchor href="https://www.facebook.com/efren.laris.1?mibextid=LQQJ4d" target="_blank" style={{ color: "inherit" }}>
//                 <IconBrandFacebook size={20} />
//               </Anchor>
//               <Anchor href="https://www.instagram.com/youbuiltlikeafart" target="_blank" style={{ color: "inherit" }}>
//                 <IconBrandInstagram size={20} />
//               </Anchor>
//               <Anchor href="https://www.linkedin.com/in/efren-laris-5605a7312" target="_blank" style={{ color: "inherit" }}>
//                 <IconBrandLinkedin size={20} />
//               </Anchor>
//             </Group>
//           </Group>
//         </footer>
//       );
//     };

// export default FooterComponent;