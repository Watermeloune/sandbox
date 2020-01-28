import React, { PureComponent } from "react"
import { LayoutProps } from "../../types";
import { BackendSrv, getBackendSrv } from "@grafana/runtime";


interface Props extends LayoutProps {}

export class SandBox extends PureComponent<Props> {
    
    render = () => {
        let backendSrv: BackendSrv = getBackendSrv()
        backendSrv.get("/api/alerts")
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        backendSrv.post("/api/alerts", {
            "id": 2,
            "dashboardId": 1,
            "dashboardUid": "WR57jLyZz",
            "dashboardSlug": "new-dashboard-copy",
            "panelId": 2,
            "name": "WOLOLO",
            "state": "alerting",
            "newStateDate": "2020-01-27T11:27:01+01:00",
            "evalDate": "0001-01-01T00:00:00Z",
            "evalData": {
                "evalMatches": [{
                    "metric": "Average value",
                    "tags": {},
                    "value": 5006.412537127946
                }]
            },
            "executionError": "",
            "url": "/d/WR57jLyZz/new-dashboard-copy"
        }).then(res => {console.log(res)}).catch(err => {console.log(err)})

        /* backendSrv.post("/api/alerts/1/pause", {paused: false})
            .then(res => {console.log(res)})
            .catch(err => {console.log(err)}) */
        return(
            <h1>HAAAA</h1>
        )
    }
}