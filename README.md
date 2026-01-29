# QA Practice Project — Sauce Demo

## Scope
Tested flows:
- Login functionality
- Adding items to cart
- Checkout flow
  
**Approach**: risk-based testing for login and checkout (positive/negative cases, input validation).

## Artifacts
- [Test cases](./manual/test_cases.md)
- [Bug reports](./manual/bug_reports.md)
- [Automation spec](./automation/)

**Results:** 6 test cases • 3 bug reports • 5 UI automated tests (WDIO)

## Skills
- Test case design
- Functional testing
- Bug reporting
- Basic test documentation structure

## Project Structure
- [manual](./manual/)
- [automation](./automation/)
- [README](./README.md)

## Run automation (optional)
Prerequisites: Node.js 18+

```bash
npm install   # or: npm ci
npm test
