

# Sample Repo for Swiper issue with jest

To trigger the error, open `app.component.spec.ts` and run the test.

Error: `Cannot convert undefined or null to object` --> Cause: `Swiper.defaults` and `Swiper.extendedDefaults`
are `undefined`

---

Configuration: (see `apps/swiper-test/jest.config.ts`)
- updated `transformIgnorePatterns` to transform swiper module 
- added `modulePaths` config

---

When using swiper version 7.4.1, the test works when adding the `moduleNameMapper` config 
(currently commented out in `jest.config.ts`)



