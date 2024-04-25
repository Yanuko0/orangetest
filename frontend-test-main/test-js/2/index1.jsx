
import { getMonthSale } from "./promise";
import { useState, useEffect } from "react";

export default function JS_3() {

  const [data, setData] = useState([]);

  //拿到2024的data數據
  useEffect(() => {
    async function fetchData() {
      const result = await getMonthSale({ YY: "2024" });
      setData(result)
    }
    fetchData()
  }, [])
  //第一題
  const totalSalesYear = data
    .map(item => parseInt(item.Sqty))
    .reduce((total, item) => total + item, 0)
  //第二題
  const saleByMonth = {}
  data.filter((item) => item.month >= "01" && item.month <= "12")
    .forEach((item) => {
      const month = item.month;
      const customer = item.cus;
      const qty = parseInt(item.Sqty)

      if (!saleByMonth[month]) {
        saleByMonth[month] = {};
      }

      if (!saleByMonth[month][customer]) {
        saleByMonth[month][customer] = 0;
      }

      saleByMonth[month][customer] += qty;

    });

  const saleByMonths = Object.entries(saleByMonth)
  .sort((a, b) => a[0] - b[0])
  .map(([month, qty]) => ({
    month,
    sale: Object.entries(qty).sort((a, b) => b[1] + a[1]),
  
  }));

  //第三題

  const cusTotalPrice = {};
  data.map((item) => {
    const customer = item.cus;
    const qty = parseInt(item.Sqty);
    if (!cusTotalPrice[customer]) {
      cusTotalPrice[customer] = 0;
    }

    cusTotalPrice[customer] += qty;
  });


  // react題目



  return (
    <h3>
      <p>請使用 getMonthSale 這個 function 來寫以下題目。</p>
      2-1. 算出今年所有銷售總和:{totalSalesYear}
      <br />
      2-2. 由銷售金額多到少列出 4-9 月各月份所有客戶的的銷售金額
      <table>
        {saleByMonths.map(({ month, sale }) => (
          <td key={month}>
            <tr>{`${month}月`}</tr>
            <td>
              {sale.map(([cus, sale]) => (
                <tr key={cus}>{`${cus}:${sale}`}</tr>
              ))}
            </td>
          </td>
        ))}
        <br />
      </table>
      2-3. 列出每位客戶今年購買總和
      <ul>
        {Object.entries(cusTotalPrice).map(([cus, TotalPrice]) => (
          <li key={cus}>{`${cus}: ${TotalPrice}`}</li>
        ))}
      </ul>


<br /><br /><br />


<table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid black', padding: '8px'}}></th>
      {saleByMonths.map(({ month }) => (
        <th key={month} style={{ border: '1px solid black', padding: '8px' }}>{`${month}月`}</th>
      ))}
      <th style={{ border: '1px solid black', padding: '8px' }}>總和</th>
    </tr>
  </thead>
  <tbody>
    {['A', 'B', 'C'].map(cus => (
      <tr key={cus}>
        <td style={{ border: '1px solid black', padding: '8px' }}>{cus}</td>
        {saleByMonths.map(({ month, sale }) => (
          <td key={month} style={{ border: '1px solid black', padding: '8px' }}>{sale.find(([customer]) => customer === cus)?.[1] || 0}</td>
        ))}
        <td style={{ border: '1px solid black', padding: '8px' }}>{Object.entries(cusTotalPrice)
          .filter(([customer]) => customer === cus)
          .reduce((acc, [, totalPrice]) => acc + totalPrice, 0)}</td>
      </tr>
    ))}
    {/* 新增一行當月總額 */}
    <tr>
      <td style={{ border: '1px solid black', padding: '8px' }}>總和</td>
      {saleByMonths.map(({ month, sale }) => (
        <td key={month} style={{ border: '1px solid black', padding: '8px' }}>
          {sale.reduce((acc, [, qty]) => acc + qty, 0)}
        </td>
      ))}
      <td style={{ border: '1px solid black', padding: '8px' }}>
        {Object.values(cusTotalPrice).reduce((acc, totalPrice) => acc + totalPrice, 0)}
      </td>
    </tr>
  </tbody>
</table>




    </h3>
  );
}