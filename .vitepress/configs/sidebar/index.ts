import {DefaultTheme} from "vitepress/theme";
//noinspection all
import zsxq from "./zsxq";
import roadmap from "./roadmap";
import python from "./python";

export const sidebar: DefaultTheme.Config['sidebar'] = {
  "roadmap": roadmap,
  "KnowledgePlanet": zsxq,
  "python": python,
}

