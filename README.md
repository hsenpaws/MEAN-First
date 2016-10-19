# MEAN Stack Application

Sequence Diagrams using https://creately.com,

RSS Aggregator app, similar to Google Reader. Two main components:

 i) The REST API
 ii) Feed Grabber (similar to Google Reader)


#Login Flow
Using STORMPATH for authentication. 
Will give OKTA a try as well, as i interviewed with them once and should give it a try atleast :)


HTTP routes and Verbs

| Route 	| Verb  | Description 			| Variables |
| ------ 	|------ | ------------- 		| ---------------- |
| /user/enroll 	| POST  | Register new user 		 | firstName, lastName, email Password | 
| /user/resetPassword | PUT | Password Reset 		| email |
| /feeds | 	  GET   | Get feed subscription details |  | 
| /feeds/subscribe | PUT | Subscribe to new feed | feedURL | 
| /feeds/entries | GET | Get feeds for a user | |
|  |  | | 
| |  | |
| |  | |
| |  | |
| |  | |
| |  | |  



Login Logic
