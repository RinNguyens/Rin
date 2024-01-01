import { useState } from "react";
import { Container, Group, Burger } from "@mantine/core";
import { useComputedColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSimple.module.css";
import { NightMode } from "../NightMode";
import { useNavigate } from "react-router-dom";

const links = [
  { link: "/", label: "Works" },
  { link: "/seminar", label: "Seminar" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

export function HeaderSimple() {
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        navigate(link.link);
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header
      className={classes.header}
      style={{
        background:
          computedColorScheme === "light"
            ? "#ffffff40"
            : "rgba(32, 32, 35, 0.5)",
      }}
    >
      <Container size="md" className={classes.inner}>
        <h2>Rin</h2>
        <Group gap={5} visibleFrom="xs" justify="center">
          {items}
        </Group>

        <NightMode />
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
