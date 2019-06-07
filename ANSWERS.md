Self-Study/Essay Questions

- [x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    PropTypes are used to check the incoming props from the parent to the child are of the correct type, for example, (Strings, Objects, Arrays, Bool, Number).  It's import to check types so that we can eliminate bugs before they become a issue later in development.

- [x] Describe a life-cycle event in React?

    A lifecycle Event in React is the Life from a component from when the component is displayed till when the component will be removed.  The lifecycle methods in order is:
    1. Mounting
        * constructor
        * render
        * componentDidMount
    2.  Updating
        * shouldComponentUpdate
        * componentDidUpdate
    3.  Unmounting
        * componentWillUnmount
   
- [x] Explain the details of a Higher Order Component?

    A Higher Order Component, or HOC for short, is a Component that takes Component as a parameter and returns a mutated Component.  A good example of this is a login authentication system.  When you pass the app is rendered to the page, you pass the Homepage and the Login Page into the HOC.  The HOC will hold state to do checks to see if a user is authenticated and if it is true, it will render the HomePage else it will render the Login Page.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

    1. CSS, SASS, etc
        * CSS Stylesheets is the vanilla way to style in react.  Using CSS or SASS with the `node-sass` package, you can style how you like but you have to come up with the styles and usually takes more time than using a framework.
    
    2. A CSS Framework, (BootStrap, Semantic UI, Material UI) and their React Counterparts
        * A framework has predefined styles and make it quick to build a webpage or application.  The downsides to this is that it's very hard to customize and you will get into a routine of creating cookie cutter sites and applications.
        
    3. Styled Components
        * Styled Components is basically CSS in JavaScript.  You are able to make a initial style for an element and pass in props to the styled component to change the css based on what you want the component to do.  This makes for a highly customizable format and you can write clean code by declaring the name of the element that looks like a React Component.