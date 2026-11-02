# CodeImpact demo

A tiny TypeScript project for trying the [CodeImpact](https://github.com/Haider425/codeImpact) pull-request reviewer.

`main` is a working pricing module with tests. The `break-discount` branch adds a required `maxDiscount`
parameter to `applyDiscount()` and updates `pricing.ts` and its own test, but not `checkout()` in `src/cart.ts`.
The diff looks complete; the break lands in a file the pull request never touches.

Open a pull request from `break-discount` into `main` and the CodeImpact workflow comments with:

- a rule finding: `checkout` calls `applyDiscount` without the new required argument;
- a type-checker finding: `tsc` reports TS2554 in `src/cart.ts`;
- a failing impacted test: `checkout > applies the coupon to the subtotal` passes on `main` and fails on the PR.

The CodeImpact workflow in `.github/workflows/codeimpact.yml` runs on every pull request.
