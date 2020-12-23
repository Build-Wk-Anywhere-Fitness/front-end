# About the layout of the App:
    Components:
        * Header - The main navigation bar that should persist to every page. Controls state for logging in/out
            * Login - Nested inside of Header. It's visibility is toggled with the Login/Cancel/Logout buttons
        * Home - The main product landing page for "Anywhere Fitness", sign-up button at the bottom
        * Footer - simple Footer
        * Signup - Allows users to sign up as standard users or instructors, will need to wire this up to Stone and Jessica's forms

    Advanced State Management:
        * Redux + Thunk
            - Utilizing Redux to pass global state to components as needed
        * Custom Modular Hooks
            - Exporting custom hooks from actions/index.js to allow state to be updated as needed. Middleware in use to make our axios calls.

# TODO:
    Unit 2: ( https://www.notion.so/Web-Unit-2-Rubric-b9f9c21279964ea4b923ca6252f15421 )
        * Create sign up forms
        * Implement Form Validation 
        * Style App as you see fit (can help set up the member/instructor views once we get our endpoints set up)
    
    Unit 3: ( https://www.notion.so/Web-Unit-3-Rubric-49465ea3a66440c89b593452e60ba8f8 )
        * Implement CRUD
        * Implement PrivateRoutes
        * Deploy Site

    Unit 4: ( https://www.notion.so/Web-Unit-4-Node-Rubric-ac50a1d0cf0a4941a1b20cd28a1c03c6 )
        * Establish endpoints
        * ???

    Known Bugs:
        * 1 - The 'Home' button on the nav bar adjusts the size of the nav container on hover, but none of the other buttons do this. Likely a bug in the CSS. Low prio.
        * 2 - Fix the Footer to always be positioned at the bottom of pages but only visible at the bottom. Position: fixed works but it persists on scrollin content.