import { getMonthSale } from "./promise";

export default function JS_2() {
  // 請在這個 function 內作答
  const calculateTotalSales = async () => {
    const dataSet = await getMonthSale({ YY: "2024" });
    const totalSales = dataSet.reduce((acc, curr) => acc + parseInt(curr.Sqty), 0);
    return totalSales;
  };

  const calculateCustomerTotalSales = async () => {
    const dataSet = await getMonthSale({ YY: "2024" });
    const customerSalesMap = {};
    dataSet.forEach((data) => {
      if (customerSalesMap[data.cus]) {
        customerSalesMap[data.cus] += parseInt(data.Sqty);
      } else {
        customerSalesMap[data.cus] = parseInt(data.Sqty);
      }
    });
    return customerSalesMap;
  };


  const sortSalesByMonth = async () => {
    const dataSet = await getMonthSale({ YY: "2024" });
    const salesByMonth = {};
    dataSet.forEach((data) => {
      if (salesByMonth[data.month]) {
        salesByMonth[data.month].push({ cus: data.cus, sqty: parseInt(data.Sqty) });
      } else {
        salesByMonth[data.month] = [{ cus: data.cus, sqty: parseInt(data.Sqty) }];
      }
    });
    for (let month in salesByMonth) {
      salesByMonth[month].sort((a, b) => b.sqty - a.sqty);
    }
    return salesByMonth;
  };


  return (
    <h3>
      <p>請使用 getMonthSale 這個 function 來寫以下題目。</p>
      2-1. 算出今年所有銷售總和:{calculateTotalSales()}
      <br />
      2-2. 由銷售金額多到少列出 4-9 月各月份所有客戶的的銷售金額:
      {sortSalesByMonth()}
      <br /> 
      2-3. 列出每位客戶今年購買總和:
      {calculateCustomerTotalSales()}
    </h3>
  );
}
