const axios = require("axios");
const TokenHandler = require("./token-helper.js");
const Constants = require("../config/constants.js");

module.exports.getReportRequests = async () => {
  const token = await TokenHandler.getToken();
  const options = {
    method: "GET",
    headers: { Authorization: `bearer ${token}` },
    url: `${Constants.ROCKVAL_API_URL}${Constants.REPORT_REQUESTS_URL}`,
  };
  const reportRequests = await axios(options);
  return reportRequests.data;
};

module.exports.getReportDetails = async (reportId) => {
  const token = await TokenHandler.getToken();
  const options = {
    method: "GET",
    headers: { Authorization: `bearer ${token}` },
    url: `${Constants.ROCKVAL_API_URL}${Constants.REPORT_DETAILS_URL.replace(
      "{id}",
      reportId
    )}`,
  };
  const reportDetails = await axios(options);
  return reportDetails.data;
};

module.exports.getReportType = async (reportTypeId) => {
  console.log(`${Constants.ROCKVAL_API_URL}${Constants.REPORT_TYPE_URL.replace(
    "{id}",
    reportTypeId
  )}`);
  const token = await TokenHandler.getToken();
  const options = {
    method: "GET",
    headers: { Authorization: `bearer ${token}` },
    url: `${Constants.ROCKVAL_API_URL}${Constants.REPORT_TYPE_URL.replace(
      "{id}",
      reportTypeId
    )}`,
  };
  const reportDetails = await axios(options);
  return reportDetails.data;
};
