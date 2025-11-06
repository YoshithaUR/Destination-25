import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const DestinationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, this data would come from an API or context
  const destinations = {
    "sigiriya-rock-fortress": {
      id: 1,
      name: "Sigiriya Rock Fortress",
      description:
        "Ancient rock fortress and palace ruin situated in the central Matale District.",
      longDescription:
        "Sigiriya or Sinhagiri (Lion Rock) is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. The name refers to a site of historical and archaeological significance that is dominated by a massive column of rock nearly 200 metres (660 ft) high.",
      detailedInfo: [
        {
          title: "Historical Significance",
          content:
            "Built by King Kashyapa I in the 5th century AD, Sigiriya served as the capital of his kingdom for 18 years. The site is famous for its ancient frescoes dating back to the 5th century, which are among the finest surviving examples of ancient Sri Lankan art.",
          image:
            "https://i.pinimg.com/1200x/f0/13/e6/f013e64a3b44a25a2da5da6e6ea903aa.jpg",
        },
        {
          title: "Architectural Marvel",
          content:
            "The fortress features advanced engineering techniques for its time, including a sophisticated water garden with fountains and channels. The Mirror Wall, made of highly polished white plaster, reflects like a mirror when polished. The Lion Gate, once featured a massive lion sculpture.",
          image:
            "https://i.pinimg.com/1200x/88/12/a5/8812a58732f7b376bf5841659d23a7fb.jpg",
        },
        {
          title: "UNESCO World Heritage Site",
          content:
            "Sigiriya was designated a UNESCO World Heritage Site in 1982. It is recognized for both its cultural and natural significance, representing a masterpiece of human ingenuity in an urban planning context.",
          image:
            "https://i.pinimg.com/1200x/59/b8/f2/59b8f2215c2a3ecbf83575739b7ba122.jpg",
        },
      ],
      image:
        "https://i.pinimg.com/1200x/5d/9a/93/5d9a937d66b81fb6f883e6d5a1dc2e79.jpg",
      gallery: [
        "https://i.pinimg.com/1200x/5a/b9/51/5ab951459b8a2d35710d4264e4ce1503.jpg",
        "https://i.pinimg.com/1200x/33/52/52/335252504aa37b7574efe62698c93a9f.jpg",
        "https://i.pinimg.com/736x/4a/fe/fb/4afefb91d9fa5358ec22895ca1d644ba.jpg",
        "https://i.pinimg.com/736x/ea/ad/f8/eaadf82c0405cd2595631c7a86da5bca.jpg",
      ],
      rating: 4.8,
      location: "Matale District, Central Province",
      bestTime: "December to March",
      activities: [
        "Hiking",
        "Historical Tours",
        "Photography",
        "Rock Climbing",
      ],
      facts: [
        "Over 1,500 years old",
        "UNESCO World Heritage Site since 1982",
        "Home to ancient frescoes",
        "Former royal palace",
        "Advanced hydraulic engineering",
      ],
    },
    "ella-rock": {
      id: 2,
      name: "Ella Rock",
      description:
        "Stunning hiking destination with panoramic views of the surrounding hills.",
      longDescription:
        "Ella Rock is one of the most popular hiking destinations in Sri Lanka, offering breathtaking panoramic views of the surrounding hills and valleys. The hike to Ella Rock is moderately challenging and takes about 2-3 hours round trip.",
      detailedInfo: [
        {
          title: "The Hiking Experience",
          content:
            "The trail to Ella Rock begins near Ella town and winds through tea plantations, small villages, and lush forests. The final ascent requires some scrambling over rocks, making it an exciting challenge for hikers. The summit rewards visitors with a 360-degree view of the picturesque Ella gap and surrounding mountain ranges.",
          image:
            "https://i.pinimg.com/736x/4e/33/fc/4e33fce663ae741123d61ffc91f372b4.jpg",
        },
        {
          title: "Best Time for Views",
          content:
            "The best time to hike Ella Rock is early morning to catch the sunrise over the misty hills. The views during sunrise are spectacular, with the valleys below often shrouded in morning mist. Cloudy days can also provide dramatic views as clouds drift through the gaps between hills.",
          image:
            "https://i.pinimg.com/1200x/11/c6/f2/11c6f255c14bb1a2d625b7937cd9d334.jpg",
        },
        {
          title: "Nearby Attractions",
          content:
            "Ella Rock is just one of several hiking destinations near Ella town. Other popular hikes include Little Adam's Peak and Ella Rock's neighbor, Kiriigala. The town itself is charming, with colonial-era buildings and excellent local restaurants.",
          image:
            "https://i.pinimg.com/1200x/78/d7/33/78d733917bf9064d6304ad25c3d2a246.jpg",
        },
      ],
      image:
        "https://i.pinimg.com/736x/6e/54/53/6e545399f88badacbc0186d57be68737.jpg",
      gallery: [
        "https://i.pinimg.com/1200x/94/07/37/9407378ced925c126ea79d569b5b389f.jpg",
        "https://i.pinimg.com/1200x/e8/1f/90/e81f909e32efb351063e6c68a3a14841.jpg",
        "https://i.pinimg.com/736x/ed/55/5f/ed555f8956cf6f63374115957fa5c8ad.jpg",
        "https://i.pinimg.com/736x/39/1a/bf/391abfb7abf1b4686e8a26100119567c.jpg",
      ],
      rating: 4.9,
      location: "Badulla District, Uva Province",
      bestTime: "March to September",
      activities: ["Hiking", "Photography", "Nature Walks", "Sunrise Viewing"],
      facts: [
        "360-degree panoramic views",
        "Moderate 2-3 hour hike",
        "Best at sunrise",
        "Tea plantation trails",
        "Popular Instagram spot",
      ],
    },
    "yala-national-park": {
      id: 3,
      name: "Yala National Park",
      description:
        "Wildlife sanctuary in southeastern Sri Lanka, famed for its leopards, elephants, and diverse ecosystems.",
      longDescription:
        "Yala National Park is a large wildlife sanctuary located in the southeastern region of Sri Lanka, spanning the Hambantota and Monaragala districts. It is the second-largest national park in the country and is renowned for its rich biodiversity and scenic landscapes. The park covers an area of nearly 979 square kilometres (378 square miles) and features a diverse range of ecosystems, including dry forests, grasslands, wetlands, and coastal lagoons.",
      detailedInfo: [
        {
          title: "Wildlife Diversity",
          content:
            "Yala National Park is home to one of the highest densities of leopards in the world, along with elephants, sloth bears, crocodiles, and over 200 species of birds. The park’s rich biodiversity makes it one of Sri Lanka’s most popular destinations for wildlife observation.",
          image:
          
            "https://i.pinimg.com/1200x/db/80/dd/db80dd2eee98267bcc26a074bf56e705.jpg",
        },
        {
          title: "Scenic Landscapes",
          content:
            "The park’s terrain consists of a fascinating mix of dry forests, grasslands, wetlands, and coastal lagoons. Its dramatic landscapes, complemented by natural rock formations and serene water bodies, provide breathtaking views during safari tours.",
          image:
            "https://i.pinimg.com/1200x/a0/8b/38/a08b3885606cc980f7160fb565d49433.jpg",
        },
        {
          title: "Cultural Heritage",
          content:
            "Beyond its wildlife, Yala holds deep historical and cultural importance. The ancient Sithulpawwa Rock Temple, located within the park, dates back over 2,000 years and is believed to have once housed thousands of Buddhist monks.",
          image:
            "https://i.pinimg.com/1200x/6f/13/f0/6f13f0bf43ad50c1e2a86ecb0a54ba76.jpg",
        },
      ],
      image:
        "https://i.pinimg.com/1200x/46/55/e4/4655e4292a87c647c479f1f03b1788d8.jpg",
      gallery: [
        "https://i.pinimg.com/736x/3d/e4/35/3de435858d391d380830aad81e93acbf.jpg",
        "https://i.pinimg.com/736x/44/28/e2/4428e2a8d9022c287d5495bad0db0021.jpg",
        "https://i.pinimg.com/736x/c7/bc/42/c7bc421b860589cbb6817180a8a83f67.jpg",
        "https://i.pinimg.com/736x/e9/c6/6f/e9c66fa7772e1f36cf27c9caaf9a0a45.jpg",
      ],
      rating: 4.8,
      location:
        "Southeastern Sri Lanka, spanning Hambantota and Monaragala Districts",
      bestTime: "February to July",
      activities: [
        "Jeep Safari",
        "Wildlife Photography",
        "Bird Watching",
        "Nature Exploration",
      ],
      facts: [
        "Second largest national park in Sri Lanka",
        "Covers an area of 979 square kilometers",
        "Known for the world’s highest density of leopards",
        "Home to over 200 species of birds",
        "Contains the ancient Sithulpawwa Rock Temple",
      ],
    },
    "galle-fort": {
      id: 4,
      name: "Galle Fort",
      description:
        "UNESCO World Heritage site with well-preserved Dutch colonial architecture.",
      longDescription:
        "Galle Fort, also known as the Dutch Fort or Ramparts of Galle, is a historic fortress located in the coastal city of Galle in the Southern Province of Sri Lanka. Originally built by the Portuguese in the 16th century and later expanded by the Dutch in the 17th century, the fort is a remarkable example of European architectural influence blended with South Asian traditions.",

      detailedInfo: [
        {
          title: "Historical Background",
          content:
            "Galle Fort, originally built by the Portuguese in 1588 and later extensively fortified by the Dutch in the 17th century, stands as one of the best-preserved colonial-era fortresses in Asia. Its architecture reflects a unique fusion of European and South Asian influences, symbolizing centuries of maritime history.",
          image:
            "https://images.unsplash.com/photo-1604328698692-f76ea9498d67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        },
        {
          title: "Architectural Beauty",
          content:
            "The fort features impressive stone ramparts, bastions, and watchtowers overlooking the Indian Ocean. Inside, cobblestone streets are lined with Dutch-style houses, museums, cafes, churches, and art galleries that showcase the colonial charm and cultural blend of Galle’s past and present.",
          image:
            "https://images.unsplash.com/photo-1612529347853-4de7b67dba97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        },
        {
          title: "UNESCO World Heritage Site",
          content:
            "Recognized as a UNESCO World Heritage Site in 1988, Galle Fort remains a living heritage site where history and modern life coexist. It continues to attract visitors from around the world for its cultural richness, coastal beauty, and well-preserved colonial architecture.",
          image:
            "https://images.unsplash.com/photo-1562771379-eafdca7a02d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      ],
      rating: 4.8,
      location: "Galle, Southern Province, Sri Lanka",
      bestTime: "December to April",
      activities: [
        "Fort Walking Tour",
        "Sightseeing",
        "Cultural Exploration",
        "Shopping and Dining",
        "Photography",
      ],
      facts: [
        "Built by the Portuguese in 1588",
        "Expanded by the Dutch in the 17th century",
        "UNESCO World Heritage Site since 1988",
        "One of the best-preserved colonial forts in Asia",
        "Overlooks the Indian Ocean",
      ],
    },
    "adams-peak":{
         id: 5,
       name: "Adam’s Peak",
  description:
    "Sacred mountain and pilgrimage site known for the Sri Pada footprint at its summit.",
  longDescription:
    "Adam’s Peak, also known as Sri Pada, is a revered mountain located in the central highlands of Sri Lanka. Rising to a height of 2,243 meters (7,359 feet), it is one of the most famous pilgrimage destinations in the country. The mountain is known for the sacred footprint at its summit, believed by Buddhists to be the footprint of the Buddha, by Hindus as that of Lord Shiva, by Muslims as that of Adam, and by Christians as that of St. Thomas. Climbing the mountain, especially at night, to witness the breathtaking sunrise from the peak is considered a spiritual and unforgettable experience.",

  detailedInfo: [
    {
      title: "Religious Significance",
      content:
        "Adam’s Peak is a multi-religious pilgrimage site revered by Buddhists, Hindus, Muslims, and Christians alike. The sacred footprint at the summit, known as Sri Pada, symbolizes different spiritual interpretations across these faiths, making it a unique symbol of harmony and devotion.",
      image:
      "https://i.pinimg.com/736x/f3/ce/e0/f3cee0e782cd36bb2d5ded111c742e1b.jpg"
       
    },
    {
      title: "Climbing Experience",
      content:
        "The climb to the summit involves more than 5,000 steps and typically begins at night so that pilgrims and travelers can reach the top by dawn. The sight of the sunrise casting a triangular shadow of the peak over the surrounding valleys is a breathtaking highlight of the journey.",
      image:
        "https://i.pinimg.com/736x/86/02/bc/8602bcf8fa0673ed16403be07338ef26.jpg",
    },
    {
      title: "Natural Beauty",
      content:
        "Surrounded by lush forests, waterfalls, and mist-covered hills, Adam’s Peak is located within the Peak Wilderness Sanctuary, a biodiversity-rich area that is home to many endemic species. The path to the top is lined with small shrines, rest stops, and tea stalls that add to its serene atmosphere.",
      image:
       " https://i.pinimg.com/736x/25/91/be/2591be81c55886bcc0480edb96bdef7f.jpg",
    },
  ],

  image:
    "https://i.pinimg.com/736x/9c/da/cd/9cdacdd7adfc4e4e5518a632456bd3fb.jpg",
  gallery: [
    "https://i.pinimg.com/1200x/91/7b/f3/917bf3784c8b4cefdc8f70a82f13c7b2.jpg",
    "https://i.pinimg.com/1200x/09/27/3f/09273fa20bdc683e3a219820d9c432a4.jpg",
    "https://i.pinimg.com/736x/d7/33/d3/d733d3ac00eec32ca1e2a0fdfdcb2097.jpg",
    "https://i.pinimg.com/736x/16/20/f0/1620f07e61df8ce04ee931f1ed0a492a.jpg",
  ],

  rating: 4.9,
  location: "Nuwara Eliya District, Central Province, Sri Lanka",
  bestTime: "December to May (during pilgrimage season)",
  activities: [
    
    "Sunrise Viewing",
    "Pilgrimage and Worship",
    "Photography",
    "Nature Observation",
  ],
  facts: [
    "Also known as Sri Pada (Sacred Footprint)",
    "Elevation: 2,243 meters (7,359 feet)",
    "Visited by pilgrims from multiple religions",
    "Best known for its spectacular sunrise",
    "Located within the Peak Wilderness Sanctuary",
  ],
},
"mirissa-beach":{
    id: 6,
  
  name: "Mirissa Beach",
  description:
    "A stunning crescent-shaped beach known for whale watching, surfing, and relaxed coastal vibes.",
  longDescription:
    "Mirissa Beach, located along Sri Lanka’s southern coastline, is one of the island’s most picturesque and vibrant beach destinations. With its soft golden sands, swaying coconut palms, and turquoise waters, Mirissa offers the perfect balance between relaxation and adventure. It’s particularly famous for whale and dolphin watching, attracting travelers from all over the world who come to witness the majestic blue whales in their natural habitat. Beyond its natural beauty, Mirissa is also a lively hub for beachside dining, surfing, and exploring nearby attractions like Coconut Tree Hill and Parrot Rock Bridge.",

  detailedInfo: [
    {
      title: "Whale and Dolphin Watching",
      content:
        "Mirissa is one of the best places in the world to spot blue whales and spinner dolphins. Early morning boat tours take visitors out to the deep sea where these magnificent creatures can be seen breaching and playing. The whale watching season runs mainly from November to April, offering unforgettable marine experiences.",
      image:
        "https://images.unsplash.com/photo-1590608897129-79da98d15969?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Coconut Tree Hill",
      content:
        "Located at the eastern end of Mirissa Beach, Coconut Tree Hill is one of the most photographed spots in Sri Lanka. This small palm-covered cliff overlooks the ocean, offering breathtaking sunrise and sunset views. It’s a perfect place for photography and enjoying the tropical sea breeze.",
      image:
        "https://images.unsplash.com/photo-1624017228083-8e497d182d4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Surfing and Beach Life",
      content:
        "Mirissa’s gentle waves make it an excellent spot for beginner and intermediate surfers. Surf schools along the beach offer lessons and board rentals. The lively beachside cafes, seafood restaurants, and relaxed nightlife add to Mirissa’s charm as a favorite destination for both adventure seekers and those seeking tranquility.",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
  ],

  image:
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",

  gallery: [
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1624017228083-8e497d182d4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1590608897129-79da98d15969?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1569420072560-820d8dbe8e24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  ],

  rating: 4.9,
  location: "Mirissa, Southern Province, Sri Lanka",
  bestTime: "November to April",
  activities: [
    "Whale Watching",
    "Surfing",
    "Snorkeling",
    "Sunbathing",
    "Photography",
    "Beach Dining",
  ],
  facts: [
    "Famous for whale and dolphin watching",
    "Ideal surfing destination for beginners",
    "Home to the iconic Coconut Tree Hill viewpoint",
    "Known for vibrant beach nightlife and seafood cafes",
    "Crystal-clear waters perfect for swimming and snorkeling",
  ],
},
"kandy-temple":{
  id:7,
  
  name: "Kandy Temple",
  description:
    "Sacred Buddhist temple housing the Tooth Relic of the Buddha in the royal palace.",
  longDescription:
    "The Temple of the Sacred Tooth Relic, known locally as Sri Dalada Maligawa, is one of the most sacred Buddhist temples in Sri Lanka. Located in the heart of Kandy, the temple enshrines a tooth relic of Lord Buddha, making it a deeply spiritual site for Buddhists around the world. The temple complex, with its golden-roofed shrine, intricate Kandyan architecture, and serene surroundings by Kandy Lake, stands as a symbol of Sri Lanka’s rich cultural and religious traditions. It also plays a central role in the annual Esala Perahera, a grand festival celebrated with traditional dances, drumming, and beautifully decorated elephants.",

  detailedInfo: [
    {
      title: "Historical and Religious Significance",
      content:
        "The Sacred Tooth Relic is believed to have been brought to Sri Lanka from India in the 4th century AD. Over the centuries, it became a symbol of sovereignty, with rulers claiming the right to govern only if they possessed the relic. The temple was built in the 16th century by King Wimaladharmasuriya I and remains one of the most important pilgrimage sites for Buddhists.",
      image:
        "https://images.unsplash.com/photo-1612438211389-cb4d1c1a8a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Architectural Splendor",
      content:
        "The temple complex showcases the grandeur of Kandyan architecture, featuring intricate wood carvings, golden decorations, and traditional frescoes. The main shrine is surrounded by beautiful courtyards, ponds, and smaller shrines. The golden canopy above the relic chamber adds to the temple’s majestic beauty and spiritual atmosphere.",
      image:
        "https://images.unsplash.com/photo-1575488652400-bb84c69c3b77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Esala Perahera Festival",
      content:
        "One of Asia’s most spectacular festivals, the Kandy Esala Perahera is held annually in July or August to honor the Sacred Tooth Relic. The event features traditional Kandyan dancers, fire performances, drummers, and hundreds of elephants adorned with colorful garments, reflecting Sri Lanka’s deep-rooted cultural heritage.",
      image:
        "https://images.unsplash.com/photo-1625414075000-4161e2bc4a09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
  ],

  image:
    "https://images.unsplash.com/photo-1612438211389-cb4d1c1a8a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",

  gallery: [
    "https://images.unsplash.com/photo-1612438211389-cb4d1c1a8a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1625414075000-4161e2bc4a09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1575488652400-bb84c69c3b77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1603969172506-fd357c00d89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  ],

  rating: 4.9,
  location: "Kandy, Central Province, Sri Lanka",
  bestTime: "December to April and July to August (Esala Perahera season)",
  activities: [
    "Temple Visit and Worship",
    "Cultural Exploration",
    "Attend Esala Perahera Festival",
    "Photography",
    "Explore Kandy Lake and nearby attractions",
  ],
  facts: [
    "Houses the sacred tooth relic of Lord Buddha",
    "Built in the 16th century by King Wimaladharmasuriya I",
    "Central to the annual Esala Perahera festival",
    "Symbol of sovereignty in ancient Sri Lanka",
    "UNESCO World Heritage Site since 1988",
  ],
},
"nuwara-eliya":{
  id:8,
   name: "Nuwara Eliya",
  description:
    "A picturesque hill station known as 'Little England', surrounded by tea plantations, waterfalls, and misty mountains.",
  longDescription:
    "Nuwara Eliya, often referred to as 'Little England', is a charming hill station located in the Central Highlands of Sri Lanka. Set at an altitude of around 1,868 meters, the town is famous for its cool climate, rolling tea estates, colonial-era architecture, and breathtaking landscapes. Originally developed by the British in the 19th century as a retreat, Nuwara Eliya still retains its old-world charm with red-brick houses, rose gardens, and a scenic golf course. The region is also home to some of the island’s most iconic attractions, including Lake Gregory, Hakgala Botanical Garden, and Horton Plains National Park.",

  detailedInfo: [
    {
      title: "Tea Plantations and Scenic Views",
      content:
        "Nuwara Eliya is surrounded by lush green tea plantations that produce some of the world’s finest Ceylon tea. Visitors can tour famous tea factories such as Pedro Tea Estate or Blue Field Tea Gardens to learn about tea production and sample freshly brewed varieties while enjoying panoramic mountain views.",
      image:
        "https://images.unsplash.com/photo-1615038552657-b29c9bb65115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Colonial Heritage and Architecture",
      content:
        "Often called 'Little England', Nuwara Eliya is known for its colonial charm reflected in its Tudor-style houses, red-brick post office, and the Grand Hotel. The town was once a favorite retreat for British planters and governors who built English-style cottages and gardens that still adorn the misty hillsides today.",
      image:
        "https://images.unsplash.com/photo-1602233158242-bc9c214e31f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Nature and Outdoor Adventures",
      content:
        "Beyond its serene beauty, Nuwara Eliya offers many outdoor activities including boating on Lake Gregory, exploring Hakgala Botanical Gardens, and hiking at Horton Plains National Park to witness the famous World’s End viewpoint and Baker’s Falls. The cool climate makes it a perfect getaway for nature lovers and adventurers alike.",
      image:
        "https://images.unsplash.com/photo-1610563166158-c6bcd7583b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
  ],

  image:
    "https://images.unsplash.com/photo-1615038552657-b29c9bb65115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",

  gallery: [
    "https://images.unsplash.com/photo-1615038552657-b29c9bb65115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1610563166158-c6bcd7583b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1602233158242-bc9c214e31f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1612444535491-21db6e5f29a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  ],

  rating: 4.8,
  location: "Nuwara Eliya, Central Province, Sri Lanka",
  bestTime: "February to May and August to September",
  activities: [
    "Tea Estate Tours",
    "Boat Riding on Lake Gregory",
    "Sightseeing and Photography",
    "Hiking at Horton Plains",
    "Exploring Botanical Gardens",
  ],
  facts: [
    "Located 1,868 meters above sea level",
    "Known as 'Little England' for its colonial influence",
    "Major producer of world-famous Ceylon tea",
    "Home to Horton Plains and World’s End",
    "Developed as a British hill station in the 19th century",
  ],


},
"dambulla-cave-temple":{
  name: "Dambulla Cave Temple",
  id:9,
  name: "Dambulla Cave Temple",
  description:
    "An ancient cave complex adorned with Buddhist murals and statues, located in the heart of Sri Lanka’s Cultural Triangle.",
  longDescription:
    "Dambulla Cave Temple, also known as the Golden Temple of Dambulla, is one of Sri Lanka’s most iconic and well-preserved Buddhist heritage sites. Dating back over 2,000 years, this UNESCO World Heritage Site features a series of five caves carved into a massive rock, housing more than 150 magnificent Buddha statues and intricate murals that depict the life and teachings of Lord Buddha. The temple complex sits atop a 160-meter-high rock, offering breathtaking panoramic views of the surrounding plains and the Sigiriya Rock Fortress in the distance. It stands as a spiritual sanctuary and a testament to Sri Lanka’s ancient art, devotion, and craftsmanship.",

  detailedInfo: [
    {
      title: "Cave Art and Sculptures",
      content:
        "The Dambulla Cave Temple complex contains over 150 Buddha statues, including a colossal 14-meter-long reclining Buddha. The walls and ceilings of the caves are covered with detailed frescoes that narrate stories from the life of Buddha and the history of Buddhism in Sri Lanka.",
      image:
        "https://images.unsplash.com/photo-1588099768918-bf054d0f1b6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Historical Significance",
      content:
        "The temple dates back to the 1st century BCE when King Valagamba of Anuradhapura sought refuge in these caves during exile. Upon regaining his throne, he transformed the caves into a magnificent temple in gratitude, establishing Dambulla as one of the most sacred Buddhist pilgrimage sites in the country.",
      image:
        "https://images.unsplash.com/photo-1585585389013-f8ce34e6a6b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Spiritual Ambience and Scenic Views",
      content:
        "Set atop a large rock outcrop, the temple offers visitors a serene environment ideal for meditation and reflection. The summit provides panoramic views of the surrounding countryside, including the Sigiriya Rock Fortress, creating a harmonious blend of spirituality and natural beauty.",
      image:
        "https://images.unsplash.com/photo-1605687703561-473abf94bb0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
  ],

  image:
    "https://images.unsplash.com/photo-1588099768918-bf054d0f1b6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",

  gallery: [
    "https://images.unsplash.com/photo-1588099768918-bf054d0f1b6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1585585389013-f8ce34e6a6b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1605687703561-473abf94bb0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1570135375511-60a8b7efbef0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  ],

  rating: 4.8,
  location: "Dambulla, Matale District, Central Province, Sri Lanka",
  bestTime: "January to May (dry season)",
  activities: [
    "Temple Exploration",
    "Viewing Ancient Cave Paintings",
    "Meditation and Worship",
    "Photography",
    "Climbing to the Cave Complex",
  ],
  facts: [
    "UNESCO World Heritage Site since 1991",
    "Contains over 150 Buddha statues and murals covering 2,100 square meters",
    "Dates back to the 1st century BCE",
    "Built by King Valagamba of Anuradhapura",
    "Also known as the Golden Temple of Dambulla",
  ],
},
"unawatuna-beach":{
  id:10,
  name: "Unawatuna Beach",
  description:
    "A stunning crescent-shaped beach on Sri Lanka’s southern coast, famous for its golden sands, turquoise waters, and vibrant coastal life.",
  longDescription:
    "Unawatuna Beach, located just a few kilometers from the historic city of Galle, is one of Sri Lanka’s most popular and picturesque beaches. Known for its golden sands, calm turquoise waters, and coral reefs teeming with marine life, Unawatuna is a haven for swimming, snorkeling, and relaxation. The beach is lined with palm trees, lively cafes, and boutique hotels, creating a perfect blend of tropical charm and modern comfort. Beyond the beach, visitors can explore nearby attractions such as the Japanese Peace Pagoda, Jungle Beach, and the UNESCO-listed Galle Fort. With its laid-back atmosphere and natural beauty, Unawatuna offers a quintessential Sri Lankan coastal experience ideal for travelers seeking both adventure and tranquility.",

  detailedInfo: [
    {
      title: "Golden Sands and Crystal Waters",
      content:
        "Unawatuna Beach is famous for its wide stretch of golden sand and calm, shallow waters, making it ideal for swimming and sunbathing. The gentle waves and warm ocean create a perfect environment for beach lovers throughout the year.",
      image:
        "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Marine Life and Coral Reefs",
      content:
        "The clear waters of Unawatuna are home to vibrant coral reefs and colorful tropical fish, making it a great spot for snorkeling and diving. Several diving centers offer guided tours to nearby reef sites and shipwrecks for underwater exploration.",
      image:
        "https://images.unsplash.com/photo-1602434962809-91370fbdc877?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Nearby Attractions and Cultural Sites",
      content:
        "Beyond the beach, visitors can hike to the Japanese Peace Pagoda for panoramic coastal views or explore the historic Galle Fort, a UNESCO World Heritage Site located just 15 minutes away. The area also offers a vibrant nightlife and seaside dining experience.",
      image:
        "https://images.unsplash.com/photo-1602161644100-6b8afad26a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
  ],

  image:
    "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",

  gallery: [
    "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1602434962809-91370fbdc877?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1602161644100-6b8afad26a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1588516903720-8b6d30a0b8d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  ],

  rating: 4.7,
  location: "Unawatuna, Galle District, Southern Province, Sri Lanka",
  bestTime: "November to April (dry season with calm seas)",
  activities: [
    "Swimming and Sunbathing",
    "Snorkeling and Diving",
    "Beachfront Dining",
    "Visiting the Japanese Peace Pagoda",
    "Exploring Galle Fort",
  ],
  facts: [
    "One of Sri Lanka’s safest beaches for swimming",
    "Famous for coral reefs and tropical fish",
    "Located just 5 km from Galle Fort",
    "Home to Jungle Beach and the Japanese Peace Pagoda",
    "Popular for both relaxation and nightlife",
  ],
},
"horton-plains":{
  id:11,
  name: "Horton Plains",
  description:
    "A stunning highland plateau known for its breathtaking landscapes, diverse wildlife, and the famous World's End cliff.",
  longDescription:
    "Horton Plains National Park, located in the Central Highlands of Sri Lanka, is one of the island’s most beautiful and ecologically rich natural reserves. Recognized as a UNESCO World Heritage Site, the park sits at an elevation of over 2,100 meters and features rolling grasslands, cloud forests, and sparkling streams. It is home to a variety of endemic flora and fauna, including the Sri Lankan sambar deer and several unique bird species. The park’s most iconic attraction, World's End, offers a dramatic 870-meter drop with breathtaking panoramic views of the southern plains. Visitors can also explore Baker’s Falls, a picturesque waterfall nestled within the park. With its cool climate, misty landscapes, and natural wonders, Horton Plains is a must-visit destination for nature lovers and hikers alike.",

  detailedInfo: [
    {
      title: "World’s End Viewpoint",
      content:
        "The main highlight of Horton Plains, World's End, is a sheer cliff with an 870-meter drop offering stunning views of the southern plains. On clear mornings, visitors can even see the distant Indian Ocean. The nearby Mini World’s End provides another scenic vantage point within a shorter walk.",
      image:
        "https://images.unsplash.com/photo-1611579423181-264fd8b7cb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Baker’s Falls and Natural Beauty",
      content:
        "Baker’s Falls, named after the British explorer Sir Samuel Baker, is one of the most photographed spots in Horton Plains. Surrounded by lush greenery and misty air, this picturesque waterfall adds to the park’s enchanting atmosphere and is accessible via the main hiking trail.",
      image:
        "https://images.unsplash.com/photo-1586430406052-92b2292f2375?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Biodiversity and Unique Ecosystem",
      content:
        "Horton Plains is home to diverse ecosystems, including montane grasslands and cloud forests that support many endemic species. The Sri Lankan sambar deer, purple-faced langur, and various rare birds like the Sri Lanka whistling thrush thrive in this protected environment.",
      image:
        "https://images.unsplash.com/photo-1588092612598-047c78a4d7e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
  ],

  image:
    "https://images.unsplash.com/photo-1611579423181-264fd8b7cb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",

  gallery: [
    "https://images.unsplash.com/photo-1611579423181-264fd8b7cb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1586430406052-92b2292f2375?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1588092612598-047c78a4d7e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1586424533453-42ecb8c5c518?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  ],

  rating: 4.9,
  location: "Central Highlands, Nuwara Eliya District, Sri Lanka",
  bestTime: "January to March (clear skies and best visibility)",
  activities: [
    "Hiking to World’s End",
    "Visiting Baker’s Falls",
    "Wildlife and Bird Watching",
    "Nature Photography",
    "Exploring Montane Forest Trails",
  ],
  facts: [
    "UNESCO World Heritage Site since 2010",
    "Home to the famous World’s End viewpoint",
    "Elevation around 2,100–2,300 meters above sea level",
    "Source of major rivers like the Mahaweli, Kelani, and Walawe",
    "Habitat for many endemic species of flora and fauna",
  ],
},
"anuradhapura":{
  id:12,
  name: "Anuradhapura",
  description:
    "An ancient sacred city renowned for its well-preserved ruins, majestic stupas, and deep spiritual significance in Sri Lankan history.",
  longDescription:
    "Anuradhapura, one of the oldest continuously inhabited cities in the world, served as the first capital of ancient Sri Lanka for over a millennium. Established in the 4th century BCE, it became the heart of Sri Lankan civilization, religion, and governance. Recognized as a UNESCO World Heritage Site, Anuradhapura is home to magnificent Buddhist monuments, sprawling reservoirs, and intricately carved stone structures. The city’s sacred Bodhi Tree—grown from a branch of the original tree under which Lord Buddha attained enlightenment—remains a revered pilgrimage site for Buddhists worldwide. With its blend of history, spirituality, and archaeological wonder, Anuradhapura offers visitors a profound journey into the island’s glorious past.",

  detailedInfo: [
    {
      title: "Sri Maha Bodhi Tree",
      content:
        "The Sri Maha Bodhi Tree is the oldest historically documented tree in the world, grown from a sapling of the original Bodhi Tree in Bodh Gaya, India. It was brought to Sri Lanka in the 3rd century BCE by Princess Sangamitta and planted by King Devanampiya Tissa. The tree remains one of the most sacred pilgrimage sites in Buddhism and a symbol of peace and enlightenment.",
      image:
        "https://images.unsplash.com/photo-1599641853440-ec88b5d32190?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Ruwanwelisaya Stupa",
      content:
        "Built by King Dutugemunu in the 2nd century BCE, Ruwanwelisaya is one of the most venerated stupas in Sri Lanka. Standing at 103 meters, it symbolizes the spiritual and architectural brilliance of the ancient Sinhalese civilization. The stupa enshrines relics of the Buddha and continues to attract thousands of pilgrims each year.",
      image:
        "https://images.unsplash.com/photo-1622445274318-6f86a4daef7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Jetavanaramaya and Ancient Monasteries",
      content:
        "Jetavanaramaya, once one of the tallest brick structures in the ancient world, stands as a testament to Anuradhapura’s advanced engineering. Surrounding the stupa are vast monastic complexes like Abhayagiri and Thuparamaya, each reflecting the city’s deep devotion to Buddhist scholarship and meditation.",
      image:
        "https://images.unsplash.com/photo-1596892172973-11dc1dfaf5c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
  ],

  image:
    "https://images.unsplash.com/photo-1622445274318-6f86a4daef7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",

  gallery: [
    "https://images.unsplash.com/photo-1622445274318-6f86a4daef7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1596892172973-11dc1dfaf5c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1599641853440-ec88b5d32190?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1617395818531-4cf0e0c70e70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  ],

  rating: 4.8,
  location: "Anuradhapura, North Central Province, Sri Lanka",
  bestTime: "April to September (dry season, ideal for exploration)",
  activities: [
    "Exploring Ancient Ruins",
    "Visiting Buddhist Temples and Stupas",
    "Cultural Photography",
    "Historical Tours",
    "Pilgrimage Visits",
  ],
  facts: [
    "UNESCO World Heritage Site since 1982",
    "First capital of ancient Sri Lanka",
    "Home to the sacred Sri Maha Bodhi Tree",
    "Contains some of the world’s largest ancient stupas",
    "Flourished between 4th century BCE and 11th century CE",
  ],

}








    
  };

  const destination =
    destinations[id] || destinations["sigiriya-rock-fortress"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navbar */}
      <div className="pt-20">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center"
        data-aos="fade-in"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${destination.image}')`,
          }}
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            data-aos="fade-down"
          >
            {destination.name}
          </h1>
          <p
            className="text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {destination.description}
          </p>
          <div
            className="flex justify-center items-center space-x-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center bg-yellow-500/20 px-4 py-2 rounded-full">
              <span className="text-yellow-500 mr-2">★</span>
              <span className="font-bold">{destination.rating}/5.0</span>
            </div>
            <div className="bg-gray-700/50 px-4 py-2 rounded-full">
              <span>{destination.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto" data-aos="fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-4xl font-bold mb-6 text-yellow-500"
              data-aos="fade-up"
            >
              Discover {destination.name}
            </h2>
            <p
              className="text-gray-300 text-lg mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {destination.longDescription}
            </p>
            <div
              className="grid grid-cols-2 gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {destination.facts.map((fact, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-800/50 p-3 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 50}
                >
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">{fact}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="rounded-2xl overflow-hidden shadow-2xl"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-16 px-6 bg-gray-900/50" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-16 text-yellow-500"
            data-aos="fade-up"
          >
            Why Visit {destination.name}?
          </h2>

          <div className="space-y-20">
            {destination.detailedInfo.map((info, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <h3
                    className="text-3xl font-bold mb-6 text-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {info.title}
                  </h3>
                  <p
                    className="text-gray-300 text-lg mb-6 leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {info.content}
                  </p>
                  <button
                    className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Learn More
                  </button>
                </div>
                <div
                  className={`rounded-2xl overflow-hidden shadow-2xl ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img
                    src={info.image}
                    alt={info.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto" data-aos="fade-up">
        <h2
          className="text-4xl font-bold text-center mb-16 text-yellow-500"
          data-aos="fade-up"
        >
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destination.gallery.map((img, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-64">
                <img
                  src={img}
                  alt={`${destination.name} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">
                    View Image
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-6 bg-gray-900/50" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-16 text-yellow-500"
            data-aos="fade-up"
          >
            Activities & Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destination.activities.map((activity, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-yellow-500/10 transition duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition duration-300">
                  <div className="text-2xl">🌟</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {activity}
                </h3>
                <p className="text-gray-400">
                  Experience the best of {destination.name} through{" "}
                  {activity.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 px-6" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
            Ready for Your Adventure?
          </h2>
          <p
            className="text-xl mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Book your trip to {destination.name} with Smile Sri Lanka and
            experience the magic of this incredible destination.
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <button
              className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Book Now
            </button>
            <button
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full transition duration-300 backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;
