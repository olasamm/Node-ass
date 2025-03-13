const app = require("express")();

require("dotenv").config();
const port = process.env.PORT || 3000



let users = [
    {
      name: "John Doe",
      pictures: ["image1.jpg", "image2.jpg"],
      email: "johndoe@example.com",
      phone_number: "+1234567890",
      bank_name: "Bank of Example",
      nin: "NIN123456789"
    },
    {
      name: "Jane Smith",
      pictures: ["image3.jpg", "image4.jpg"],
      email: "janesmith@example.com",
      phone_number: "+0987654321",
      bank_name: "Example Bank",
      nin: "NIN987654321"
    },
    {
      name: "Alice Johnson",
      pictures: ["image5.jpg", "image6.jpg"],
      email: "alicejohnson@example.com",
      phone_number: "+1122334455",
      bank_name: "National Bank",
      nin: "NIN112233445"
    },
    {
      name: "Bob Williams",
      pictures: ["image7.jpg", "image8.jpg"],
      email: "bobwilliams@example.com",
      phone_number: "+2233445566",
      bank_name: "City Bank",
      nin: "NIN223344556"
    },
    {
      name: "Charlie Brown",
      pictures: ["image9.jpg", "image10.jpg"],
      email: "charliebrown@example.com",
      phone_number: "+3344556677",
      bank_name: "Global Bank",
      nin: "NIN334455667"
    },
    {
      name: "David Lee",
      pictures: ["image11.jpg", "image12.jpg"],
      email: "davidlee@example.com",
      phone_number: "+4455667788",
      bank_name: "First National Bank",
      nin: "NIN445566778"
    },
    {
      name: "Eva Green",
      pictures: ["image13.jpg", "image14.jpg"],
      email: "evagreen@example.com",
      phone_number: "+5566778899",
      bank_name: "International Bank",
      nin: "NIN556677889"
    },
    {
      name: "Frank Miller",
      pictures: ["image15.jpg", "image16.jpg"],
      email: "frankmiller@example.com",
      phone_number: "+6677889900",
      bank_name: "Sunrise Bank",
      nin: "NIN667788990"
    },
    {
      name: "Grace Lee",
      pictures: ["image17.jpg", "image18.jpg"],
      email: "gracelee@example.com",
      phone_number: "+7788990011",
      bank_name: "Westside Bank",
      nin: "NIN778899001"
    },
    {
      name: "Hannah White",
      pictures: ["image19.jpg", "image20.jpg"],
      email: "hannahwhite@example.com",
      phone_number: "+8899001122",
      bank_name: "Northern Bank",
      nin: "NIN889900112"
    }
  ];
  



  let schools = [
    {
      name: "Greenwood High School",
      address: "123 Main St, Springfield",
      principal: "Mr. John Smith",
      students: 1200,
      established: 1985
    },
    {
      name: "Riverside Elementary School",
      address: "456 Elm St, Riverside",
      principal: "Mrs. Jane Doe",
      students: 800,
      established: 1990
    },
    {
      name: "Mountainview Middle School",
      address: "789 Oak St, Mountainview",
      principal: "Mr. Robert Brown",
      students: 600,
      established: 2000
    },
    {
      name: "Lakeside High School",
      address: "101 Pine St, Lakeside",
      principal: "Ms. Emily White",
      students: 1000,
      established: 1975
    },
    {
      name: "Hilltop Elementary School",
      address: "202 Maple St, Hilltop",
      principal: "Mr. Michael Green",
      students: 700,
      established: 1980
    }
  ];


  
let country = [
  {
    name: "United States",
    capital: "Washington, D.C.",
    population: 331002651,
    currency: "USD",
    language: "English"
  },
  {
    name: "Canada",
    capital: "Ottawa",
    population: 37742154,
    currency: "CAD",
    language: "English, French"
  },
  {
    name: "United Kingdom",
    capital: "London",
    population: 67886011,
    currency: "GBP",
    language: "English"
  },
  {
    name: "Australia",
    capital: "Canberra",
    population: 25499884,
    currency: "AUD",
    language: "English"
  },
  {
    name: "Germany",
    capital: "Berlin",
    population: 83783942,
    currency: "EUR",
    language: "German"
  }
];


  app.get("/api1", (req, res) => {
    res.send(users)
  })
  app.get("/api2", (req, res) => {
    res.send(schools)
  })
  app.get("/api3", (req, res) => {
    res.send(country)
  })


app.get("/", (req, res) => {
  res.sendFile(__dirname  + "/public/index.html")
  // res.send("Hello, World!");
});

// app.get("/api", (req, res) => {
//     res.send(users)
// })


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
