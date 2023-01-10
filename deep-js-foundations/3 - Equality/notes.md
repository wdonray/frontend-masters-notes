# Equality
---

### Notes
- Abstract Equality
  - When the types match a Strict Equality Comparison is done
  - After that a loose comparison is done, running type conversions on the values being compared
- Strict Equality
  - Types are checked and must match, unless either are NaN
- Equality checks identity (type) not structure.
- Coercive Equality
  - Use: null == undefined
- Avoid
  - == with 0 or "" (or even " ")
  - == with non-primitives
  - == tue or == false: allow ToBoolean or use ===
- When to use
  - When you know the types use ==
  - When you don't know the types use === 

### Definitions (Equality)