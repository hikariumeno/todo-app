import React from "react";
import renderer from "react-test-renderer";
import { MenuTabs } from "./MenuTabs";

test("All Tab selected", () => {
  const onSelect = jest.fn();
  const tree = renderer.create(
    <MenuTabs activeKey="All" onSelect={onSelect}></MenuTabs>
  );
  expect(onSelect).not.toHaveBeenCalled();
  expect(tree.toJSON()).toMatchSnapshot();
});

test("Active Tab selected", () => {
  const onSelect = jest.fn();
  const tree = renderer.create(
    <MenuTabs activeKey="Active" onSelect={onSelect}></MenuTabs>
  );
  expect(onSelect).not.toHaveBeenCalled();
  expect(tree.toJSON()).toMatchSnapshot();
});

test("Completed Tab selected", () => {
  const onSelect = jest.fn();
  const tree = renderer.create(
    <MenuTabs activeKey="Completed" onSelect={onSelect}></MenuTabs>
  );
  expect(onSelect).not.toHaveBeenCalled();
  expect(tree.toJSON()).toMatchSnapshot();
});
