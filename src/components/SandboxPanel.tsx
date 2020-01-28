import React, { PureComponent } from "react"
import { SandboxOptions } from "../types";
import { SandBox } from "./sandbox/Sandbox";
import { 
    PanelProps
} from "@grafana/data";

export class SandboxPanel extends PureComponent<PanelProps<SandboxOptions>> {
    render = () => {
        const {
            options,
            width,
            height,
        } = this.props

        return (
            <SandBox
            options={options}
            height={height}
            width={width}
            />
        )
    }
}