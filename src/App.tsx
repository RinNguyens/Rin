import {
  Container,
  MantineProvider,
  createTheme,
  rem,
  Box,
  Center,
  Image,
  Group,
  Indicator,
  Title,
  ThemeIcon,
  Text,
  Avatar,
  Timeline,
  Button,
} from "@mantine/core";
import "./App.css";
import { HeaderSimple } from "./components/headerSimple";
import "@mantine/core/styles.css";
import House from "./components/house";
import { IconHeart, IconMail } from "@tabler/icons-react";

const theme = createTheme({
  headings: {
    fontFamily: "JetBrainsMono Nerd Font",
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <HeaderSimple />
      <House />
      <Container size={"sm"}>
        <Center h={80} bg="var(--mantine-color-body)">
          <Box>Hello, I am currently working as an Engineer for VNG 👋</Box>
        </Center>
        <Box>
          <Image
            radius={"md"}
            src="https://raw.githubusercontent.com/RinNguyens/RinNguyens/main/profile_header_logo.png"
          />
        </Box>
        <Box mt={15}>
          <Group justify="space-between">
            <Box>
              <Title size={"h2"}>Rin Nguyen</Title>
              <span>( Artist / Developer / Designer )</span>
            </Box>
            <Box>
              <Indicator>
                <Avatar
                  size="lg"
                  radius="md"
                  src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                />
              </Indicator>
            </Box>
          </Group>
        </Box>
        <Box mt={40}>
          <div>
            <Title
              size={"h3"}
              mb={15}
              style={{ borderBottom: "3px solid gray", display: "table" }}
            >
              Work
            </Title>
            <span style={{ marginLeft: "20px" }}>
              Takuya is a freelance and a full-stack developer based in Osaka
              with a passion for building digital services/stuff he wants. He
              has a knack for all things launching products, from planning and
              designing all the way to solving real-life problems with code.
              When not online, he loves hanging out with his camera. Currently,
              he is living off of his own product called Inkdrop. He publishes
              content for marketing his products and his YouTube channel called
              "Dev as Life" has more than 100k subscribers.
            </span>
          </div>
          <div style={{ marginTop: 15 }}>
            <Title
              size={"h3"}
              mb={15}
              style={{ borderBottom: "3px solid gray", display: "table" }}
            >
              Bio
            </Title>
            <Box>
              <Timeline bulletSize={24}>
                <Timeline.Item title="1998">
                  <Text c="dimmed" size="sm">
                    Born in Phu Yen, Vietnam.
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  title="2019"
                  bullet={
                    <Avatar
                      size={22}
                      radius="xl"
                      src="https://upload.wikimedia.org/wikipedia/vi/thumb/c/ca/Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_Khoa_h%E1%BB%8Dc_T%E1%BB%B1_nhi%C3%AAn%2C_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_Qu%E1%BB%91c_gia_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh.svg/640px-Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_Khoa_h%E1%BB%8Dc_T%E1%BB%B1_nhi%C3%AAn%2C_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_Qu%E1%BB%91c_gia_Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh.svg.png"
                    />
                  }
                >
                  <Text c="dimmed" size="sm">
                    Graduated with a major in information technology at the
                    University of Natural Sciences.
                  </Text>
                </Timeline.Item>
                <Timeline.Item title="07-2019">
                  <Text c="dimmed" size="sm">
                    Worked at Make IT Happy.
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  title="2020"
                  bullet={
                    <Avatar
                      size={22}
                      radius="xl"
                      src={
                        "https://sutrixgroup.com/export/system/modules/com.sutrixgroup.website.global/resources/Sutrix-Logo-200x880.jpg"
                      }
                    />
                  }
                >
                  <Text c="dimmed" size="sm">
                    Worked at Sutrix Solution.
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  title="2021"
                  bullet={
                    <Avatar
                      size={22}
                      radius="xl"
                      src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMlc2TkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--74384963d10f51c6db758377eddf0ac1fba31de6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--15c3f2f3e11927673ae52b71712c1f66a7a1b7bd/Logo_Dirox_Black_2022@4x%20(1).png"
                    />
                  }
                >
                  <Text c="dimmed" size="sm">
                    Worked at Dirox.
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  title="07-2022 to present"
                  bullet={
                    <Avatar
                      size={22}
                      radius="xl"
                      src="https://play-lh.googleusercontent.com/Q4-dcp5VvEakOjLGa63uUk6GmgV0iL32Yrx-PBkyRtnVqhBZhcKnZsPsgNyonz7IJCRD"
                    />
                  }
                >
                  <Text c="dimmed" size="sm">
                    Working as an Engineer for VNG.
                  </Text>
                </Timeline.Item>
              </Timeline>
            </Box>
          </div>
          <div style={{ marginTop: 15 }}>
            <Title
              size={"h3"}
              mb={15}
              style={{ borderBottom: "3px solid gray", display: "table" }}
            >
              I <IconHeart size={18} />
            </Title>
            <span style={{ marginLeft: "20px" }}>
              Music, Drawing, Photography, Play foofball,{" "}
              <a href="#">Travelling</a> ,<a href="#">Coding</a>.
            </span>
          </div>
          <div style={{ marginTop: 15 }}>
            <Title
              size={"h3"}
              mb={15}
              style={{ borderBottom: "3px solid gray", display: "table" }}
            >
              Newsletter
            </Title>
            <span style={{ marginLeft: "20px" }}>
              Join me on a behind-the-scenes coding journey. Weekly updates on
              projects, tutorials, and videos.
            </span>
            <Center h={80} bg="var(--mantine-color-body)" color="gray">
              <Box color="gray">
                <Button
                  color="lime"
                  variant="filled"
                  leftSection={<IconMail size={16} />}
                >
                  Sign up newsletter here
                </Button>
              </Box>
            </Center>
          </div>
        </Box>
      </Container>
      <footer>
        <Center h={80} bg="var(--mantine-color-body)" color="gray">
          <Box color="gray" opacity={"0.4"}>
            <Text size="sm">© 2023 Rin. All Rights Reserved.</Text>
          </Box>
        </Center>
      </footer>
    </MantineProvider>
  );
}

export default App;
