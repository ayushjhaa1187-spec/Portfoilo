## 2024-05-18 - [Missing Auth on Data Creation Endpoint]
**Vulnerability:** The POST endpoint to create projects (`/api/projects`) was exposed without any authentication, allowing anyone to modify portfolio data.
**Learning:** Found a missing auth vulnerability due to an incomplete implementation (marked as "TODO: Add Auth") on a data creation endpoint.
**Prevention:** Always ensure endpoints intended for data creation, modification, or deletion are secured with authentication (and authorization) from the start, avoiding leaving them exposed to public access, even during initial development phases.
