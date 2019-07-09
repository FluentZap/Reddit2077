import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ChromeTabs from "./ChromeTabbar";
import { Typography } from "@material-ui/core";
import Feed from "./Feed";

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}


const TabSort = () => {
    const [index, setIndex] = useState(1);
    return (
        <div>

            <AppBar
                position={"static"}
                elevation={0}
                style={{ backgroundColor: "#E6E8EB" }}
            >
                <Toolbar>
                    <ChromeTabs
                        style={{ alignSelf: "flex-end" }}
                        tabs={[
                            { label: "All" },
                            { label: "hot" },
                            { label: "rising" },
                            { label: "controversial" },
                            { label: "top" },
                            { label: "gilded" }
                        ]}
                        tabStyle={{
                            bgColor: "#E6E8EB",
                            selectedBgColor: "#ffffff",
                            color: "rgba(0,0,0,0.87)"
                        }}
                        tabProps={{
                            disableRipple: true
                        }}
                        value={index}
                        onChange={(e, i) => setIndex(i)}
                    />

                </Toolbar>
            </AppBar>            
            {index === 1 && <TabContainer><Feed/></TabContainer>}
            {index === 2 && <TabContainer>Item Three</TabContainer>}
            {index === 3 && <TabContainer>Item Four</TabContainer>}
        </div>
    );
};

export default TabSort;