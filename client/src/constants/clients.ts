/**
 * CLIENTS CONFIGURATION FILE
 * ==========================
 *
 * How to add a new client:
 * 1. Add the client logo image to: client/public/clients/ folder
 * 2. Add a new entry to the CLIENTS array below
 *
 * Example:
 * {
 *   id: "unique-client-id",        // Unique identifier (lowercase, no spaces)
 *   name: "Client Company Name",    // Full company name
 *   logo: "/clients/logo-name.png", // Path to logo in public/clients folder
 *   category: "government",         // Category: "government", "municipal", "private", "international"
 *   website: "https://example.com", // Optional: Client website URL
 * }
 *
 * Supported image formats: .png, .jpg, .jpeg, .svg, .webp
 * Recommended logo size: 200x100 pixels (width x height)
 *
 * Categories available:
 * - "government"   : Government organizations and departments
 * - "municipal"    : Municipal corporations and local bodies
 * - "private"      : Private companies and industries
 * - "international": International organizations and foreign clients
 */

export interface ClientType {
  id: string;
  name: string;
  logo: string;
  category: "government" | "municipal" | "private" | "international";
  website?: string;
}

export const CLIENT_CATEGORIES = [
  { id: "all", label: "All Clients" },
  { id: "government", label: "Government" },
  { id: "municipal", label: "Municipal Bodies" },
  { id: "private", label: "Private Sector" },
  { id: "international", label: "International" },
] as const;

/**
 * ADD YOUR CLIENTS HERE
 * =====================
 * Copy the template below and fill in your client details:
 *
 * {
 *   id: "client-name",
 *   name: "Client Full Name",
 *   logo: "/clients/client-logo.png",
 *   category: "government",
 *   website: "https://clientwebsite.com",
 * },
 */
export const CLIENTS: ClientType[] = [
  // ===== GOVERNMENT CLIENTS =====
  {
    id: "airports-authority-india",
    name: "Airports Authority of India (AAI)",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Airports_Authority_of_India_logo.svg/1200px-Airports_Authority_of_India_logo.svg.png",
    category: "government",
    website: "https://www.aai.aero",
  },
  {
    id: "irctc",
    name: "Indian Railway Catering and Tourism Corporation Limited (IRCTC)",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FihFnL3fXD3o0UNQLwQXnet4SjYKqdGa-w&s",
    category: "government",
    website: "https://www.irctc.co.in",
  },
  {
    id: "indian-oil",
    name: "Indian Oil Corporation Limited (IOCL)",
    logo: "https://images.seeklogo.com/logo-png/19/1/indian-oil-logo-png_seeklogo-198933.png",
    category: "government",
    website: "https://iocl.com",
  },
  {
    id: "ongc",
    name: "Oil and Natural Gas Corporation Limited (ONGC)",
    logo: "https://www.ongcindia.com/documents/77751/2132071/ongcLogo.jpg",
    category: "government",
    website: "https://www.ongcindia.com",
  },
  {
    id: "all-india-radio",
    name: "All India Radio (Prasar Bharati)",
    logo: "https://www.newsonair.gov.in/wp-content/uploads/2025/11/Akhashvani-1.png",
    category: "government",
    website: "https://newsonair.gov.in",
  },
  {
    id: "up-jal-nigam",
    name: "UP Jal Nigam",
    logo: "https://upjn.co.in/images/logofav.png",
    category: "government",
  },
  {
    id: "indian-army",
    name: "Indian Army",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/ADGPI_Indian_Army.svg/1280px-ADGPI_Indian_Army.svg.png",
    category: "government",
  },
  {
    id: "bhel",
    name: "Bharat Heavy Electricals Limited (BHEL)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/BHEL_logo.svg/2492px-BHEL_logo.svg.png",
    category: "government",
    website: "https://www.bhel.com",
  },
  {
    id: "mp-tourism",
    name: "Madhya Pradesh Tourism",
    logo: "https://www.mptourism.com/images/logo.png",
    category: "government",
    website: "https://www.mptourism.com",
  },
  {
    id: "dda",
    name: "Delhi Development Authority (DDA)",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Delhi_Development_Authority_Logo.svg/1200px-Delhi_Development_Authority_Logo.svg.png",
    category: "government",
    website: "https://www.dda.gov.in",
  },
  {
    id: "haryana-police-housing",
    name: "Haryana Police Housing Corporation",
    logo: "https://helpdesk.hphc.org.in/images/logo.png",
    category: "government",
    website: "https://www.hphc.gov.in",
  },
  {
    id: "hindustan-petroleum",
    name: "Hindustan Petroleum Corporation Limited (HPCL)",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lFK3fJbCqLbmAf8jwAlpZ91fr6fZ3dCLMg&s",
    category: "government",
    website: "https://www.hindustanpetroleum.com",
  },
  {
    id: "indian-railways",
    name: "Indian Railways",
    logo: "https://upload.wikimedia.org/wikipedia/hi/7/7b/Indian_Railways_logo.png",
    category: "government",
    website: "https://indianrailways.gov.in",
  },
  {
    id: "cpwd",
    name: "Central Public Works Department (CPWD)",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbQw57ehjTquM_XUm-_i39md4BXcAdL99BA&s",
    category: "government",
    website: "https://cpwd.gov.in",
  },
  {
    id: "nagpur-metro",
    name: "Nagpur Metro Rail Corporation Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Nagpur_Metro_Logo.png",
    category: "government",
    website: "https://www.nagpurmetrorail.com",
  },
  {
    id: "pwd-delhi",
    name: "Public Works Department, Delhi",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmqjjLpOvk0cqosfEuFKTfUL77ymdqLM4B2w&s",
    category: "government",
    website: "https://delhi.gov.in/department/pwd",
  },
  {
    id: "goa-tourism",
    name: "Goa Tourism Development Corporation",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGV0b_sssZYLQ/company-logo_200_200/company-logo_200_200/0/1724733320008/goa_tourism_logo?e=2147483647&v=beta&t=FiyMl2UncXJYo9YccEYGnS8Gas4tiGCzNVCxQHXXf30",
    category: "government",
    website: "https://goatourism.gov.in",
  },
  {
    id: "verka",
    name: "Punjab State Co-operative Milk Producers Federation (Verka)",
    logo: "https://verka.coop/wp-content/themes/verka_punjab/images/logo-verka.png",
    category: "government",
    website: "https://verka.coop",
  },
  {
    id: "delhi-metro",
    name: "Delhi Metro Rail Corporation (DMRC)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Delhi_Metro_logo.svg/250px-Delhi_Metro_logo.svg.png",
    category: "government",
    website: "https://www.delhimetrorail.com",
  },
  {
    id: "up-jal-nigam-urban",
    name: "Uttar Pradesh Jal Nigam (Urban)",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivLnLQfkjYy1PXJH9CECWWxW_4RJRKzPBcQ&s",
    category: "government",
    website: "https://upjn.org",
  },
  {
    id: "haryana-forest",
    name: "Haryana Forest Department",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaxLezg6YM_uWFaUeWPwN19RbVHLPvHkLog&s",
    category: "government",
    website: "https://haryanaforest.gov.in",
  },
  {
    id: "pwd-west-bengal",
    name: "Public Works Department, Government of West Bengal",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAUxbaA3VZ0JyMOzFDAokMS2QNMFuFyzWvA&s",
    category: "government",
    website: "https://wbpwd.gov.in",
  },
  {
    id: "ministry-of-defence",
    name: "Ministry of Defence, Government of India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Ministry_of_Defence_India.svg",
    category: "government",
    website: "https://mod.gov.in",
  },
  {
    id: "greater-noida-authority",
    name: "Greater Noida Industrial Development Authority",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/33/GNIDA_logo.png",
    category: "government",
    website: "https://www.greaternoidaauthority.in",
  },
  {
    id: "msme",
    name: "Ministry of Micro, Small and Medium Enterprises (MSME)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/MSME_logo_%28colour%29.svg/1200px-MSME_logo_%28colour%29.svg.png",
    category: "government",
    website: "https://msme.gov.in",
  },
  {
    id: "mohua-cpwd",
    name: "Ministry of Housing & Urban Affairs - CPWD",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1VJf-fCJGYNj5m3jstralVgTyg6fLHfIlA&s",
    category: "government",
    website: "https://mohua.gov.in",
  },
  {
    id: "ntpc",
    name: "NTPC Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/National_Thermal_Power_logo.svg/1200px-National_Thermal_Power_logo.svg.png",
    category: "government",
    website: "https://www.ntpc.co.in",
  },
  {
    id: "bihar-health",
    name: "Bihar State Health Department (Bihar Sarkar Swasthya Vibhag)",
    logo: "https://state.bihar.gov.in/health/cache/1/SLIDER/bihar-logo-red.png",
    category: "government",
    website: "https://state.bihar.gov.in/health",
  },
  {
    id: "incredible-india",
    name: "Ministry of Tourism, Government of India (Incredible India)",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRab4PvMuO7yHyRiLh7s58iPIVayQSWGT3LdQ&s",
    category: "government",
    website: "https://www.incredibleindia.org",
  },
  {
    id: "haryana-energy",
    name: "Haryana Energy Department",
    logo: "https://cdnbbsr.s3waas.gov.in/s3f80ff32e08a25270b5f252ce39522f72/uploads/2022/01/2022011723.png",
    category: "government",
    website: "https://hareda.gov.in",
  },

  // ===== PRIVATE CLIENTS =====
  {
    id: "tata",
    name: "Tata Group",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png",
    category: "private",
    website: "https://www.tata.com",
  },
  {
    id: "acc",
    name: "ACC Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/ACC_Limited_logo.svg/2560px-ACC_Limited_logo.svg.png",
    category: "private",
    website: "https://www.acclimited.com",
  },
  {
    id: "airtel",
    name: "Bharti Airtel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Bharti_Airtel_Logo.svg",
    category: "private",
    website: "https://www.airtel.in",
  },
  {
    id: "dabur",
    name: "Dabur India Limited",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Dabur_Logo.svg/1200px-Dabur_Logo.svg.png",
    category: "private",
    website: "https://www.dabur.com",
  },
  {
    id: "dayanand-medical-college",
    name: "Dayanand Medical College & Hospital, Ludhiana",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHZeEAXBiILh8ehZnVQVYmThqGmBPm6lwAw&s",
    category: "private",
    website: "https://www.dmch.edu",
  },
  {
    id: "haldirams",
    name: "Haldiram's",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Haldiram%27s_Logo_SVG.svg",
    category: "private",
    website: "https://www.haldirams.com",
  },
  {
    id: "hng",
    name: "Hindusthan National Glass & Industries Limited",
    logo: "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/7832311d3c038843e1dd5563ec828236",
    category: "private",
    website: "https://www.hngil.com",
  },
  {
    id: "larsen-toubro",
    name: "Larsen & Toubro Limited (L&T)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png",
    category: "private",
    website: "https://www.larsentoubro.com",
  },
  {
    id: "medanta",
    name: "Medanta - The Medicity",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXnqNMSJtyIRvBMpmvj0CqCVN4eA38ff0xg&s",
    category: "private",
    website: "https://www.medanta.org",
  },
  {
    id: "orient-electric",
    name: "Orient Electric Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Orient_Electric_logo.svg/2560px-Orient_Electric_logo.svg.png",
    category: "private",
    website: "https://www.orientelectric.com",
  },
  {
    id: "parle",
    name: "Parle Products Private Limited",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Parle_Products_logo.svg/1200px-Parle_Products_logo.svg.png",
    category: "private",
    website: "https://www.parleproducts.com",
  },
  {
    id: "radisson-blu",
    name: "Radisson Blu Hotels & Resorts",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqtEJJY_atZX5tTQtxZbS2gNJdCEdYGnewA&s",
    category: "private",
    website: "https://www.radissonhotels.com",
  },
  {
    id: "relaxo",
    name: "Relaxo Footwears Limited",
    logo: "https://etimg.etb2bimg.com/photo/56334131.cms",
    category: "private",
    website: "https://www.relaxofootwear.com",
  },
  {
    id: "ultratech-cement",
    name: "UltraTech Cement Limited",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Ultratech_Cement_Logo.svg/1200px-Ultratech_Cement_Logo.svg.png",
    category: "private",
    website: "https://www.ultratechcement.com",
  },
  {
    id: "volkswagen",
    name: "Volkswagen India Private Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/1200px-Volkswagen_logo_2019.svg.png",
    category: "private",
    website: "https://www.volkswagen.co.in",
  },
  {
    id: "videocon",
    name: "Videocon Industries Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwoPM8e_IgJ8Han93bKKhR6b1K7yxC5pG4Eg&s",
    category: "private",
  },
  {
    id: "whirlpool",
    name: "Whirlpool of India Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Whirlpool_Corporation_Logo_%28as_of_2017%29.svg",
    category: "private",
    website: "https://www.whirlpoolindia.com",
  },
  {
    id: "bonn",
    name: "Bonn Group of Industries",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZJCWNgbFzQhIpvmV6JhG2zoOhiKDDEl6lg&s",
    category: "private",
    website: "https://www.bonngroup.in",
  },
  {
    id: "hindustan-times",
    name: "Hindustan Times",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKAQjS1Ybi7SS3QLGpQ3P8zthTYl0IzvRf3A&s",
    category: "private",
    website: "https://www.hindustantimes.com",
  },
  {
    id: "thermax",
    name: "Thermax Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjIcJrpdsFCP8Ji_pqs2KNX3Sr9FbYRRsiA&s",
    category: "private",
    website: "https://www.thermaxglobal.com",
  },
  {
    id: "the-leela",
    name: "The Leela Palaces, Hotels and Resorts",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs0sYkhZD_RqE8W8GV3fOZtITIxXQEgW7X8Q&s",
    category: "private",
    website: "https://www.theleela.com",
  },
  {
    id: "trident-hotels",
    name: "Trident Hotels",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Trident_Hotels%2C_Official_Logo.jpg",
    category: "private",
    website: "https://www.tridenthotels.com",
  },
  {
    id: "adani",
    name: "Adani Group",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Adani_2012_logo.png",
    category: "private",
    website: "https://www.adani.com",
  },
  {
    id: "ambuja-cement",
    name: "Ambuja Cements Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeFVEeNOlK5cJQZo93xDS7ynftCEeqspB4Q&s",
    category: "private",
    website: "https://www.ambujacement.com",
  },
  {
    id: "amity-university",
    name: "Amity University",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/ff/Amity_University_logo.png",
    category: "private",
    website: "https://www.amity.edu",
  },
  {
    id: "asian-paints",
    name: "Asian Paints Limited",
    logo: "https://i.pinimg.com/736x/80/61/2d/80612d717e3e8d70fe1c456f2235a5dc.jpg",
    category: "private",
    website: "https://www.asianpaints.com",
  },
  {
    id: "unilever",
    name: "Hindustan Unilever Limited",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Hindustan_Unilever_Logo.svg/1200px-Hindustan_Unilever_Logo.svg.png",
    category: "private",
    website: "https://www.hul.co.in",
  },
  {
    id: "triveni-engineering",
    name: "Triveni Engineering & Industries Ltd",
    logo: "https://images.jdmagicbox.com/comp/noida/b9/011pxx11.xx11.120912140359.u8b9/catalogue/triveni-engineering-and-industries-ltd-hosiery-complex-noida-power-plant-equipment-manufacturers-mj1s6p.jpg",
    category: "private",
    website: "https://www.trivenigroup.com",
  },
  {
    id: "somany",
    name: "Somany Ceramics Limited",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFP4AfBfZTWFA/company-logo_200_200/company-logo_200_200/0/1723540032221/somany_ceramics_ltd_logo?e=2147483647&v=beta&t=lBlahO3qQ_bbQCXIpIJr_JHZuv53PJcF7v7twk4tjzU",
    category: "private",
    website: "https://www.somanyceramics.com",
  },
  {
    id: "raheja",
    name: "Raheja Developers Limited",
    logo: "https://raheja.com/images/blog/36-small.jpg",
    category: "private",
    website: "https://www.rahejadevelopers.com",
  },
  {
    id: "dmart",
    name: "Avenue Supermarts Limited (DMart)",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8um53J4cMyYoytLthVdwaAyF0Jbt3gsspQ&s",
    category: "private",
    website: "https://www.dmartindia.com",
  },
  {
    id: "gima",
    name: "GIMA (Garden Industries Manufacturers Association)",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8JEL2StYLzh_JKQ7oFqXGwugTsR0XONK6g&s",
    category: "private",
  },
  {
    id: "kisan-sahkari-chini-mills",
    name: "Kisan Sahkari Chini Mills Ltd., Najibabad",
    logo: "/clients/kisan-sahkari.png",
    category: "private",
  },
  {
    id: "liberty",
    name: "Liberty Shoes Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfHKS9gUmzhk9MIVp7JBCSsGrp6iS4jMR1A&s",
    category: "private",
    website: "https://www.libertyshoes.com",
  },
  {
    id: "dlf",
    name: "DLF Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/DLF_logo.svg",
    category: "private",
    website: "https://www.dlf.in",
  },
  {
    id: "hmel",
    name: "HPCL-Mittal Energy Limited (HMEL)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/HMEL_Logo.jpg",
    category: "private",
    website: "https://www.hmel.in",
  },
  {
    id: "fortis-hospitals",
    name: "Fortis Healthcare Limited",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Fortis_Healthcare_logo.svg/250px-Fortis_Healthcare_logo.svg.png",
    category: "private",
    website: "https://www.fortishealthcare.com",
  },
  {
    id: "nerolac",
    name: "Kansai Nerolac Paints Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZrD5wMbMbjgeJPjFDWNBB7rnDmx6aLagVkQ&s",
    category: "private",
    website: "https://www.nerolac.com",
  },

  // ===== INTERNATIONAL CLIENTS =====
  {
    id: "mitsubishi",
    name: "Mitsubishi Electric India Private Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxLDnkzvq-58Te4oxeVk8jo_L0cPDNkUytA&s",
    category: "international",
    website: "https://www.mitsubishielectric.in",
  },
  {
    id: "hyatt",
    name: "Hyatt Hotels Corporation",
    logo: "https://newsroom.hyatt.com/images/hyatt_logo.png",
    category: "international",
    website: "https://www.hyatt.com",
  },

  // ===== MUNICIPAL CLIENTS =====
  {
    id: "nagar-palika-amroha",
    name: "Nagar Palika Parishad, Amroha",
    logo: "/clients/nagar-palika-amroha.png",
    category: "municipal",
  },
  {
    id: "municipal-board-barpeta",
    name: "Municipal Board, Barpeta, Assam",
    logo: "https://assamurban.in/storage/UmC0dXnq765bUCJ3CCgxBqioBbHIkf6q9F6dVCRp.png",
    category: "municipal",
  },
  {
    id: "municipal-board-bilasipara",
    name: "Municipal Board, Bilasipara, Assam",
    logo: "https://assamurban.in/storage/ANq93S8vj9znk3HWvZwZsIfI1Q20BZ0D5m6wSUMK.jpg",
    category: "municipal",
  },
  {
    id: "municipal-board-dhubri",
    name: "Municipal Board, Dhubri, Assam",
    logo: "https://assamurban.in/storage/Eg8MCHTRoVHWh6pHXCBMjwTBXzAJmzjWG1ppB0kN.jpg",
    category: "municipal",
  },
  {
    id: "municipal-board-gauripur",
    name: "Municipal Board, Gauripur, Assam",
    logo: "/clients/municipal-gauripur.png",
    category: "municipal",
  },
  {
    id: "municipal-board-kajalgaon",
    name: "Municipal Board, Kajalgaon, Assam",
    logo: "/clients/municipal-kajalgaon.png",
    category: "municipal",
  },
  {
    id: "municipal-board-rangapara",
    name: "Municipal Board, Rangapara, Assam",
    logo: "/clients/municipal-rangapara.png",
    category: "municipal",
  },
  {
    id: "municipal-board-nalbari",
    name: "Municipal Board, Nalbari, Assam",
    logo: "/clients/municipal-nalbari.png",
    category: "municipal",
  },
  {
    id: "municipal-board-hailakandi",
    name: "Municipal Board, Hailakandi, Assam",
    logo: "/clients/municipal-hailakandi.png",
    category: "municipal",
  },
  {
    id: "municipal-board-rangia",
    name: "Municipal Board, Rangia, Assam",
    logo: "/clients/municipal-rangia.png",
    category: "municipal",
  },
];

// Featured clients list (empty array means show first 8 clients)
export const FEATURED_CLIENT_IDS: string[] = [
  "tata",
  "indian-oil",
  "bhel",
  "ntpc",
  "delhi-metro",
  "adani",
  "dlf",
  "larsen-toubro",
  "asian-paints",
  "unilever",
  "airtel",
  "whirlpool",
];

// Helper function to get featured clients
export const getFeaturedClients = (): ClientType[] => {
  if (FEATURED_CLIENT_IDS.length === 0) {
    // If no featured clients specified, return first 8 clients
    return CLIENTS.slice(0, 8);
  }
  return CLIENTS.filter((client) => FEATURED_CLIENT_IDS.includes(client.id));
};

// Helper function to get clients by category
export const getClientsByCategory = (category: string): ClientType[] => {
  if (category === "all") return CLIENTS;
  return CLIENTS.filter((client) => client.category === category);
};
