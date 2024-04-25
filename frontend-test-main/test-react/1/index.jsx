import { useEffect, useState } from "react";
import { getMonthSale } from "./promise";

export default function React_1() {
  const [salesData, setSalesData] = useState([]);
  const [totalSales, setTotalSales] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const dataSet = await getMonthSale({ YY: "2024" });
      setSalesData(dataSet);

      // 計算每位客戶的總和
      const totalSalesMap = {};
      dataSet.forEach((data) => {
        if (totalSalesMap[data.cus]) {
          totalSalesMap[data.cus] += parseInt(data.Sqty);
        } else {
          totalSalesMap[data.cus] = parseInt(data.Sqty);
        }
      });
      setTotalSales(totalSalesMap);
    };
    fetchData();
  }, []);

  const generateTable = () => {
    const tableRows = {};
    salesData.forEach((data) => {
      const { cus, month, Sqty } = data;
      if (!tableRows[cus]) {
        tableRows[cus] = {};
      }
      tableRows[cus][month] = Sqty;
    });

    const customerNames = Object.keys(tableRows).sort();

    return (
      <table border="1">
        <thead>
          <tr>
            <th>客戶</th>
            {months.map((month) => (
              <th key={month}>{month}月</th>
            ))}
            <th>總和</th>
          </tr>
        </thead>
        <tbody>
          {customerNames.map((customer) => (
            <tr key={customer}>
              <td>{customer}</td>
              {months.map((month) => (
                <td key={`${customer}-${month}`}>{tableRows[customer][month] || "-"}</td>
              ))}
              <td>{totalSales[customer] || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <section>
      <p>1. 將 js 測驗的第二題的資料寫成表格, 行為客戶, 列為月份。</p>
      {salesData.length > 0 ? generateTable() : "Loading..."}
    </section>
  );
}
