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
  


  let bank = [
    {
      name: "Grace Lee",
      pictures: ["image17.jpg", "image18.jpg"],
      email: "gracelee@example.com",
      phone_number: "+7788990011",
      bank_name: "Westside Bank",
      nin: "NIN778899001"
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
      name: "Grace Lee",
      pictures: ["image17.jpg", "image18.jpg"],
      email: "gracelee@example.com",
      phone_number: "+7788990011",
      bank_name: "Westside Bank",
      nin: "NIN778899001"
    },
    {
      name: "Grace Lee",
      pictures: ["image17.jpg", "image18.jpg"],
      email: "gracelee@example.com",
      phone_number: "+7788990011",
      bank_name: "Westside Bank",
      nin: "NIN778899001"
    }
  ]


  let country = [
    {
      name: "Grace Lee",
      pictures: ["image17.jpg", "image18.jpg"],
      email: "gracelee@example.com",
      phone_number: "+7788990011",
      bank_name: "Westside Bank",
      nin: "NIN778899001"
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
      name: "Grace Lee",
      pictures: ["image17.jpg", "image18.jpg"],
      email: "gracelee@example.com",
      phone_number: "+7788990011",
      bank_name: "Westside Bank",
      nin: "NIN778899001"
    },
    {
      name: "Grace Lee",
      pictures: ["image17.jpg", "image18.jpg"],
      email: "gracelee@example.com",
      phone_number: "+7788990011",
      bank_name: "Westside Bank",
      nin: "NIN778899001"
    }
  ]


  app.get("/api1", (req, res) => {
    res.send(users)
  })
  app.get("/api2", (req, res) => {
    res.send(bank)
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
