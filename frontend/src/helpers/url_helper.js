// Authentications
export const POST_LOGIN = "/account/signin";
export const POST_JWT_LOGIN = "/userLogin";
export const POST_PASSWORD_FORGET = "/account/forgot-password";
export const POST_JWT_PASSWORD_FORGET = "/account/forget-pwd";
export const SOCIAL_LOGIN = "/account/social-login";
export const POST_REGISTER = "/account/signup";

// Contact
export const GET_DIRECT_CONTACT = "/chat";

// Chat Room
export const GET_CHAT_ROOMS = "chat/getChatRooms";
export const ADD_NEW_CHAT = "chat/createRoom";

// Chat Channels
export const GET_CHAT_CHANNELS = "chat/getChatChannels";
export const ADD_NEW_CHAT_CHANNEL = "chat/addNewChatChannel";
export const DELETE_CHAT_CHANNEL = "chat/deleteChatChannel";

// Chat Messages
export const GET_MESSAGES = "chat/getChatMessages";
export const ADD_MESSAGE = "chat/addMessage";
export const DELETE_MESSAGE = "delete/message";


// Proterm
export const POST_EDIT_JWT_PROFILE = "/account/postProfile";
export const POST_EDIT_PROFILE = "/account/user";


// Elections
export const GET_ELECTIONS = "/elections/getElections";
export const GET_ELECTION_DETAILS = "/elections/getElectionDetails";
export const ADD_ELECTION = "/elections/addElection";
export const UPDATE_ELECTION = "/elections/updateElection";
export const DELETE_ELECTION = "/elections/deleteElection";


// Election Candidate
export const GET_ELECTION_CANDIDATES = "/elections/getElectionCandidates";
export const GET_ELECTION_CANDIDATE_DETAILS = "/elections/getElectionCandidateDetails";
export const ADD_NEW_ELECTION_CANDIDATE = "/elections/addNewElectionCandidate";
export const UPDATE_ELECTION_CANDIDATE = "/elections/updateElectionCandidate";
export const DELETE_ELECTION_CANDIDATE = "/elections/deleteElectionCandidate";

// Election Candidate Votes
export const UPDATE_ELECTION_CANDIDATE_VOTES = "/elections/updateElectionCandidateVotes";

// Election Committee
export const GET_ELECTION_COMMITTEES = "/elections/getElectionCommittees";
export const GET_ELECTION_COMMITTEE_DETAILS = "/elections/getElectionCommitteeDetails";
export const ADD_NEW_ELECTION_COMMITTEE = "/elections/addNewElectionCommittee";
export const UPDATE_ELECTION_COMMITTEE = "/elections/updateElectionCommittee";
export const DELETE_ELECTION_COMMITTEE = "/elections/deleteElectionCommittee";

// Election Committee Results
export const UPDATE_ELECTION_COMMITTEE_RESULTS = "/elections/updateElectionCommitteeResults";


// ElectionAttendee
export const GET_ELECTION_ATTENDEES = "/campaigns/getAllElectionAttendees";
export const DELETE_ELECTION_ATTENDEE = "/campaigns/deleteElectionAttendee";
export const ADD_NEW_ELECTION_ATTENDEE = "/campaigns/addNewElectionAttendee";
export const UPDATE_ELECTION_ATTENDEE = "/campaigns/updateElectionAttendee";


// Election Campaign
export const GET_ELECTION_CAMPAIGNS = "/elections/getElectionCampaigns";
export const GET_ELECTION_CAMPAIGN_DETAILS = "/elections/getElectionCampaignDetails";
export const ADD_NEW_ELECTION_CAMPAIGN = "/elections/addNewElectionCampaign";
export const UPDATE_ELECTION_CAMPAIGN = "/elections/updateElectionCampaign";
export const DELETE_ELECTION_CAMPAIGN = "/elections/deleteElectionCampaign";


// Candidates
export const GET_CANDIDATES = "/candidates/getCandidates";
export const GET_CANDIDATE_DETAILS = "/candidates/getCandidateDetails";
export const ADD_NEW_CANDIDATE = "/candidates/addNewCandidate";
export const UPDATE_CANDIDATE = "/candidates/updateCandidate";
export const DELETE_CANDIDATE = "/candidates/deleteCandidate";

// Campaigns
export const GET_CAMPAIGNS = "/campaigns/getCampaigns";
export const GET_CAMPAIGN_DETAILS = "/campaigns/getCampaignDetails";
export const ADD_NEW_CAMPAIGN = "/campaigns/addNewCampaign";
export const UPDATE_CAMPAIGN = "/campaigns/updateCampaign";
export const DELETE_CAMPAIGN = "/campaigns/deleteCampaign";
// export const GET_CAMPAIGN_CANDIDATES = "/campaigns/getcampaignCandidates";

// Campaign Members
export const GET_ALL_CAMPAIGN_MEMBERS = "/campaigns/getElectionMembers";
export const ADD_NEW_CAMPAIGN_MEMBER = "/campaigns/addNewCampaignMember";
export const UPDATE_CAMPAIGN_MEMBER = "/campaigns/updateCampaignMember";
export const DELETE_CAMPAIGN_MEMBER = "/campaigns/deleteCampaignMember";
export const GET_CAMPAIGN_MEMBER_DETAILS = "/campaigns/getCampaignMemberDetails";

// Campaign Guarantees
export const GET_ALL_CAMPAIGN_GUARANTEES = "/campaigns/getAllCampaignGuarantees";
export const DELETE_CAMPAIGN_GUARANTEE = "/campaigns/deleteCampaignGuarantee";
export const ADD_NEW_CAMPAIGN_GUARANTEE = "/campaigns/addNewCampaignGuarantee";
export const UPDATE_CAMPAIGN_GUARANTEE = "/campaigns/updateCampaignGuarantee";

// CampaignAttendee
export const GET_CAMPAIGN_ATTENDEES = "/campaigns/getAllCampaignAttendees";
export const DELETE_CAMPAIGN_ATTENDEE = "/campaigns/deleteCampaignAttendee";
export const ADD_NEW_CAMPAIGN_ATTENDEE = "/campaigns/addNewCampaignAttendee";
export const UPDATE_CAMPAIGN_ATTENDEE = "/campaigns/updateCampaignAttendee";

// USERS
export const GET_USERS = "/account/getUsers";
export const GET_USER_DETAILS = "/account/getUserDetails";
export const ADD_NEW_USER = "/account/addNewUser";
export const UPDATE_USER_PROFILE = "/account/updateUser";
export const CHANGE_USER_PASSWORD = "/account/changeUserPassword";
export const DELETE_USER = "/account/deleteUser";

// SPECIFIC USER(S)
export const GET_CURRENT_USER = "/account/getCurrentUser";
export const GET_MODERATOR_USERS = "/account/getModeratorUsers";
export const GET_CAMPAIGN_MODERATORS = "/account/getCampaignModerators";


// GROUPS
export const GET_GROUPS = "/account/getGroups";
export const GET_GROUP_DETAILS = "/account/getGroupDetails";
export const ADD_NEW_GROUP = "/account/addNewGroup";
export const UPDATE_GROUP = "/account/updateGroup";
export const DELETE_GROUP = "/account/deleteGroup";

// Images
export const UPLOAD_IMAGE = "/media/uploadImage";
export const GET_IMAGES = "/media/uploadImage";
export const DELETE_IMAGE = "/media/uploadImage";
export const UPDATE_IMAGE = "/media/uploadImage";

// Category
export const GET_CATEGORIES = "/elections/getCategories";
export const DELETE_CATEGORY = "/elections/deleteCategory";
export const ADD_NEW_CATEGORY = "/elections/addCategory";
export const UPDATE_CATEGORY = "/elections/updateCategory";

// Elector
export const GET_ALL_ELECTORS = "/electors/getAllElectors";
export const GET_ELECTORS = "/electors/getElectors";
export const DELETE_ELECTOR = "/electors/deleteElector";
export const ADD_NEW_ELECTOR = "/electors/addElector";
export const UPDATE_ELECTOR = "/electors/updateElector";
