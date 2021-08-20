<template>
  <div class="">
    <div class="flex justify-between items-start py-8 md:py-0">
      <ul class="md:py-12 sidelist px-2 md:px-8 md:mt-12" ref="sidelist">
        <li class="text-sm" @click="selected = 'terms'">
          <a href="#terms" :class="[selected == 'terms' ? selectedClass : 'text-sm']">
            Terms of use
          </a>
        </li>
        <li class="mt-6" @click="selected = 'site'">
          <a href="#site"  :class="[selected == 'site' ? selectedClass : 'text-sm']">
            Use of eTranazact website
          </a>
        </li>
        <li class="mt-6" @click="selected = 'access'">
          <a href="#access" :class="[selected == 'access' ? selectedClass : 'text-sm']">
            Access
          </a> 
          </li>
        <li class="mt-6" @click="selected = 'limitation'">
          <a href="#limitation" :class="[selected == 'limitation' ? selectedClass : 'text-sm']">
            Limitation of liabililty
          </a>
          </li>
        <li class="mt-6" @click="selected = 'prohibited'">
          <a href="#prohibited" :class="[selected == 'prohibited' ? selectedClass : 'text-sm']">
            Prohibited uses
          </a>
          </li>
        <li class="mt-6" @click="selected = 'termination'">
          <a href="#termination" :class="[selected == 'termination' ? selectedClass : 'text-sm']">
            Termination
          </a>
          </li>
        <li class="mt-6" @click="selected = 'disclaimer'">
          <a href="#disclaimer" :class="[selected == 'disclaimer' ? selectedClass : 'text-sm']">
            Diclaimer
          </a>
          </li>
        <li class="mt-6" @click="selected = 'liability'">
          <a href="#liability" :class="[selected == 'liability' ? selectedClass : 'text-sm']">
            Limitation of liabililty
          </a>
          </li>
        <li class="mt-6" @click="selected = 'exclusions'">
          <a href="#exclusions" :class="[selected == 'exclusions' ? selectedClass : 'text-sm']">
            Exclusions and limitations 
          </a>
          </li>
        <li class="mt-6" @click="selected = 'other'">
          <a href="#other" :class="[selected == 'other' ? selectedClass : 'text-sm']">
            Other agreements; softwares, servies or access 
          </a>
          </li>
        <li class="mt-6" @click="selected = 'modification'">
          <a href="#modification" :class="[selected == 'modification' ? selectedClass : 'text-sm']">
            Modifications to eTranzact websites  
          </a>
          </li>
        <li class="mt-6" @click="selected = 'user'">
          <a href="#user" :class="[selected == 'user' ? selectedClass : 'text-sm']">
            User Submission
          </a>
          </li>
        <li class="mt-6" @click="selected = 'third'">
          <a href="#third" :class="[selected == 'third' ? selectedClass : 'text-sm']">
            Links to third-party websites 
          </a>
          </li>
        <li class="mt-6" @click="selected = 'indem'">
          <a href="#indem" :class="[selected == 'indem' ? selectedClass : 'text-sm']">
            Indemnification
          </a>
          </li>
        <li class="mt-6" @click="selected = 'eco'">
          <a href="#eco" :class="[selected == 'eco' ? selectedClass : 'text-sm']">
            Electronic Communication
          </a>
          </li>
        <li class="mt-6" @click="selected = 'general'">
          <a href="#general" :class="[selected == 'general' ? selectedClass : 'text-sm']">
            General
          </a>
          </li>
        <li class="mt-6" @click="selected = 'mod'">
          <a href="#mod" :class="[selected == 'mod' ? selectedClass : 'text-sm']">
            Modification to these terms 
          </a>
          </li>
      </ul>
      <div class="details w-full md:py-12 md:mt-12">
        <p style="color: #062648" class="text-lg font-bold" id="terms">Terms Of Use</p>
        <p class="mt-6 text-gray-400 text-sm leading-7">
          ATTENTION: PLEASE READ THESE TERMS OF USE ("TERMS") CAREFULLY BEFORE USING THIS WEBSITE ("SITE"). USING THIS SITE INDICATES THAT YOU HAVE READ AND ACCEPT THESE TERMS. IF YOU DO NOT ACCEPT THESE TERMS, YOU ARE NOT AUTHORIZED TO USE THIS SITE. THESE TERMS GOVERN YOUR USE OF THE SITE, ANY CONTENT (SUCH AS TEXT, DATA, INFORMATION, SOFTWARE, GRAPHICS, OR PHOTOGRAPHS) THAT HEWLETT-PACKARD COMPANY AND ITS SUBSIDIARIES (COLLECTIVELY "eTranzact") MAY MAKE AVAILABLE THROUGH THE SITE (COLLECTIVELY, "MATERIALS") AND ANY SERVICES THAT eTranzact MAY PROVIDE THROUGH THE SITE (COLLECTIVELY, "SERVICES"). THE SITE, MATERIALS, AND SERVICES ARE REFERRED TO IN THESE TERMS COLLECTIVELY AS THE "eTranzact WEBSITES." 
        </p>
        <ul>
          <li class="mt-8" id="site">
            <p class="text-blue-500 text-sm font-bold">Use of eTranazact website</p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">Except as set forth in "Other agreements; software, services or access", below, eTranzact authorizes you to use the eTranzact Websites only for your own personal, non-commercial purposes. Use of the eTranzact Websites for any public or commercial purpose (including, without limitation, on another site or through a networked computer environment) is strictly prohibited. If you make copies of any of the Materials, you must retain on any such copies all copyright and other proprietary notices contained in the original Materials. You may not modify, publicly display, publicly perform, or distribute the Materials. As between you and eTranzact, eTranzact owns the eTranzact Websites. The eTranzact Websites is protected under United States and international copyright laws. Any unauthorized use of the eTranzact Websites may violate copyright, trademark, and other laws.
            </p>
          </li>
          <li class="mt-8" id="access">
            <p class="text-blue-500 text-sm font-bold">Access</p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">You are responsible for obtaining and maintaining all equipment and services needed for access to and use of the eTranzact Websites and for paying all charges related thereto. When you register to open an account anywhere on the eTranzact Websites, or when you contact eTranzact through the eTranzact Websites for the purpose of receiving products or services, eTranzact may collect certain personal information about you. eTranzact's use of such information is governed by the provisions of the eTranzact Privacy Policy for the Site. You agree to provide true, accurate, current, and complete information (and, for as long as you continue to use your ETRANZACT Websites account, to update such information to keep it true, accurate, current, and complete). You are responsible for maintaining the confidentiality of your eTranzact Websites password and you are solely responsible for all activities that occur under your password. You agree to notify eTranzact immediately of any unauthorized use of your password or any other breach of security related to the eTranzact Websites. eTranzact reserves the right to require you to change your password if eTranzact believes that your password no longer is secure. Access to eTranzact Websites granted under other separately executed agreements by eTranzact and You shall supersede the terms contained in this Section. 
            </p>
          </li>
          <li class="mt-8" id="limitation">
            <p class="text-blue-500 text-sm font-bold">Limitation of liabililty</p>
            <p class=" mt-6 text-gray-400 text-sm leading-7"> The information ETRANZACT collects to understand your needs and interests helps ETRANZACT deliver a consistent and personalized experience. For example, ETRANZACT may use your information to assist you in completing a transaction or order; prevent and detect fraud or other malicious activity; communicate with you about products and services; provide service and support; update you on new services and benefits; provide personalized promotional offers; select content to be communicated to you; personalize some ETRANZACT websites; allow you to participate in contests and surveys; and contact you for market research regarding ETRANZACT products or services. The testimonials posted on our Web site are only posted with the expressed permission of the individual or company who provided that testimonial. Card information is used only for payment processing and card activation. 
            </p>
          </li>
          <li class="mt-8" id="prohibited">
            <p class="text-blue-500 text-sm font-bold">Prohibited uses</p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">You agree not to use the eTranzact Websites (including, without limitation, any Materials or Services you may obtain through your use of the eTranzact Websites): (a) in a manner that violates any local, state, national, foreign, or international statute, regulation, rule, order, treaty, or other law (each a "Law"); (b) to stalk, harass, or harm another individual; (c) to impersonate any person or entity or otherwise misrepresent your affiliation with a person or entity; or (d) to interfere with or disrupt the eTranzact Websites or servers or networks connected to the eTranzact Websites. You further agree not to (x) use any data mining, robots, or similar data gathering or extraction methods in connection with the eTranzact Websites; or (y) attempt to gain unauthorized access to any portion of the eTranzact Websites or any other accounts, computer systems, or networks connected to the eTranzact Websites, whether through hacking, password mining, or any other means. 
            </p>
          </li>
          <li class="mt-8" id="termination">
            <p class="text-blue-500 text-sm font-bold">Termination</p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">Except as set forth in "Other agreements; software, services or access", below, eTranzact may terminate, suspend, or modify your registration with, or access to, all or part of the eTranzact Websites, without notice, at any`time`and for any reason. You may discontinue your participation in and access to the eTranzact Websites at any time. If you breach any of these Terms, your authorization to use the eTranzact Websites automatically terminates and you must immediately destroy any downloaded or printed Materials (and any copies thereof). 
            </p>
          </li>
          <li class="mt-8" id="disclaimer">
            <p class="text-blue-500 text-sm font-bold">Disclaimer</p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">THE eTranzact WEBSITES IS PROVIDED "AS IS" AND "WITH ALL FAULTS" AND THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE eTranzact WEBSITES IS WITH YOU. SHOULD THE MATERIALS OR SERVICES PROVE DEFECTIVE, YOU, AND NOT eTranzact, ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING AND REPAIR. eTranzact EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, WITH RESPECT TO THE eTranzact WEBSITES (INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED OR STATUTORY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR USE OR PURPOSE, TITLE, AND NON-INFRINGEMENT OF INTELLECTUAL PROPERTY RIGHTS). WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, eTranzact MAKES NO WARRANTY THAT THE eTranzact WEBSITES WILL MEET YOUR REQUIREMENTS OR THAT THE eTranzact WEBSITES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR FREE OR THAT DEFECTS IN THE eTranzact WEBSITES WILL BE CORRECTED. eTranzact MAKES NO WARRANTY AS TO THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE eTranzact WEBSITES OR AS TO THE ACCURACY OR RELIABILITY OF ANY INFORMATION OBTAINED THROUGH THE eTranzact WEBSITES. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU THROUGH THE eTranzact WEBSITES OR FROM eTranzact, ITS PARENTS, SUBSIDIARIES, OR OTHER AFFILIATED COMPANIES, OR ITS OR THEIR SUPPLIERS (OR THE RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS OF ANY SUCH ENTITIES) (COLLECTIVELY, "THE eTranzact PARTIES") SHALL CREATE ANY WARRANTY. eTranzact DISCLAIMS ALL EQUITABLE INDEMNITIES 
            </p>
          </li>
          <li class="mt-8" id="liability">
            <p class="text-blue-500 text-sm font-bold">Limitation of liability</p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">IN NO EVENT WILL ANY OF THE eTranzact PARTIES BE LIABLE FOR (A) ANY INDIRECT, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES OR (B) ANY DAMAGES WHATSOEVER IN EXCESS OF ONE HUNDRED UNITED STATES (US$100.00) DOLLARS (INCLUDING, WITHOUT LIMITATION, THOSE RESULTING FROM LOSS OF REVENUES, LOST PROFITS, LOSS OF GOODWILL, LOSS OF USE, BUSINESS INTERRUPTION, OR OTHER INTANGIBLE LOSSES), ARISING OUT OF OR IN CONNECTION WITH THE eTranzact WEBSITES (INCLUDING, WITHOUT LIMITATION, USE, INABILITY TO USE, OR THE RESULTS OF USE OF THE eTranzact WEBSITES), WHETHER SUCH DAMAGES ARE BASED ON WARRANTY, CONTRACT, TORT, STATUTE, OR ANY OTHER LEGAL THEORY AND EVEN IF ANY eTranzact PARTY HAS BEEN ADVISED (OR SHOULD HAVE KNOWN) OF THE POSSIBILITY OF SUCH DAMAGES. 
            </p>
          </li>
          <li class="mt-8" id="exclusions">
            <p class="text-blue-500 text-sm font-bold">Exclusions and limitations </p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for certain damages. Accordingly, some of the above disclaimers and limitations of liability may not apply to you. To the extent that any eTranzact Party may not, as a matter of applicable law, disclaim any implied warranty or limit its liabilities, the scope and duration of such warranty and the extent of the eTranzact Party's liability shall be the minimum permitted under such applicable law. 
            </p>
          </li>
          <li class="mt-8" id="other">
            <p class="text-blue-500 text-sm font-bold">Other agreements; softwares, servies or access</p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">eTranzact may provide products (such as hardware or software) services (such as hardware maintenance or repair or software maintenance, installation, or training) or access to eTranzact Websites under the terms of a separate agreement between you and eTranzact (each, an "Other Agreement"). eTranzact's obligations with respect to any product, service, or access that it makes available to you under any Other Agreement shall be governed solely by the Other Agreement under which such product or service is provided and these Terms shall not be deemed or construed to alter the terms of such Other Agreements. For example, the use of any software that is made available to download from the eTranzact Websites ("Software") is governed by the terms of the end user license agreement, if any, which accompanies or is included with the Software ("License Agreement"). You may not install any Software that is accompanied by or includes a License Agreement unless you first have agreed to the License Agreement terms. If no end user license agreement accompanies or is included with the Software, then such Software shall be deemed to be Materials hereunder and these Terms shall govern your use of such Software. FURTHER REPRODUCTION OR REDISTRIBUTION OF ANY SOFTWARE IS EXPRESSLY PROHIBITED, UNLESS SUCH REPRODUCTION OR REDISTRIBUTION IS EXPRESSLY PERMITTED BY THE LICENSE AGREEMENT ACCOMPANYING OR INCLUDED WITH SUCH SOFTWARE.
            </p>
          </li>
          <li class="mt-8" id="modification">
            <p class="text-blue-500 text-sm font-bold">Modifications to eTranzact websites </p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">eTranzact reserves the right to modify, suspend, or discontinue the eTranzact Websites at any`time`without notice to you. For example, eTranzact may make changes to the Materials and/or Services, or to the products and prices described in them, at any`time`without notice. The Materials and Services may be out of date and eTranzact makes no commitment to update the Materials and Services whatsoever. Information published on a Site may refer to products, programs, or services that are not available in your country. Consult your local eTranzact business contact for information regarding the products, programs, and services that may be available to you.
            </p>
          </li>
          <li class="mt-8" id="user">
            <p class="text-blue-500 text-sm font-bold">User submission</p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">Certain areas of the eTranzact Websites (e.g., chat rooms or customer ratings and review areas) may permit you to submit feedback, information, data, text, software, music, sound, photographs, graphics, video, messages, or other materials (each, a "User Submission"). By submitting a User Submission, you grant to eTranzact an irrevocable, perpetual, transferable, non-exclusive, fully-paid, worldwide, license (sublicensable through multiple tiers) to (a) use, distribute, reproduce, modify, adapt, publish, translate, publicly perform, and publicly display your User Submissions (or any modification thereto), in whole or in part, in any format or medium now known or later developed and (b) use (and permit others to use) your User Submission in any manner and for any purpose (including, without limitation, commercial purposes) that eTranzact deems appropriate in its sole discretion (including, without limitation, to incorporate your User Submission or any modification thereto, in whole or in part, into any technol ogy, product, or service). eTranzact reserves the right to display advertisements in connection with User Submissions and to use User Submissions for advertising and promotional purposes. eTranzact may, but is not obligated to, pre-screen User Submissions or monitor any area of the eTranzact Websites through which User Submissions may be submitted. You agree that you are solely responsible for all of your User Submissions. eTranzact is not required to host, display, or distribute any User Submissions on or through the ETRANZACT Websites and may remove at any`time`or refuse any User Submissions for any reason. eTranzact is not responsible for any loss, theft, or damage of any kind to any User Submissions. eTranzact does not want to receive any User Submission that is confidential. You understand and agree that any User Submission will be considered non-confidential and non-proprietary and that eTranzact will be free to disclose your User Submission to any third party absent any obligation of confidence on the part of the recipient. eTranzact does not guarantee that you will have any recourse through eTranzact or any third party to edit or delete any User Submission you have submitted. By submitting any User Submission, you represent and warrant that: you are at least 13 years old; you own all rights in your User Submissions (including, without limitation, all rights to the audio, video, or digital recording and the performance contained in your User Submissions) or, alternatively, you have acquired all necessary rights in your User Submissions to enable you to grant to eTranzact the rights in your User Submissions described herein; Ctrl + (0) = default font size you have paid and will pay in full all license fees, clearance fees, and other financial obligations, of any kind, arising from any use or commercial exploitation of your User Submissions; you are the individual pictured and/or heard in your User Submissions or, alternatively, you have obtained permission from each person (including consent from parents or guardians for any individual under the age of eighteen (18)) who appears and/or is heard in your User Submissions to grant the rights to eTranzact described herein; your User Submissions do not infringe the copyright, trademark, patent, trade secret, or other intellectual property rights, privacy rights, or any other legal or moral rights of any third party; you voluntarily agree to waive all "moral rights" that you may have in your User Submission; any information contained in your User Submission is not known by you to be false, inaccurate, or misleading; (h) your User Submission does not violate any Law (including, but not limited to, those governing export control, consumer protection, unfair competition, anti-discrimination, or false advertising); your User Submission is not, and may not reasonably be considered to be, defamatory, libelous, hateful, racially, ethnically, religiously, or otherwise biased or offensive, unlawfully threatening, or unlawfully harassing to any individual, partnership, or corporation, vulgar, pornographic, obscene, or invasive of another's privacy; you were not and will not be compensated or granted any consideration by any third party for submitting your User Submission; (k) your User Submission does not incorporate materials from a third party web site, or addresses, email addresses, contact information, or phone numbers (other than your own); your User Submission does not contain any viruses, worms, spyware, adware, or other potentially damaging programs or files; (m) your User Submission does not contain any information that you consider confidential, proprietary, or personal; and your User Submission does not contain or constitute any unsolicited or unauthorized advertising, promotional materials, junk mail, spam, chain letters, pyramid schemes, or any other form of solicitation. Links on the eTranzact Websites to third-party websites are provided solely as a convenience to you. If you use these links, you will leave the eTranzact Websites. eTranzact is not obligated to review such third-party websites, does not control such third-party websites, and is not responsible for any such third-party websites (or the products, services, or content available through the same). Thus, eTranzact does not endorse or make any representations about such third-party websites, any information, software, products, services, or materials found there or any results that may be obtained from using them. If you decide to access any of the third-party websites linked to from the eTranzact Network, you do this entirely at your own risk.
            </p>
          </li>
          <li class="mt-8" id="third">
            <p class="text-blue-500 text-sm font-bold">Links to third-party websites </p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">You may create links to this Site from other websites, but only in accordance with the following terms and in compliance with all applicable laws. Absent eTranzact's written authorization otherwise, a website that links to this Site: Linking to this site may link to, but shall not replicate, any Materials (including any eTranzact logo); shall not create a browser or border environment around any Materials; shall not imply that eTranzact endorses such website or any products, services, or content available through such website; shall not misrepresent its relationship with eTranzact; shall not present false or misleading information about eTranzact, its products, or its services; shall not contain content that could be construed as distasteful, offensive, or controversial; shall contain only content that is appropriate for all age groups.
            </p>
          </li>
          <li class="mt-8" id="indem">
            <p class="text-blue-500 text-sm font-bold">Indemnification </p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">You agree to indemnify, defend, and hold harmless the eTranzact Parties from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that such parties may incur as a result of or arising from your (or anyone using your account's) violation of these Terms. eTranzact reserves the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you and, in such case, you agree to cooperate with eTranzact's defense of such claim.
            </p>
          </li>
          <li class="mt-8" id="eco">
            <p class="text-blue-500 text-sm font-bold">Electronic Communication </p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">When you visit the Site or send e-mails to eTranzact, you are communicating with eTranzact electronically. We may respond to you by e-mail or by posting notices on the Site. You agree that all such notices, disclosures, and other communications that eTranzact provides to you electronically satisfy any legal requirement that such communications be in writing.
            </p>
          </li>
          <li class="mt-8" id="general">
            <p class="text-blue-500 text-sm font-bold">General</p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">These Terms, together with any additional terms to which you agree when using particular elements of the eTranzact Websites, constitute the entire and exclusive and final statement of the agreement between you and eTranzact with respect to the subject matter hereof, superseding any prior agreements or negotiations between you and eTranzact with respect to such subject matter. The eTranzact Parties are third party beneficiaries with respect to the provisions in these Terms that reference them. These Terms and the relationship between you and eTranzact shall be governed by the laws of the State of California as applied to agreements made, entered into, and performed entirely in California by California residents, notwithstanding your actual place of residence. All lawsuits arising from or relating to these Terms or your use of the eTranzact Websites shall be brought in the Federal or State courts located in Santa Clara County, California, and you hereby irrevocably submit to the exclusive personal jurisdiction of such courts for such pu rpose. The f ailure of eTranzact to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. If any provision of these Terms is found by a court of competent jurisdiction to be invalid, you nevertheless agree that the court should endeavor to give effect to the intentions of eTranzact and you as reflected in the provision, and that the other provisions of these Terms remain in full force and effect. The section titles in these Terms are for convenience only and have no legal or contractual effect. These Terms shall remain in full force and effect notwithstanding any termination of your use of the eTranzact Websites. These Terms will be interpreted without application of any strict construction in favor of or against you or eTranzact. These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by eTranzact without restriction.
            </p>
          </li>
          <li class="mt-8" id="mod">
            <p class="text-blue-500 text-sm font-bold">Modification to these terms </p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">eTranzact may, in its sole and absolute discretion, change these Terms from`time`to time. eTranzact will post notice of such changes on the applicable Site. If you object to any such changes, your sole recourse shall be to cease using the eTranzact Websites. Continued use of the eTranzact Websites following notice of any such changes shall indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes. Certain provisions of these Terms may be superseded by expressly-designated legal notices or terms located on particular pages of the eTranzact Websites and, in such circumstances, the expressly-designated legal notice or term shall be deemed to be incorporated into these Terms and to supersede the provision(s) of these Terms that are designated as being superseded.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <font-awesome-icon icon="angle-down" class="ml-8 cursor-pointer" @click="scrollDown"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      selected: 'terms',
      selectedClass: 'text-blue-900 font-bold',
    }
  },
  methods: {
    scrollDown(){
      this.$refs.sidelist.scrollTop += 100
    }
  }
}
</script>

<style scoped>
ul.sidelist{
  min-width: 25%;
  max-height: 400px;
  overflow-y: auto;
}
ul.sidelist li {
  color: #062648;
}
.details{
  max-height: 450px;
  overflow-y: auto;
}
.details::-webkit-scrollbar-track, .sidelist::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}
.details::-webkit-scrollbar, .sidelist::-webkit-scrollbar
{
  width: 0px;
	background-color: #F5F5F5;
}

</style>