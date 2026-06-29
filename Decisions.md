# Decisions

Architectural and tooling decisions I made during development, recorded as I go.

| # | Decision | Choice | Why |
|---|----------|--------|-----|
| 1 | Local dev database | H2 first, MySQL later | I wanted to iterate quickly without managing a local MySQL setup. Since JPA abstracts the database, my entity and repository code stays the same when I swap to MySQL later. |
| 2 | Boilerplate approach | Hand-written entity, Java records for DTOs | I chose to write getters/setters/constructors by hand for the entity so I fully understand what every line does. For DTOs, Java records give the same convenience as Lombok but without a third-party dependency. |
| 3 | Bean Validation | Include dependency now, wire at DTO step | I want input validation at the API boundary rather than manual null checks in service code. Added the dependency during scaffolding so I don't need to touch the pom later; I'll wire the annotations when I build the DTOs. |
| 4 | Enum storage | EnumType.STRING | Stores "INCOME"/"EXPENSE" as readable text in the database. I avoided ORDINAL because reordering enum values would silently corrupt existing data. |
| 5 | TransactionType file | Separate file, not inner enum | TransactionType has meaning outside of the Transaction entity — DTOs and services reference it too. Keeping it in its own file avoids unnecessary coupling. |
| 6 | Controller status codes | 201 for POST, 200 for GET, 404 for missing, 204 for DELETE | Each code communicates exactly what happened. 201 means "created," not just "ok." 204 means "done, nothing to return." Correct status codes signal API maturity. |
| 7 | Temporary entity exposure in controller | Accept/return Transaction entity directly (pre-DTO) | A deliberate shortcut to get endpoints working before building the DTO layer. Will be replaced immediately — entities shouldn't be exposed through the API because it leaks internal details. |