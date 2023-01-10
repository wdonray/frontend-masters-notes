# Coercion
---

### Notes
- Template Literal: Coerced to a string
- String Concatenation: When adding two values if either is a string it converts it to a string. Check addition operator in spec.
- When calling a method off of a primitive type, that type gets converted to an object.
- Use fundamental objects while calling like a function to be very specific about coercion.
  - Only when it needs to be more obvious

### Abstract Operations
- ToPrimitive - Attempts to convert an object to a primitive type, depending on the hint it may change the order in which it attempts to convert the type to.
- ToBoolean
  - Falsy: "", 0, -0, nul NaN, false, undefined

### Definitions (Coercion)
- Coercion/conversions - type conversion
- Abstract operations - These operations are not a part of the ECMAScript language; they are defined here to solely to aid the specification of the semantics of the ECMAScript language.
- ECMAScript - JavaScript is a general-purpose scripting language that conforms to the ECMAScript specification.
- Template Literal String: provide an easy way to interpolate variables and expressions into strings.
- Expression: a valid set of literals, variables, operators, and expressions that evaluate a single value that is an expression
- Boxing: Primitive to object (form of coercion), this is why everyone thinks everything is an object but this just makes things behave as objects.