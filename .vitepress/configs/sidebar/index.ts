import {DefaultTheme} from "vitepress/theme";
//noinspection all
import zsxq from "./zsxq";
import study from "./study";

export const sidebar: DefaultTheme.Config['sidebar'] = {
  "知识星球": zsxq,
  "自学路线图": study
}

