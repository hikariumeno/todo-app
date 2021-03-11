import React from "react";
import renderer from "react-test-renderer";
import { MenuTabs } from "./MenuTabs";

test("All Tab selected", () => {
  const component = renderer.create(
    <MenuTabs activeKey="All" onSelect="Function"></MenuTabs>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
