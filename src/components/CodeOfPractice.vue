<template>
  <div class="">
    <div class="flex justify-between items-start py-8 md:py-0">
      <ul class="md:py-12 sidelist px-2 md:px-8 md:mt-12" ref="sidelist">
        <li class="text-sm" @click="selected = 'consumer'">
          <a href="#consumer" :class="[selected == 'consumer' ? selectedClass : 'text-sm']">
            Consumer code of practice
          </a>
        </li>
        <li class="mt-6" @click="selected = 'scope'">
          <a href="#scope"  :class="[selected == 'scope' ? selectedClass : 'text-sm']">
            Scope and Objectives 
          </a>
        </li>
        <li class="mt-6" @click="selected = 'def'">
          <a href="#def" :class="[selected == 'def' ? selectedClass : 'text-sm']">
            Definitions
          </a> 
          </li>
        <li class="mt-6" @click="selected = 'application'">
          <a href="#application" :class="[selected == 'application' ? selectedClass : 'text-sm']">
            Application of Code
          </a>
          </li>
        <li class="mt-6" @click="selected = 'prohibited'">
          <a href="#services" :class="[selected == 'prohibited' ? selectedClass : 'text-sm']">
            Service Contracts and Duration 
          </a>
          </li>
        <li class="mt-6" @click="selected = 'termination'">
          <a href="#termination" :class="[selected == 'termination' ? selectedClass : 'text-sm']">
            Service Subscription 
          </a>
          </li>
        <li class="mt-6" @click="selected = 'disclaimer'">
          <a href="#disclaimer" :class="[selected == 'disclaimer' ? selectedClass : 'text-sm']">
            Contract Terms and Conditions 
          </a>
          </li>
        <li class="mt-6" @click="selected = 'liability'">
          <a href="#liability" :class="[selected == 'liability' ? selectedClass : 'text-sm']">
            Availability of Service
          </a>
          </li>
        <li class="mt-6" @click="selected = 'exclusions'">
          <a href="#exclusions" :class="[selected == 'exclusions' ? selectedClass : 'text-sm']">
            Advertising of Packaged Services 
          </a>
          </li>
        <li class="mt-6" @click="selected = 'other'">
          <a href="#other" :class="[selected == 'other' ? selectedClass : 'text-sm']">
            Complaint Processes
          </a>
          </li>
        <li class="mt-6" @click="selected = 'modification'">
          <a href="#modification" :class="[selected == 'modification' ? selectedClass : 'text-sm']">
            Further Recourse  
          </a>
          </li>
        <li class="mt-6" @click="selected = 'user'">
          <a href="#user" :class="[selected == 'user' ? selectedClass : 'text-sm']">
            Data Collection and Analysis of Complaints and Outcome
          </a>
          </li>
        <li class="mt-6" @click="selected = 'third'">
          <a href="#third" :class="[selected == 'third' ? selectedClass : 'text-sm']">
            Retention of Records 
          </a>
          </li>
        <li class="mt-6" @click="selected = 'indem'">
          <a href="#indem" :class="[selected == 'indem' ? selectedClass : 'text-sm']">
            Opt-In and Opt-Out
          </a>
          </li>
        <li class="mt-6" @click="selected = 'eco'">
          <a href="#eco" :class="[selected == 'eco' ? selectedClass : 'text-sm']">
            Billing Information 
          </a>
          </li>
        <li class="mt-6" @click="selected = 'general'">
          <a href="#general" :class="[selected == 'general' ? selectedClass : 'text-sm']">
            Itemization of Charges
          </a>
          </li>
        <li class="mt-6" @click="selected = 'mod'">
          <a href="#mod" :class="[selected == 'mod' ? selectedClass : 'text-sm']">
            Timing for Issuance of Bill  
          </a>
          </li>
        <li class="mt-6" @click="selected = 'pcon'">
          <a href="#pcon" :class="[selected == 'pcon' ? selectedClass : 'text-sm']">
            Payment Confirmation 
          </a>
          </li>
        <li class="mt-6" @click="selected = 'freq'">
          <a href="#freq" :class="[selected == 'freq' ? selectedClass : 'text-sm']">
            Billing Frequency   
          </a>
          </li>
      </ul>
      <div class="details w-full md:py-12 md:mt-12">
        <p style="color: #062648" class="text-lg font-bold" id="consumer">Consumer Code of Practice </p>
        <p class="mt-6 text-gray-400 text-sm leading-7">
         The publication is made in pursuance of Regulation 4(1) of the Consumer Code of Practice Regulations 2007 
        </p>
        <ul>
          <li class="mt-8" id="scope">
            <p class="text-blue-500 text-sm font-bold">Scope and Objectives </p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">eTranzact International Plc (”eTranzact”), Consumer Code of Practice (the ”Code”) made in pursuance of Section 106(2) of the Nigerian Communications Act2003(“the Act”) and Regulation 4(1) of the Consumer Code of Practice Regulations 2007 (“the Regulations”)
            </p>
          </li>
          <li class="mt-8" id="def">
            <p class="text-blue-500 text-sm font-bold">Definitions</p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">Terms used in this Code are given their ordinary meaning within the framework of the business or eTranzact’s document. Clause headings are inserted for convenience of reference only and shall not affect the interpretation of this Code. Words importing the plural shall, except where the context otherwise requires, include the singular and vice versa: references to the masculine gender shall include the feminine or neuter genders and vice versa; and references to persons shall be construed as references to an individual firm, company, body corporate, statutory board, government body, incorporated body of persons, association or trust as the context may require.
            </p>
          </li>
          <li class="mt-8" id="application">
            <p class="text-blue-500 text-sm font-bold">Application of Code</p>
            <p class=" mt-6 text-gray-400 text-sm leading-7"> The Code shall govern the provision of services to consumers by eTranzact. In the event of a conflict between the Code and the General Code, to the extent that the terms of the codes are not less favorable to the Consumers than the General Code, this Code shall apply eTranzact shall provide Consumers with information on their services that is complete, accurate, and up—to—date and in simple, clear language. This would be made available to both the customer service department of the company, web portal and also in the welcome message after opting in fora service eTranzact shall endeavor to respond in a timely manner to Consumer requests for information on their services and such information shall be provided free of charge and shall include at least the following : (a) Current service, arrangements, including information about the services and tariff for all services offered to the public, shall be readily available via appropriate media including electronic format on eTranzact’s web site. (b) Any request in tariff changes would be done under the auspice of eTranzact in consultation with the Service provider. Approval shall be gotten for any tariff change and also adequate information with an option to opt out shall be given to the user/subscriber. (c) eTranzact shall also endeavor to ensure that subscribers have good Service Level Agreement.
            </p>
          </li>
          <li class="mt-8" id="services"> 
            <p class="text-blue-500 text-sm font-bold">Service Contracts and Duration </p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">eTranzact shall supply, or make available on request, a copy of the contract or agreement for the provision of services, and such contracts shall be written in plain and clear language. Description of Services eTranzact offers USSD and Bulk SMS Services. This service caters to customer’s need for SMS broadcast in areas such as marketing campaigns, promotion activities, and customer notifications.
            </p>
          </li>
          <li class="mt-8" id="termination">
            <p class="text-blue-500 text-sm font-bold">Service Subscription </p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">Customers may subscribe to the service via a convenient electronic or web channel. eTranzact upon receipt of subscription will issue email or Short Message Service confirmation.
            </p>
          </li>
          <li class="mt-8" id="disclaimer">
            <p class="text-blue-500 text-sm font-bold">Contract Terms and Conditions</p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">All terms and conditions of a contract regarding the provision of any of our services shall be clearly stated in the contract or agreement. Furthermore, contracts entered into by eTranzact with its customers shall have a specific duration which shall commence on a definite date to be stated in the contract and shall terminate on a certain date albeit in accordance with the termination provisions in such contract.
            </p>
          </li>
          <li class="mt-8" id="liability">
            <p class="text-blue-500 text-sm font-bold">Availability of Service</p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">eTranzact services are available on all mobile networks, however our services are network dependent, services will be restricted to certain areas within Nigeria where mobile network service is available as contained in promotion materials.
            </p>
          </li>
          <li class="mt-8" id="exclusions">
            <p class="text-blue-500 text-sm font-bold">Advertising of Packaged Services</p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">Where eTranzact represents in advertising materials that a service is provided as part of a package, eTranzact shall ensure it is able to supply all components of the service package. In the event that eTranzact is or may be unable to supply any component of the package, appropriate information about this limitation shall be included in the advertising materials. Where advertising materials indicate the price of a component of a service package, eTranzact shall include in the advertising materials a statement of the minimum total charge for the package, and indicate any Conditions that may apply to obtain the component at the stated price.
            </p>
          </li>
          <li class="mt-8" id="other">
            <p class="text-blue-500 text-sm font-bold">Complaint Processes </p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">eTranzact operates a customer service desk which is reachable during working hours from 8:00am to 5:00pm and outside working hours via e-mail. All consumers can contact the help desk via telephone; OJ -270J J62 email: info-ng@etranzact.com. Before you contact our support desk please make sure that you have details of the transaction initiated, your mobile number,) and summary of the complaint. This will enable us process and resolve your complaints quickly.
            </p>
          </li>
          <li class="mt-8" id="modification">
            <p class="text-blue-500 text-sm font-bold">Further Recourse</p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">In the event that the complaining customer remains dissatisfied with the outcome/resolution of the complaint, has the right to refer the complaint to Nigerian Communication Commission (NCC).
            </p>
          </li>
          <li class="mt-8" id="user">
            <p class="text-blue-500 text-sm font-bold">Data Collection and Analysis of Complaints and Outcome </p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">An appropriate recording system for complaints and their outcome/resolution shall be set up and such system shall have all complaints and resolution stored in a discernible manner for easy identification.
            </p>
          </li>
          <li class="mt-8" id="third">
            <p class="text-blue-500 text-sm font-bold">Retention of Records </p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">Any information collected and recorded as part of complaint handling processes shall be retained for at least twelve (1 2) months following the resolution of complaints or as directed by NCC from time to time.
            </p>
          </li>
          <li class="mt-8" id="indem">
            <p class="text-blue-500 text-sm font-bold">Opt-In and Opt-Out</p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">Upon request for any service, eTranzact shall provide the consumer with Opt-in and Opt-out options in clear, simple and understandable terms eTranzact shall provide the consumer with access to a HELP function to obtain information on services they are at the time of request, subscribed to and how to opt out in clear plain English.
            </p>
          </li>
          <li class="mt-8" id="eco">
            <p class="text-blue-500 text-sm font-bold">Billing Information </p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">eTranzact shall ensure that, at a minimum, the following information is included in any billing or charging notifications issued by it or on its behalf: <br>
            (a) The name of the service for which the consumer has been billed <br>
            (b) The type of the service for which the consumer has been billed and the service delivery medium <br>
            (c) The period over which the service associated with the charge will be provided <br>
            (d) The total amount billed or charged to the consumer's prepaid account 

            </p>
          </li>
          <li class="mt-8" id="general">
            <p class="text-blue-500 text-sm font-bold">Itemization of Charges</p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">eTranzact shall ensure that each consumer has access to itemised details to all charges pertaining to subscribers on that mobile network and eTranzact shall ensure that all such itemized details are available for 1 2 months after the billing/charges effect has occurred.
            </p>
          </li>
          <li class="mt-8" id="mod">
            <p class="text-blue-500 text-sm font-bold">Timing for Issuance of Bill </p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">eTranzact shall bill Consumers at the point of activation and shall equally ensure that in instances where a service for which a consumer has been billed cannot be delivered, the consumer will be subsequently offered the service at no extra cost for a period of time equal to the period over which the service should have been delivered but was not. Where the circumstances will not permit the service to be delivered (due to circumstances beyond the reasonable control of eTranzact, such as an event of force majeure or a technical system failure at the mobile network resulting in service interruption), eTranzact shall liaise with the mobile network operator to establish a suitable resolution path that will ensure that consumers do not lose any value and are appropriately refunded and compensated.
            </p>
          </li>
          <li class="mt-8" id="pcon">
            <p class="text-blue-500 text-sm font-bold">Payment Confirmation  </p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">eTranzact shall ensure that Consumers are able to verify their bill payment by acknowledgment of payment on the next bill issued, with such appropriate and accessible methods as may be made available by eTranzact. 
            </p>
          </li>
          <li class="mt-8" id="freq">
            <p class="text-blue-500 text-sm font-bold">Billing Frequency  </p>
            <p class=" mt-6 text-gray-400 text-sm leading-7">eTranzact shall provide Consumers with advance written notification of any proposed changes in billing before any such changes are implemented via any channel over which eTranzact services are offered. Consumers shall be informed in all such notifications of how to opt out of the service to avoid experiencing the proposed changes in billing.
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
      selected: 'consumer',
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