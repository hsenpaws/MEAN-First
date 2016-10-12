TU1_FN = "Test";
TU1_LN = "User1";
TU1_EMAIL = "testuser1@example.com";
TU1_PW = "testUSer123";
TU_EMAIL_REGEX = 'testuser*';
SP_APP_NAME = 'Reader Test';

var frisby = require(frisby');
var tc = require('./config/test_config');

frisby.create('POST missing firstName')
	.post(tc.url + '/user/enroll', 
		{ 'lastName' : TU1_LN,
		  'email' : TU1_EMAIL,
		  'password' : TU1_PW ")
	.expectStatus(400)
	.expectHeader('Content-Type', 'application/json; charset=utf-8')
	.expectJSON("'error' : 'Undefined First Name'})
	.toss()


//Test password requirement lowercase
firsby.create('POST password missing lowercase')
	.post(tc.url + '/user/enroll',
		{ 'firstName' : TU1_FN,
		  'lastNAme' : TU1_LN,
		  'email' : TU_EMAIL,
		  'password' : 'TESTUSER123 })
	.expectStatus(400)
	.expectHeader('Content-Type', 'application/json; charset=utf-8)
	.expectJSON({'error' : String})
	.toss()


//Test Invalid Email Address
frisby.create('POST Invalid Email Address)
	.post(tc.url + '/user/enroll',
		{ 'firstName' : TU1_FN,
		  'lastName' : TU1_LN,
		  'email' : "invalid.Email",
		  'password' : TU1_PW })
	.expectStatus(400)
	.expectHeader('Content-Type', 'application/json; charset=utf-8')
	.expectJSON({'error' : String })
	.toss()




