import React from "react";
import { configure, addDecorator } from "@storybook/react";
import StoryRouter from "storybook-react-router";

addDecorator(StoryRouter());
addDecorator((storyfn) => (
  <div style={{ background: "blue" }}>{storyfn()}</div>
));
