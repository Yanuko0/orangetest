import { Link, createLazyFileRoute } from "@tanstack/react-router";
import JS_1 from "../../test-js/1";
import JS_2 from "../../test-js/2";

export const Route = createLazyFileRoute("/js")({
  component: Test_js,
});

function Test_js() {
  return (
    <>
      <h2 className='text-xl p-4 flex items-center gap-2'>
        <Link to={"/"}>{"<"}</Link>
        js 測驗
      </h2>
      <section className='px-8 py-2'>
        <p className='text-lg mb-4'>
          可以用 <code>console.log</code> 印到 console 裡面 或是{" "}
          <code>JSON.stringify</code> 印到頁面上。
        </p>
        <p>題目:</p>
        <JS_1 />
        <JS_2 />
      </section>
    </>
  );
}
