import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";
import config from "@/config";

const MyIcon = createFromIconfontCN({
  scriptUrl: config.iconFontUrl
});

export default MyIcon;
