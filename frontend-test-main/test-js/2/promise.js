import { dataSet } from "./data";
async function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export async function getMonthSale({ YY, MM }) {
  return new Promise((resolve) => {
    (async function () {
      await sleep(1500);
      switch (true) {
        case !YY && !MM:
          resolve(dataSet);
          break;
        case !!YY && !MM:
          resolve(dataSet.filter((data) => data.year === YY));
          break;
        case !YY && !!MM:
          resolve(dataSet.filter((data) => data.month === MM));
          break;
        case !!YY && !!MM:
          resolve(
            dataSet.filter((data) => data.year === YY && data.month == MM)
          );
          break;
        default:
          resolve(dataSet);
          break;
      }
    })();
  });
}
