const Constants = require("../config/constants.js");
const Reports = require("./reports.js");
const Generator = require("./generate.js");

const runReports = async () => {
  const reportRequests = await Reports.getReportRequests();
  if (reportRequests?.responseData) {
    reportRequests.responseData.forEach((request) => {
      console.log(request);
      Reports.getReportDetails(request.reportId).then((details) => {
        console.log(details);
        Reports.getReportType(details.responseData.reportTypeId).then((type) => {
            console.log(type);
          switch (type.responseData.reportTypeName.toUpperCase()) {
            case Constants.PROPERY.toUpperCase(): {
                const reportUrl = `${Constants.PROPERTY_REPORT_URL}${details.responseData.reportEndpoint.replace(":id", request.propertyId)}`
                console.log(reportUrl);
                Generator.generateReport({ reportUrl: reportUrl, reportTypeName: type.responseData.reportTypeName, id: request.propertyId});
                break;
            }
            case Constants.LEASE.toUpperCase(): {
                const reportUrl = `${Constants.PROPERTY_LEASE_URL}${details.responseData.reportEndpoint.replace(":id", request.leaseAnalysisId)}`
                console.log(reportUrl);
                Generator.generateReport({ reportUrl: reportUrl, reportTypeName: type.responseData.reportTypeName, id: request.leaseAnalysisId});
              break;
            }
            default:
              return;
          }
        });
      });
    });
  }
};

setTimeout(() => runReports(), 10000);
