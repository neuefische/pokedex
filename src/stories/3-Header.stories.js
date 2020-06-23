import React from "react";
import Header from "../components/Header";

export default {
  title: "Header",
  component: Header,
};

export const Text = () => <Header>Hello Header</Header>;

export const Emoji = () => (
  <Header>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Header>
);
