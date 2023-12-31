const indiaCities = [
    { name: "Delhi", lat: 28.61, lon: 77.23 },
    { name: "Mumbai", lat: 19.0761, lon: 72.8775 },
    { name: "Kolkata", lat: 22.5675, lon: 88.37 },
    { name: "Bangalore", lat: 12.9789, lon: 77.5917 },
    { name: "Chennai", lat: 13.0825, lon: 80.275 },
    { name: "Hyderabad", lat: 17.385, lon: 78.4867 },
    { name: "Pune", lat: 18.5203, lon: 73.8567 },
    { name: "Ahmedabad", lat: 23.03, lon: 72.58 },
    { name: "Surat", lat: 21.1702, lon: 72.8311 },
    { name: "Prayagraj", lat: 25.4358, lon: 81.8464 },
    { name: "Lucknow", lat: 26.85, lon: 80.95 },
    { name: "Jaipur", lat: 26.9, lon: 75.8 },
    { name: "Cawnpore", lat: 26.4499, lon: 80.3319 },
    { name: "Mirzapur", lat: 25.146, lon: 82.569 },
    { name: "Nagpur", lat: 21.1497, lon: 79.0806 },
    { name: "Ghaziabad", lat: 28.67, lon: 77.42 },
    { name: "Vadodara", lat: 22.3, lon: 73.2 },
    { name: "Vishakhapatnam", lat: 17.7042, lon: 83.2978 },
    { name: "Indore", lat: 22.7167, lon: 75.8472 },
    { name: "Thane", lat: 19.1972, lon: 72.9722 },
    { name: "Bhopal", lat: 23.25, lon: 77.4167 },
    { name: "Chinchvad", lat: 18.6186, lon: 73.8037 },
    { name: "Patna", lat: 25.6, lon: 85.1 },
    { name: "Bilaspur", lat: 22.09, lon: 82.15 },
    { name: "Ludhiana", lat: 30.91, lon: 75.85 },
    { name: "Agwar", lat: 27.18, lon: 78.02 },
    { name: "agra", lat: 27.18, lon: 78.02 },
    { name: "Madurai", lat: 9.9252, lon: 78.1198 },
    { name: "Jamshedpur", lat: 22.7925, lon: 86.1842 },
    { name: "Nasik", lat: 20, lon: 73.78 },
    { name: "Faridabad", lat: 28.4167, lon: 77.3 },
    { name: "Aurangabad", lat: 19.88, lon: 75.32 },
    { name: "Rajkot", lat: 22.3, lon: 70.7833 },
    { name: "Meerut", lat: 28.98, lon: 77.71 },
    { name: "Jabalpur", lat: 23.1667, lon: 79.9333 },
    { name: "Kalamboli", lat: 19.2333, lon: 73.1333 },
    { name: "Vasai", lat: 19.47, lon: 72.8 },
    { name: "Najafgarh", lat: 28.6092, lon: 76.9798 },
    { name: "Varanasi", lat: 25.3189, lon: 83.0128 },
    { name: "Srinagar", lat: 34.09, lon: 74.79 },
    { name: "Dhanbad", lat: 23.7998, lon: 86.4305 },
    { name: "Amritsar", lat: 31.64, lon: 74.86 },
    { name: "Aligarh", lat: 27.88, lon: 78.08 },
    { name: "Guwahati", lat: 26.1722, lon: 91.7458 },
    { name: "Haora", lat: 22.58, lon: 88.3294 },
    { name: "Ranchi", lat: 23.36, lon: 85.33 },
    { name: "Gwalior", lat: 26.2215, lon: 78.178 },
    { name: "Chandigarh", lat: 30.75, lon: 76.78 },
    { name: "Vijayavada", lat: 16.5193, lon: 80.6305 },
    { name: "Jodhpur", lat: 26.28, lon: 73.02 },
    { name: "Raipur", lat: 21.25, lon: 81.63 },
    { name: "Kota", lat: 25.18, lon: 75.83 },
    { name: "Kalkaji Devi", lat: 28.5485, lon: 77.2513 },
    { name: "Bhayandar", lat: 19.29, lon: 72.85 },
    { name: "Ambattur", lat: 13.1143, lon: 80.1548 },
    { name: "Salt Lake City", lat: 22.61, lon: 88.4 },
    { name: "Bhatpara", lat: 22.87, lon: 88.41 },
    { name: "Kukatpalli", lat: 17.4849, lon: 78.4138 },
    { name: "Darbhanga", lat: 26.17, lon: 85.9 },
    { name: "Dasarhalli", lat: 13.0465, lon: 77.513 },
    { name: "Muzaffarpur", lat: 26.1225, lon: 85.3906 },
    { name: "Oulgaret", lat: 11.957, lon: 79.7737 },
    { name: "New Delhi", lat: 28.6139, lon: 77.209 },
    { name: "Tiruvottiyur", lat: 13.16, lon: 80.3 },
    { name: "Puducherry", lat: 11.9167, lon: 79.8167 },
    { name: "Byatarayanpur", lat: 13.0659, lon: 77.5922 },
    { name: "Pallavaram", lat: 12.9675, lon: 80.1491 },
    { name: "Secunderabad", lat: 17.4399, lon: 78.4983 },
    { name: "Shimla", lat: 31.1033, lon: 77.1722 },
    { name: "Puri", lat: 19.8106, lon: 85.8314 },
    { name: "Shrirampur", lat: 22.75, lon: 88.34 },
    { name: "Hugli", lat: 22.9089, lon: 88.3967 },
    { name: "Chandannagar", lat: 22.8671, lon: 88.3674 },
    { name: "Sultanpur Mazra", lat: 28.6981, lon: 77.0689 },
    { name: "Krishnanagar", lat: 23.4, lon: 88.5 },
    { name: "Barakpur", lat: 22.7642, lon: 88.3776 },
    { name: "Bhalswa Jahangirpur", lat: 28.7354, lon: 77.1638 },
    { name: "Nangloi Jat", lat: 28.6833, lon: 77.0667 },
    { name: "Yelahanka", lat: 13.1007, lon: 77.5963 },
    { name: "Titagarh", lat: 22.74, lon: 88.37 },
    { name: "Dam Dam", lat: 22.62, lon: 88.42 },
    { name: "Bansbaria", lat: 22.97, lon: 88.4 },
    { name: "Madhavaram", lat: 13.1482, lon: 80.2314 },
    { name: "Baj Baj", lat: 22.4828, lon: 88.1818 },
    { name: "Nerkunram", lat: 13.0667, lon: 80.2833 },
    { name: "Kendraparha", lat: 20.5, lon: 86.42 },
    { name: "Sijua", lat: 23.7692, lon: 86.1673 },
    { name: "Manali", lat: 13.1667, lon: 80.2667 },
    { name: "Chakapara", lat: 22.63, lon: 88.35 },
    { name: "Pappakurichchi", lat: 10.8137, lon: 78.7481 },
    { name: "Herohalli", lat: 12.9911, lon: 77.4873 },
    { name: "Madipakkam", lat: 12.9623, lon: 80.1986 },
    { name: "Sabalpur", lat: 25.6053, lon: 85.1835 },
    { name: "Salua", lat: 22.61, lon: 88.27 },
    { name: "Balasore", lat: 21.4942, lon: 86.9317 },
    { name: "Jalhalli", lat: 13.0333, lon: 77.55 },
    { name: "Chinnasekkadu", lat: 13.1609, lon: 80.2573 },
    { name: "Jethuli", lat: 25.5378, lon: 85.2841 },
    { name: "Nagtala", lat: 22.3693, lon: 88.6071 },
    { name: "Bagalur", lat: 13.1328, lon: 77.6685 },
    { name: "Pakri", lat: 25.5876, lon: 85.158 },
    { name: "Hunasamaranhalli", lat: 13.1435, lon: 77.62 },
    { name: "Hesarghatta", lat: 13.1391, lon: 77.4783 },
    { name: "Bommayapalaiyam", lat: 11.9922, lon: 79.8499 },
    { name: "Gundur", lat: 10.7339, lon: 78.7184 },
    { name: "Punadih", lat: 25.5484, lon: 85.2649 },
    { name: "Hariladih", lat: 23.63, lon: 86.35 },
    { name: "Alawalpur", lat: 25.4958, lon: 85.2021 },
    { name: "Madnaikanhalli", lat: 13.0626, lon: 77.4642 },
    { name: "Kadiganahalli", lat: 13.1687, lon: 77.6283 },
    { name: "Mahuli", lat: 25.543, lon: 85.2268 },
    { name: "Zeyadah Kot", lat: 22.321, lon: 88.2457 },
    { name: "Arshakunti", lat: 13.0785, lon: 77.4225 },
    { name: "Hirapur", lat: 23.6834, lon: 87.1973 },
    { name: "Mirchi", lat: 25.5554, lon: 85.2139 },
    { name: "Sonudih", lat: 25.1155, lon: 87.0214 },
    { name: "Sondekoppa", lat: 13, lon: 77.3667 },
    { name: "Babura", lat: 25.0851, lon: 87.1092 },
    { name: "Madavar", lat: 13.0525, lon: 77.4732 },
    { name: "Kadabgeri", lat: 12.9965, lon: 77.4331 },
    { name: "Nanmangalam", lat: 12.9381, lon: 80.1753 },
    { name: "Taliganja", lat: 22.5876, lon: 88.4439 },
    { name: "Tarchha", lat: 25.1116, lon: 87.0964 },
    { name: "Belgharia", lat: 22.5692, lon: 88.4846 },
    { name: "Kammanhalli", lat: 13.0155, lon: 77.6381 },
    { name: "Sonnappanhalli", lat: 13.1557, lon: 77.6179 },
    { name: "Kedihati", lat: 22.6543, lon: 88.5304 },
    { name: "Doddajivanhalli", lat: 13.0086, lon: 77.6143 },
    { name: "Simli Murarpur", lat: 25.5792, lon: 85.2401 },
    { name: "Sonawan", lat: 25.5445, lon: 85.2387 },
    { name: "Devanandapur", lat: 22.9378, lon: 88.3698 },
    { name: "Tribeni", lat: 23.0269, lon: 88.4565 },
    { name: "Huttanhalli", lat: 13.1651, lon: 77.6512 },
    { name: "Nathupur", lat: 25.5163, lon: 85.2544 },
    { name: "Bali", lat: 25.481, lon: 85.2227 },
    { name: "Vajarhalli", lat: 13.1022, lon: 77.4111 },
    { name: "Saino", lat: 25.1134, lon: 87.0108 },
    { name: "Shekhpura", lat: 25.5725, lon: 85.1428 },
    { name: "Cachohalli", lat: 13.001, lon: 77.4717 },
    { name: "Narayanpur Kola", lat: 25.1293, lon: 87.0076 },
    { name: "Gyan Chak", lat: 25.5496, lon: 85.2423 },
    { name: "Kasgatpur", lat: 13.1101, lon: 77.5045 },
    { name: "Kitanelli", lat: 13.0095, lon: 77.4191 },
    { name: "Harchandi", lat: 25.1, lon: 87.0442 },
    { name: "Santoshpur", lat: 22.465, lon: 88.2193 },
    { name: "Bendravadi", lat: 12.3636, lon: 76.9137 },
    { name: "Kodagihalli", lat: 12.9771, lon: 77.4651 },
    { name: "Harna Buzurg", lat: 25.0981, lon: 87.0148 },
    { name: "Mailanhalli", lat: 13.1863, lon: 77.6963 },
    { name: "Sultanpur", lat: 25.5248, lon: 85.2507 }
];
export default indiaCities;