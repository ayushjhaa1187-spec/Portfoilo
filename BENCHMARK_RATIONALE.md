# Performance Optimization Rationale

## Change
Added `.lean()` to Mongoose `find()` and `findOne()` queries in `portfolio/server/routes/blog.js`.

## Why this improves performance
By default, Mongoose queries return instances of the Mongoose Document class. This involves:
- Adding internal state (e.g., `isNew`, `isModified`, `__v`).
- Adding validation logic, getters, setters, and virtuals.
- Overhead of hydrating these heavy objects from the raw MongoDB BSON response.

Using `.lean()` tells Mongoose to skip this hydration step and return plain JavaScript objects (POJOs) directly. This results in:
- **Faster execution**: Skipping the overhead of creating Mongoose documents.
- **Lower memory usage**: POJOs are much lighter than full Mongoose documents.

This is a standard optimization for read-only operations where the advanced features of Mongoose documents (like `save()`, virtuals, etc.) are not needed.

## Why benchmarking was skipped
We were unable to run a direct benchmark in this environment due to:
1.  **Missing dependencies**: The `node_modules` folder is not present in `portfolio/server`.
2.  **Restricted internet access**: We cannot install dependencies via `npm install`.
3.  **No running database**: There is no accessible MongoDB instance to query against.

Given these constraints, we rely on the well-documented performance benefits of `.lean()` for read-heavy workloads. The change is safe because the schema does not rely on virtuals for the fields consumed by the frontend (which currently uses mock data anyway).
