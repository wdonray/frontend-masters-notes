# System Design

### Notes
- RADIO 
  - **R**equirements clarifications/alignment - Ask about the requirements of the system.
    - What devices should the system support? Desktop web, mobile web, etc
    - What's the primary device that users will access the system on?
    - Which browsers should we support?
    - Do we need to support internationalization?
    - How much styling customization do we want to allow?
  - **A**rchitecture - Outline the architecture of the system (could be a UI component or an app, depending on the question). Draw diagrams where relevant.
    - Parent components and sub-components
    - Draw these out
  - **D**ata model - How would the component store any data passed into it? What data structures are used?
    - Local State vs Store State vs Stateless
  - **I**nterface Definition (API) - What's the API for using this component? What options will be allowed on the component?
    - What props are we allowing? What about default props
    - Part of UI Library? 
    - What APIS are we hitting from each component?
    - Define each component, store, handlers, props and so fourth.
  - **O**ptimizations and Deep Dive - User Experience (UX), Performance, Accessibility (a11y), Internationalization (i18n), Multi-device support, Security
    - UX
      - Reflect state to user (loading spinner, toast errors)
      - Empty state (no items in list)
      - Confirmation steps
      - Disable elements for web request (double firing)
    - Accessibility
      - Use right color contrast ratio more than 4:5:1
      - Dynamic font sizes
      - Use semantic elements
      - Provide proper aria-roles, attributes for custom components. Like, use alt for images, aria-haspopup to announce, this element can load another layer.
      - Maintain Keyboard navigation
      - Create guardrails to avoid human errors.
      - Support escape link to move to a certain part of the page.

---

- Requirements
  - Describe at a high level what the system contains.
  - Start by asking what area to focus on.
  - Continue to ask clarifying questions.
  - Note down all requirements.
- Architecture
  - Design Flow of application
- Data Model
  - Create Data Structure (Data Types)
  - State
    - Create Stores by getting data from API Calls
    - Local State for each component 
    - Stateless for sub-components
- API
  - Props for components
  - Select some that will be part of UI library
- Optimizations
- Accessibility
  - aria labels - voice over/reader

---

- 11 AM - 2:30 PM
  
- Karen (Designer) - Pau
  - Working with Design (30m)
- Justin
  - Product Manager (30m)
- Lunch 
  - 30m
- Pau - Sofia - Mike 
  - Code Pair (45m)
- Matt (Architect)
  - Whiteboard - System Design (45m)
- Pau
  - Questions 

First candidate that they have flown in.