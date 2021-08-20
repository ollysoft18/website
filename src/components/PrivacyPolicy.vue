<template>
  <div class="flex justify-between items-start py-8 md:py-0">
    <ul class="md:py-12 sidelist px-2 md:px-8 md:mt-12">
      <li class="text-sm" @click="selected = 'privacy'">
        <a href="#privacy" :class="[selected == 'privacy' ? selectedClass : 'text-sm']">
          Pivacy Policy
        </a>
      </li>
      <li class="mt-6" @click="selected = 'sites'">
        <a href="#sites"  :class="[selected == 'sites' ? selectedClass : 'text-sm']">
          Sites Covered by this Privacy Statement
        </a>
      </li>
      <li class="mt-6" @click="selected = 'collection'">
        <a href="#collection" :class="[selected == 'collection' ? selectedClass : 'text-sm']">
          Collection of Personal Information
        </a> 
        </li>
      <li class="mt-6" @click="selected = 'use'">
        <a href="#use" :class="[selected == 'use' ? selectedClass : 'text-sm']">
          How we use your Personal Information
        </a>
        </li>
      <li class="mt-6" @click="selected = 'share'">
        <a href="#share" :class="[selected == 'share' ? selectedClass : 'text-sm']">
          How we share your Information
        </a>
        </li>
      <li class="mt-6" @click="selected = 'children'">
        <a href="#children" :class="[selected == 'children' ? selectedClass : 'text-sm']">
          Children’s Privacy
        </a>
        </li>
    </ul>
    <div class="details w-full md:py-12 md:mt-12">
      <p style="color: #062648" class="text-lg font-bold" id="privacy">Privacy Policy</p>
      <ul>
        <li class="mt-8" id="sites">
          <p class="text-blue-500 text-sm font-bold">Sites Covered by this Privacy Statement</p>
          <p class=" mt-6 text-gray-400 text-sm leading-7">ETRANZACT is a global organization, with legal entities, 
            business processes, management structures, and technical systems that cross borders. 
            This Privacy Statement applies to all ETRANZACT-owned websites and domains and the websites and domains of our wholly owned subsidiaries (“ETRANZACT website”), except that a privacy policy or statement posted on ETRANZACT websites specific to a particular ETRANZACT program or service will apply instead of this Privacy Statement. Links to non-ETRANZACT websitesThe ETRANZACT website may provide links to third-party websites for your convenience and information. If you access those links, you will leave the ETRANZACT website. ETRANZACT does not control those sites or their privacy practices, which may differ from ETRANZACT ’s practices. We do not endorse or make any representations about third-party websites. The personal data you choose to provide to or that is collected by these third parties is not covered by the ETRANZACT Privacy Statement. We encourage you to review the privacy policy of any company before submitting your personal information.
          </p>
        </li>
        <li class="mt-8" id="collection">
          <p class="text-blue-500 text-sm font-bold">Collection of Personal Information</p>
          <p class=" mt-6 text-gray-400 text-sm leading-7">To serve you better and understand your needs and interests,
             ETRANZACT collects, exports, and uses personal information with adequate notice and consent,
              along with required filings with data protection authorities, when applicable. 
              For example, when you order products or services, apply for instant credit, request information, subscribe to marketing or support materials, register yourself or your ETRANZACT products, enter contests or participate in surveys, or apply for a job at ETRANZACT, we will ask you to provide personal information to complete these transactions. The types of personal information you provide to us on these pages may include contact information such as your name, address, telephone number, and email address; your card number; and other unique information such as user IDs and passwords, billing and transaction information, product and service preferences, contact preferences, educational and employment background, and job interest data. If you choose to use a tell-a-friend program on our site, we will ask you for your friend’s e-mail address and automatically send your friend a one-time e-mail inviting your friend to visit the site. ETRANZACT uses and stores this information only for the purpose of sending this one-time e-mail and to provide tell-a-friend message blocking, where available. In addition to the information you provide, ETRANZACT may also collect information during your visit to an ETRANZACT website through our Automatic Data Collection Tools, which include Web beacons, cookies, embedded Web links, and other commonly used information-gathering tools. These tools collect certain standard information that your browser sends to our website such as your browser type and language, access times, and the address of the website from which you arrived at an ETRANZACT website. They may also collect information about your Internet Protocol (IP) address, clickstream behavior (i.e. the pages you view, the links you click, and other actions you take in connection with ETRANZACT websites) and product information. An IP address is a number that is automatically assigned to your computer whenever you are surfing the Web, allowing Web servers to locate and identify your computer. Computers use IP addresses to communicate on the Internet, allowing users to browse and shop. ETRANZACT may also use some of these Automatic Data Collection Tools in connection with certain emails sent from ETRANZACT and therefore may collect information using these tools when you open the email or click on a link contained in the email.
          </p>
        </li>
        <li class="mt-8" id="use">
          <p class="text-blue-500 text-sm font-bold">How we use your Personal Information</p>
          <p class=" mt-6 text-gray-400 text-sm leading-7"> The information ETRANZACT collects to understand your needs and interests helps ETRANZACT deliver a consistent and personalized experience. For example, ETRANZACT may use your information to assist you in completing a transaction or order; prevent and detect fraud or other malicious activity; communicate with you about products and services; provide service and support; update you on new services and benefits; provide personalized promotional offers; select content to be communicated to you; personalize some ETRANZACT websites; allow you to participate in contests and surveys; and contact you for market research regarding ETRANZACT products or services. The testimonials posted on our Web site are only posted with the expressed permission of the individual or company who provided that testimonial. Card information is used only for payment processing and card activation. 
          </p>
        </li>
        <li class="mt-8" id="share">
          <p class="text-blue-500 text-sm font-bold">How we share your Information</p>
          <p class=" mt-6 text-gray-400 text-sm leading-7">ETRANZACT will not sell, rent or lease your personal information to others except as described in this Statement. ETRANZACT shares personal information in the following ways:ETRANZACT retains service providers and suppliers to deliver complete products, services and customer solutions and to assist ETRANZACT with marketing and communication initiatives. These providers and suppliers include, for example, credit card processors, providers of customer support and live-help, email service providers, automated data processors, and shipping agents. Suppliers and service providers are required by contract to keep confidential the information received on behalf of ETRANZACT and may not use it for any purpose other than to carry out the services they are performing for ETRANZACT. From`time`to time, ETRANZACT participates in marketing initiatives with other companies. As part of these initiatives, certain ETRANZACT services and marketing communications are delivered at the same`time`as those from other companies. Some of these services and communications offer you the`option`to share personal information with both ETRANZACT and the other companies participating in these initiatives. For example, you may receive marketing communications from ETRANZACT and other companies or have the opportunity to register online for software products from multiple companies. If you choose to provide personal information only to ETRANZACT, ETRANZACT will not share this information with the other companies participating in that marketing initiative. If you choose to provide personal information to the other companies, that personal information will be handled according to the privacy policy of those companies. ETRANZACT will require the export of your personal information to other ETRANZACT-owned business entities in the US and Worldwide in accordance with this Statement to satisfy your request. Such export is a requirement of providing the information to ETRANZACT. Except as described in this Statement, ETRANZACT will not share the personal information you provide to ETRANZACT with non-ETRANZACT third parties without your permission, unless to: (i) respond to duly authorized information requests of police and governmental authorities; (ii) comply with any law, regulation, subpoena, or court order; (iii) help prevent fraud or to enforce or protect the rights and properties of ETRANZACT or its subsidiaries; or (iv) protect the personal safety of ETRANZACT employees and third parties on ETRANZACT property. Circumstances may arise where, whether for strategic or other business reasons, ETRANZACT decides to sell, buy, merge or otherwise reorganize businesses in some countries. Such a transaction may involve the disclosure of personal information to prospective or actual purchasers, or the receipt of it from sellers. It is ETRANZACT's practice to seek appropriate protection for information in these types of transactions. 
          </p>
        </li>
        <li class="mt-8" id="children">
          <p class="text-blue-500 text-sm font-bold">Children’s Privacy</p>
          <p class=" mt-6 text-gray-400 text-sm leading-7">ETRANZACT does not knowingly collect information from children under the age of 13 and does not target its websites to children under 13. We encourage parents and guardians to take an active role in their children's online activities and interests. <br> ect to any such changes, your sole recourse shall be to cease using the eTranzact Websites. Continued use of the eTranzact Websites following notice of any such changes shall indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes. Certain provisions of these Terms may be superseded by expressly-designated legal notices or terms located on particular pages of the eTranzact Websites and, in such circumstances, the expressly-designated legal notice or term shall be deemed to be incorporated into these Terms and to supersede the provision(s) of these Terms that are designated as being superseded.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      selected: 'privacy',
      selectedClass: 'text-blue-900 font-bold',
    }
  }
}
</script>

<style scoped>
ul.sidelist{
  min-width: 25%
}
ul.sidelist li {
  color: #062648;
}
.details{
  max-height: 450px;
  overflow-y: auto;
}
.details::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}
.details::-webkit-scrollbar
{
  width: 0px;
	background-color: #F5F5F5;
}

</style>