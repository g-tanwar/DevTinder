# DevTinder

## Requirements: 

1. Create an Account
2. Login
3. Update Your Profile
4. Feed Page - Explore
5. Send or Ignore Connection Request
6. See our Matches
7. See our Requests

## Tech Planning:

- 2 MicroServices

1. Frontend Engineering
    - React

2. Backend Engineering 
    - Node JS
    - Mongo DB

## Importance Order:

1. DB Design:

    ### User 
      - First Name
      - Last Name
      - Email Id
      - Password
      - Age 
      - Gender

    ### Connection Request:
       - From User_id
       - To User_id
       - Status

2. API's Design:

    - POST /Signup
    - Post /login
    - GET /profile (fetching info)
    - POST /profile (sending info)
    - PATCH /profile (update)
    - DELETE /profile 
    - POST /send_request     1.Ignore  2.Interested
    - POST /review_request   1.Accept  2.Reject
    - GET /requests
    - GET /Connections



