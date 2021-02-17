// const SibApiV3Sdk = require("sib-api-v3-sdk");

// const defaultClient = SibApiV3Sdk.ApiClient.instance;
// const apiKey = defaultClient.authentications["api-key"];

// apiKey.apiKey = "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";

// // const apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
// var apiInstance = new SibApiV3Sdk.ContactsApi();
// let emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();
// let emailSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
// let transactionalEmailsApi = new SibApiV3Sdk.TransactionalEmailsApi();

// const send = (email, name = "") => {
//   // emailCampaigns.name = "Campaign sent via the API";
//   // emailCampaigns.subject = "My subject";
//   // emailCampaigns.sender = {
//   //   name,
//   //   email,
//   // };
//   // emailCampaigns.type = "classic";

//   var createContact = new SibApiV3Sdk.CreateContact(); // CreateContact | Values to create a contact
//   createContact = { email };

//   apiInstance.createContact(createContact).then(
//     function (data) {
//       return data;
//     },
//     function (error) {
//       // console.error(error);
//       throw error;
//     }
//   );
// };

// const sendMail = async (email, name = "", params={}) => {
//     try {
//       emailSmtpEmail = {
//         to: [{
//             email,
//             name
//         }],
//         templateId: 1,
//         params,
//         headers: {
//           "api-key": "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",
//           "content-type" : 'application/json',
//           "accept": 'application/json'
//         }
//       };
  
//       const result = await transactionalEmailsApi.sendTransacEmail(emailSmtpEmail)
  
//       return result
//     } catch (error) {
//       // console.log("error === ", error)
//       throw error
//     }
//   }

// // module.exports.sendEmail = async (email, name = "") => {
// //   try {
// //     emailSmtpEmail = {
// //       to: [{
// //           email,
// //           name
// //       }],
// //       templateId,
// //       params,
// //       headers: {
// //         "api-key": getSibAPIKey(),
// //         "content-type" : 'application/json',
// //         "accept": 'application/json'
// //       }
// //     };

// //     const result = await transactionalEmailsApi(emailSmtpEmail)

// //     return result
// //   } catch (error) {
// //     console.log("error === ", error)
// //     throw error
// //   }
// // }
