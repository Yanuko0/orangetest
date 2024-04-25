export default function JS_1() {
  const userOrders = users.map(user => {
  const userOrder = orders.filter(order => order.userId === user.userId);
    return { ...user, orders: userOrder };
  });

  return (
    <>
      <h3>1. 抓出每個 user 的訂單</h3>
      <pre>{JSON.stringify(userOrders, null, 2)}</pre>
    </>
  );
}