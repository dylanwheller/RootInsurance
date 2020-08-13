const ROCKVAL_URL = "http://localhost:3000";
const ROCKVAL_API_URL = "http://localhost:5000";
const PROPERTY_REPORT_URL = "/reports/properties/";
const LEASE_REPORT_URL = "/reports/leases/";
const TOKEN_URL = "https://rockval.auth0.com/oauth/token";
const REPORT_REQUESTS_URL = "/api/v1/rest/report-requests/getall?unprocessedOnly=true";
const REPORT_DETAILS_URL = "/api/v1/rest/reports/{id}";
const REPORT_TYPE_URL = "/api/v1/rest/report-types/{id}";
const PROPERTY = "Property";
const LEASE = "Lease";

module.exports = {
    ROCKVAL_URL: ROCKVAL_URL,
    ROCKVAL_API_URL: ROCKVAL_API_URL,
    PROPERTY_REPORT_URL: PROPERTY_REPORT_URL,
    LEASE_REPORT_URL: LEASE_REPORT_URL,
    TOKEN_URL: TOKEN_URL,
    REPORT_REQUESTS_URL: REPORT_REQUESTS_URL,
    REPORT_DETAILS_URL: REPORT_DETAILS_URL,
    REPORT_TYPE_URL: REPORT_TYPE_URL,
    PROPERY: PROPERTY,
    LEASE: LEASE
};
