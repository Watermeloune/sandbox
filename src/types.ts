import { GrafanaTheme } from "@grafana/data";

export interface TestOptions {
    test: string;
}

export interface SandboxOptions {
    testOptions: TestOptions;
}

export const defaults: SandboxOptions = {
    testOptions: {
        test: "testest"
    }
}

export interface LayoutProps {
    width: number;
    height: number;
    options: SandboxOptions;
    theme?: GrafanaTheme;
}