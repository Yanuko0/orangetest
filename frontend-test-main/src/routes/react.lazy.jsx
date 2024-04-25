import { Link, createLazyFileRoute } from "@tanstack/react-router";
import React_1 from "../../test-react/1";
import React_2 from "../../test-react/2";

export const Route = createLazyFileRoute("/react")({
  component: Test_react,
});

function Test_react() {
  return (
    <>
      <h2 className='text-xl p-4 flex items-center gap-2'>
        <Link to={"/"}>{"<"}</Link>
        react 測驗
      </h2>
      <section className='px-8 py-2'>
        <p>題目:</p>
        <React_1 />
        <React_2 />
      </section>
    </>
  );
}
