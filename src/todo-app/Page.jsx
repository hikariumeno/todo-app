import { check } from "prettier";
import React from "react";

export const Page = () => (
  <article>
    <h1>#todo</h1>
    <ul>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
    </ul>
    <form>
        <input type="text" placeholder="add details"></input>
        <button>Add</button>
    </form>
    <label for="check"><input type="checkbox" id="check"></input>Do coding Challenges</label>
  </article>
);
