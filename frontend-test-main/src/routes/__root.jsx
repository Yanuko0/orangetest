import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <main className='h-dvh flex flex-col'>
      <Link to={"/"}>
        <h1 className='text-2xl bg-my-orange-500 text-white p-2'>前端測驗</h1>
      </Link>
      <Outlet />
    </main>
  ),
});
