// console.log("Hello Back to School");

// create some constants that will be used later on to find out about the structure of the workbook
const viz = document.getElementById("tableauviz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

// Create a function which will log information about the workbook

function LogWorkbookInformation() {
  workbook = viz.workbook;
  console.log(`The workbook name is : "${workbook.name}"`);

  // List of dashboards within the workbook

  let sheets = workbook.publishedSheetsInfo;
  sheets.forEach((element) => {
    index = element.index;
    console.log(`The published sheet with index [${index}] is ${element.name}`);
  });

  //   Find the Active Sheet
  vizActiveSheet = workbook.activeSheet;
  console.log(`The active sheet is "${vizActiveSheet.name}"`);

  //   Find array of sheets within dashboards
  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((element) => {
    index = element.index;
    console.log(`The worksheet with index [${index}] is ${element.name}`);
  });
}

viz.addEventListener("firstinteractive", LogWorkbookInformation);
