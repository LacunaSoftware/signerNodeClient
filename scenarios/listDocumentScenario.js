"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const signer_node_client_1 = require("signer-node-client");
const scenario_1 = require("./scenario");
const flowsApi = new signer_node_client_1.FlowsApi(scenario_1.config);
flowsApi.apiDocumentFlowsGet("Doc1", 10, 0, signer_node_client_1.PaginationOrders.Desc).then((res) => {
    console.log("Listing query results: ", res.data);
});
