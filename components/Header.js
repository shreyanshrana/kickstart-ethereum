import React from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "../routes";

export default props => {
    return (
        <Menu style={{ marginTop: "10px" }}>
            <Link route="/">
                <a className="item">CrowdCoin</a>
            </Link>
            <Menu.Item position="right">
                <Link route="/">
                    <a className="item">Campaigns</a>
                </Link>
                <Link route="/campaigns/new">
                    <a className="item">+</a>
                </Link>
            </Menu.Item>
        </Menu>
    );
};
