# VPagination ARIA issues

tl;dr - run `vite` and compare DOM with index.html and HelloWorld.vue to see how attributes are processed differently.
See VPagination.spec.js to compare VPagination's current behavior to its desired behavior.

## Problem

When rendered outside of a browser (in unit tests, for example), the VBtns contained in VPagination render with
attributes of `arialabel`, `ariadisabled`, and `ariacurrent`.

## Why

When rendered in browser, the props `ariaLabel`, `ariaDisabled`, and `ariaCurrent` are automatically transformed
into `aria-label`, `aria-disabled`, and `aria-current`, which allow the attributes to work as intended. This appears to
be a JavaScript-specific feature, as in plain HTML `ariaLabel` is rendered as `arialabel`. These can be seen by running `vite`
and inspecting the DOM.

When the same elements are rendered in a non-browser environment (say, unit tests with Vue Test Utils or Vue Testing
Library, or if there were a browser that doesn't support the aforementioned transformation), attributes provided to HTML
element in camelCase become lowercase, so `ariaLabel` becomes `arialabel`. The `arialabel`s (and other lowercase `aria`
attributes) are not interpreted as proper ARIA attributes, and so are not
picked up identified properly.
