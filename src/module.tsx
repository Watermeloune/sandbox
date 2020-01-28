import { PanelPlugin } from "@grafana/data";

import { SandboxPanel } from "./components/SandboxPanel";

import { defaults, SandboxOptions } from "./types";


export const plugin = new PanelPlugin<SandboxOptions>(SandboxPanel)
    .setDefaults(defaults)