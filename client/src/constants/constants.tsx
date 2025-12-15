import { ServiceType, TestimonialType } from "@/types/index";

// Services array - Add your services here
// Each service should have: id, title, description, features (array), icon, and category
// Example:
// {
//   id: "service-1",
//   title: "Service Name",
//   description: "Description of the service",
//   features: ["Feature 1", "Feature 2", "Feature 3"],
//   icon: "Droplets", // Use icon names from lucide-react
//   category: "water-treatment", // Category for filtering
// }
export const SERVICES: ServiceType[] = [];

export const TESTIMONIALS: TestimonialType[] = [
  {
    id: "testimonial-1",
    name: "Rajesh Mehta",
    position: "Factory Manager",
    company: "Sterling Dyes & Chemicals, Ahmedabad",
    content:
      "We were struggling with GPCB compliance for two years. Three different vendors couldn't solve our COD discharge problem. DLS team spent a week understanding our process, then designed a custom ETP that actually works. Our COD levels are now consistently below 250 mg/L. Yes, installation took 2 weeks longer than promised, but the results speak for themselves.",
    rating: 4,
    project: "Custom ETP Installation",
  },
  {
    id: "testimonial-2",
    name: "Priya Nambiar",
    position: "Municipal Engineer",
    company: "Thrissur Municipal Corporation",
    content:
      "Honestly, we had bad experiences with contractors before. But Mr. Singh visited our site personally and his team delivered exactly what they promised. The 15 MLD STP has been operational for 8 months now without any major issues. Their AMC rates are also very reasonable compared to others we checked.",
    rating: 5,
    project: "Municipal STP - 15 MLD",
  },
  {
    id: "testimonial-3",
    name: "Vikas Agarwal",
    position: "Owner",
    company: "Agarwal Food Processing, Meerut",
    content:
      "Our old ETP was consuming too much power and chemicals. DLS upgraded the system with better aeration and we're now saving ₹45,000 monthly on operating costs. The payback period will be under 2 years. Good technical knowledge, reasonable pricing.",
    rating: 5,
    project: "ETP Modernization",
  },
  {
    id: "testimonial-4",
    name: "Dr. Sunita Reddy",
    position: "Hospital Administrator",
    company: "Apollo Clinic, Hyderabad",
    content:
      "We needed a compact STP for our new 50-bed facility. Space was very limited. DLS designed a modular system that fits in just 200 sq ft and handles our biomedical wastewater perfectly. Installation was clean, team was professional, and they trained our maintenance staff properly.",
    rating: 5,
    project: "Hospital STP - Compact Design",
  },
  {
    id: "testimonial-5",
    name: "Harpreet Singh Bhatia",
    position: "Director Operations",
    company: "Bhatia Textiles Ltd., Ludhiana",
    content:
      "Working with them for 3 years now. They maintain our ETP and cooling towers. Not the cheapest option we had, but definitely the most reliable. Emergency response is good - they came at 11 PM when our pH controller failed. Would recommend for anyone who needs dependable service.",
    rating: 4,
    project: "Ongoing Maintenance Contract",
  },
  {
    id: "testimonial-6",
    name: "Mohammed Farooq",
    position: "Project Head",
    company: "Skyline Developers, Noida",
    content:
      "We've built 4 residential townships and DLS has done the STP work for all of them. They understand builder timelines and compliance requirements. Their designs pass UPPCB approval without issues. Fair pricing, no surprises during execution.",
    rating: 5,
    project: "Multiple Residential STPs",
  },
];

export const QUICK_CHAT_MESSAGES = [
  "What is STP capacity calculation?",
  "ETP technology options",
  "Get pricing quote",
  "RO system specifications",
  "Cooling tower capacity",
  "Maintenance services",
];
