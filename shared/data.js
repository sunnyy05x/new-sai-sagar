/**
 * Default Data for New Sai Sagar Pure Veg Restaurant
 * Menu items, table configuration, and restaurant settings
 */
(function () {
  'use strict';

  window.SaiSagar = window.SaiSagar || {};

  const defaultMenu = [
    {
        "id": "mn-001",
        "name": "Curd Rice",
        "category": "Indian Veg Rice",
        "price": 140,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5a"
    },
    {
        "id": "mn-002",
        "name": "Palak Khichadi",
        "category": "Indian Veg Rice",
        "price": 140,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5a"
    },
    {
        "id": "mn-003",
        "name": "Kolhapuri Biryani",
        "category": "Indian Veg Rice",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5a"
    },
    {
        "id": "mn-004",
        "name": "Kadi Khichadi",
        "category": "Indian Veg Rice",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5a"
    },
    {
        "id": "mn-005",
        "name": "Hydrabadi Biryani",
        "category": "Indian Veg Rice",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5a"
    },
    {
        "id": "mn-006",
        "name": "Paneer Biryani",
        "category": "Indian Veg Rice",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5a"
    },
    {
        "id": "mn-007",
        "name": "Kaju Biryani",
        "category": "Indian Veg Rice",
        "price": 210,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5a"
    },
    {
        "id": "mn-008",
        "name": "Kaju Pulav",
        "category": "Indian Veg Rice",
        "price": 200,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5a"
    },
    {
        "id": "mn-009",
        "name": "Mushroom Biryani",
        "category": "Indian Veg Rice",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5a"
    },
    {
        "id": "mn-010",
        "name": "Veg. Fried Rice",
        "category": "Chinese Rice",
        "price": 130,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-011",
        "name": "Palak Fried Rice",
        "category": "Chinese Rice",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-012",
        "name": "Veg. Mushroom Fried Rice",
        "category": "Chinese Rice",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-013",
        "name": "Veg. Schezwan Fried Rice",
        "category": "Chinese Rice",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-014",
        "name": "Singapuri Fried Rice",
        "category": "Chinese Rice",
        "price": 140,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-015",
        "name": "Hong Kong Fried Rice",
        "category": "Chinese Rice",
        "price": 140,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-016",
        "name": "Combination Fried Rice",
        "category": "Chinese Rice",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-017",
        "name": "Manchurian Fried Rice",
        "category": "Chinese Rice",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-018",
        "name": "Veg. Tripal Schezwan Rice",
        "category": "Chinese Rice",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-019",
        "name": "Angming Rice",
        "category": "Chinese Rice",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-020",
        "name": "Chinese Bhel",
        "category": "Chinese Noodles",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-021",
        "name": "Veg. Hakka Noodles",
        "category": "Chinese Noodles",
        "price": 130,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-022",
        "name": "Mix Veg. Noodles",
        "category": "Chinese Noodles",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-023",
        "name": "Chinese Chowmain",
        "category": "Chinese Noodles",
        "price": 140,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-024",
        "name": "Schezwan Noodles",
        "category": "Chinese Noodles",
        "price": 140,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-025",
        "name": "Singapri Noodles",
        "category": "Chinese Noodles",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-026",
        "name": "Palak Paneer",
        "category": "Paneer Special",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-027",
        "name": "Paneer Tikka Masala",
        "category": "Paneer Special",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-028",
        "name": "paneer Butter Masala",
        "category": "Paneer Special",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-029",
        "name": "Paneer Masala",
        "category": "Paneer Special",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-030",
        "name": "Paneer Patiyala",
        "category": "Paneer Special",
        "price": 180,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-031",
        "name": "Paneer Lazij",
        "category": "Paneer Special",
        "price": 180,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-032",
        "name": "Paneer Hydrabadi",
        "category": "Paneer Special",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-033",
        "name": "Paneer Toofani",
        "category": "Paneer Special",
        "price": 180,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-034",
        "name": "Paneer Angara",
        "category": "Paneer Special",
        "price": 180,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-035",
        "name": "Paneer Tava",
        "category": "Paneer Special",
        "price": 180,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-036",
        "name": "Paneer Kadai",
        "category": "Paneer Special",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-037",
        "name": "Paneer Handi",
        "category": "Paneer Special",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-038",
        "name": "Paneer Dilruba",
        "category": "Paneer Special",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-039",
        "name": "Paneer Lohori",
        "category": "Paneer Special",
        "price": 171,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-040",
        "name": "Paneer Mutter",
        "category": "Paneer Special",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-041",
        "name": "Paneer Kolhapuri",
        "category": "Paneer Special",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-042",
        "name": "Paneer Mushroom Masala",
        "category": "Paneer Special",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-043",
        "name": "Shahi Paneer",
        "category": "Paneer Special",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-044",
        "name": "Paneer Korma",
        "category": "Paneer Special",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-045",
        "name": "Paneer Kofta",
        "category": "Paneer Special",
        "price": 180,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-046",
        "name": "Paneer Pasanda",
        "category": "Paneer Special",
        "price": 180,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-047",
        "name": "Paneer Chingari",
        "category": "Paneer Special",
        "price": 180,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-048",
        "name": "Paneer Diwani Handi",
        "category": "Paneer Special",
        "price": 180,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-049",
        "name": "Paneer Badshah",
        "category": "Paneer Special",
        "price": 180,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-050",
        "name": "Paneer Rajwada",
        "category": "Paneer Special",
        "price": 180,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-051",
        "name": "Paneer Peshwari",
        "category": "Paneer Special",
        "price": 180,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-052",
        "name": "Paneer Koliwada",
        "category": "Paneer Special",
        "price": 180,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-053",
        "name": "Paneer Lajwab",
        "category": "Paneer Special",
        "price": 180,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-054",
        "name": "Paneer Maratha",
        "category": "Paneer Special",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-055",
        "name": "Paneer Bhurji",
        "category": "Paneer Special",
        "price": 190,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5b"
    },
    {
        "id": "mn-056",
        "name": "Roti",
        "category": "Roti",
        "price": 16,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uded3"
    },
    {
        "id": "mn-057",
        "name": "Butter Roti",
        "category": "Roti",
        "price": 22,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uded3"
    },
    {
        "id": "mn-058",
        "name": "Wheat Roti",
        "category": "Roti",
        "price": 18,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uded3"
    },
    {
        "id": "mn-059",
        "name": "Butter Wheat Roti",
        "category": "Roti",
        "price": 25,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uded3"
    },
    {
        "id": "mn-060",
        "name": "Paratha",
        "category": "Roti",
        "price": 27,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uded3"
    },
    {
        "id": "mn-061",
        "name": "Butter Paratha",
        "category": "Roti",
        "price": 32,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uded3"
    },
    {
        "id": "mn-062",
        "name": "Alu Paratha",
        "category": "Roti",
        "price": 70,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uded3"
    },
    {
        "id": "mn-063",
        "name": "Methi Stafed Paratha",
        "category": "Roti",
        "price": 70,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uded3"
    },
    {
        "id": "mn-064",
        "name": "Gobi Paratha",
        "category": "Roti",
        "price": 70,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uded3"
    },
    {
        "id": "mn-065",
        "name": "Cheese Naan",
        "category": "Roti",
        "price": 70,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uded3"
    },
    {
        "id": "mn-066",
        "name": "Paneer Paratha",
        "category": "Roti",
        "price": 85,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uded3"
    },
    {
        "id": "mn-067",
        "name": "Cheese Paratha",
        "category": "Roti",
        "price": 90,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uded3"
    },
    {
        "id": "mn-068",
        "name": "Kulcha",
        "category": "Roti",
        "price": 22,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uded3"
    },
    {
        "id": "mn-069",
        "name": "Butter Kulcha",
        "category": "Roti",
        "price": 27,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uded3"
    },
    {
        "id": "mn-070",
        "name": "Onion Kulcha",
        "category": "Roti",
        "price": 55,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uded3"
    },
    {
        "id": "mn-071",
        "name": "Naan",
        "category": "Roti",
        "price": 27,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uded3"
    },
    {
        "id": "mn-072",
        "name": "Butter Naan",
        "category": "Roti",
        "price": 37,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uded3"
    },
    {
        "id": "mn-073",
        "name": "Garlic Naan",
        "category": "Roti",
        "price": 55,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uded3"
    },
    {
        "id": "mn-074",
        "name": "Steam Rice Half/Full",
        "category": "Indian Veg Rice",
        "price": 90,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5a"
    },
    {
        "id": "mn-075",
        "name": "Jira Rice Half/ Full",
        "category": "Indian Veg Rice",
        "price": 100,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5a"
    },
    {
        "id": "mn-076",
        "name": "Masala Rice",
        "category": "Indian Veg Rice",
        "price": 130,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5a"
    },
    {
        "id": "mn-077",
        "name": "Green Peas Pulav",
        "category": "Indian Veg Rice",
        "price": 130,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5a"
    },
    {
        "id": "mn-078",
        "name": "Veg Pulav",
        "category": "Indian Veg Rice",
        "price": 130,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5a"
    },
    {
        "id": "mn-079",
        "name": "Paneer Pulav",
        "category": "Indian Veg Rice",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5a"
    },
    {
        "id": "mn-080",
        "name": "Veg. Biryani",
        "category": "Indian Veg Rice",
        "price": 140,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5a"
    },
    {
        "id": "mn-081",
        "name": "Dal Khichadi",
        "category": "Indian Veg Rice",
        "price": 130,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5a"
    },
    {
        "id": "mn-082",
        "name": "Kashmiri Pulav",
        "category": "Indian Veg Rice",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf5a"
    },
    {
        "id": "mn-083",
        "name": "Paneer Tikka",
        "category": "Tandoori Starters",
        "price": 210,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-084",
        "name": "Paneer Hariyali Kabab",
        "category": "Tandoori Starters",
        "price": 210,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-085",
        "name": "Paneer Malai Tikka",
        "category": "Tandoori Starters",
        "price": 210,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-086",
        "name": "Paneer Seekh Kabab",
        "category": "Tandoori Starters",
        "price": 210,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-087",
        "name": "Paneer Banjara Kabab",
        "category": "Tandoori Starters",
        "price": 210,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-088",
        "name": "Paneer Kaju Seekh Kabab",
        "category": "Tandoori Starters",
        "price": 230,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-089",
        "name": "Aloo Tikki",
        "category": "Tandoori Starters",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-090",
        "name": "Gobi Tikki",
        "category": "Tandoori Starters",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-091",
        "name": "Mashroom Tikka",
        "category": "Tandoori Starters",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-092",
        "name": "Paneer Pahadi Kabab",
        "category": "Tandoori Starters",
        "price": 210,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-093",
        "name": "Veg. Seekh Kabab",
        "category": "Tandoori Starters",
        "price": 190,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-094",
        "name": "Baby Corn Tikka",
        "category": "Tandoori Starters",
        "price": 210,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-095",
        "name": "Veg. Finger",
        "category": "Chinese Starters",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-096",
        "name": "Gobi Manchurian Dry / Gravy",
        "category": "Chinese Starters",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-097",
        "name": "Veg. Manchurian Dry / Gravy",
        "category": "Chinese Starters",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-098",
        "name": "Paneer 65",
        "category": "Chinese Starters",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-099",
        "name": "Veg. 65",
        "category": "Chinese Starters",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-100",
        "name": "Gobi 65",
        "category": "Chinese Starters",
        "price": 140,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-101",
        "name": "Veg. Crispy",
        "category": "Chinese Starters",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-102",
        "name": "Mushroom Chilli Dry / Gravy",
        "category": "Chinese Starters",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-103",
        "name": "Baby Corn Chilli Dry / Gravy",
        "category": "Chinese Starters",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-104",
        "name": "Paneer Chilli Dry",
        "category": "Chinese Starters",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-105",
        "name": "Paneer Chilli Gravy",
        "category": "Chinese Starters",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-106",
        "name": "Paneer Hot Pan",
        "category": "Chinese Starters",
        "price": 200,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-107",
        "name": "Veg. Hot Pan",
        "category": "Chinese Starters",
        "price": 190,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-108",
        "name": "Mushroom 65",
        "category": "Chinese Starters",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-109",
        "name": "Special Tea",
        "category": "Beverages",
        "price": 20,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-110",
        "name": "Nes Coffee",
        "category": "Beverages",
        "price": 30,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-111",
        "name": "Filter Coffee",
        "category": "Beverages",
        "price": 25,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-112",
        "name": "Milk Glass",
        "category": "Beverages",
        "price": 40,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-113",
        "name": "Hot Chocolate",
        "category": "Beverages",
        "price": 35,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-114",
        "name": "Mineral water",
        "category": "Beverages",
        "price": 20,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-115",
        "name": "Soft Drink (500ml)",
        "category": "Beverages",
        "price": 50,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-116",
        "name": "Fresh Lemon Juice",
        "category": "Beverages",
        "price": 35,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-117",
        "name": "Jal Jeera",
        "category": "Beverages",
        "price": 20,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-118",
        "name": "Jal Jeera Soda",
        "category": "Beverages",
        "price": 40,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-119",
        "name": "Soda",
        "category": "Beverages",
        "price": 30,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-120",
        "name": "Fresh Lemon Soda",
        "category": "Beverages",
        "price": 40,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-121",
        "name": "Butter Milk",
        "category": "Beverages",
        "price": 35,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-122",
        "name": "Lassi Sweet",
        "category": "Beverages",
        "price": 70,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-123",
        "name": "Lassi Salt",
        "category": "Beverages",
        "price": 60,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-124",
        "name": "Mango Lassi",
        "category": "Beverages",
        "price": 80,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-125",
        "name": "Rose Lassi",
        "category": "Beverages",
        "price": 80,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-126",
        "name": "Lassi With Ice Cream",
        "category": "Beverages",
        "price": 80,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-127",
        "name": "Veg Sandwich",
        "category": "Sandwich",
        "price": 60,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd6a"
    },
    {
        "id": "mn-128",
        "name": "Veg Cheese Sandwich",
        "category": "Sandwich",
        "price": 75,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd6a"
    },
    {
        "id": "mn-129",
        "name": "Chatni Sandwich",
        "category": "Sandwich",
        "price": 50,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd6a"
    },
    {
        "id": "mn-130",
        "name": "Veg Grilde Sandwich",
        "category": "Sandwich",
        "price": 90,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd6a"
    },
    {
        "id": "mn-131",
        "name": "Veg Cheese Grilde Sandwich",
        "category": "Sandwich",
        "price": 100,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd6a"
    },
    {
        "id": "mn-132",
        "name": "Sp. Grilde Sandwich",
        "category": "Sandwich",
        "price": 120,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd6a"
    },
    {
        "id": "mn-133",
        "name": "Veg. Tost Sandwich",
        "category": "Sandwich",
        "price": 70,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd6a"
    },
    {
        "id": "mn-134",
        "name": "Tost Butter",
        "category": "Sandwich",
        "price": 50,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd6a"
    },
    {
        "id": "mn-135",
        "name": "Bread Butter",
        "category": "Sandwich",
        "price": 40,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd6a"
    },
    {
        "id": "mn-136",
        "name": "Bread Jam",
        "category": "Sandwich",
        "price": 50,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd6a"
    },
    {
        "id": "mn-137",
        "name": "Cheese Tost",
        "category": "Sandwich",
        "price": 80,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd6a"
    },
    {
        "id": "mn-138",
        "name": "Bread Slice (2 Pices)",
        "category": "Sandwich",
        "price": 10,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd6a"
    },
    {
        "id": "mn-139",
        "name": "Finger Chips",
        "category": "Sandwich",
        "price": 80,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd6a"
    },
    {
        "id": "mn-140",
        "name": "HongKong Noodles",
        "category": "Chinese Noodles",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-141",
        "name": "Chinese Chopsuey",
        "category": "Chinese Noodles",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-142",
        "name": "American Chopsuey",
        "category": "Chinese Noodles",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-143",
        "name": "Angming Noodles",
        "category": "Chinese Noodles",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-144",
        "name": "Pan Fried Noodles",
        "category": "Chinese Noodles",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf7d\ufe0f"
    },
    {
        "id": "mn-145",
        "name": "Fruit Salad",
        "category": "Desserts & Sweet",
        "price": 90,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf68"
    },
    {
        "id": "mn-146",
        "name": "Fruit Salad with ice cream",
        "category": "Desserts & Sweet",
        "price": 110,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf68"
    },
    {
        "id": "mn-147",
        "name": "Pineapple",
        "category": "Juices",
        "price": 80,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uddc3"
    },
    {
        "id": "mn-148",
        "name": "Water Melon (Seasonal))",
        "category": "Juices",
        "price": 70,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uddc3"
    },
    {
        "id": "mn-149",
        "name": "Mosambi",
        "category": "Juices",
        "price": 90,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uddc3"
    },
    {
        "id": "mn-150",
        "name": "Orange",
        "category": "Juices",
        "price": 80,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uddc3"
    },
    {
        "id": "mn-151",
        "name": "Ganga Jamuna",
        "category": "Juices",
        "price": 80,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uddc3"
    },
    {
        "id": "mn-152",
        "name": "Apple",
        "category": "Juices",
        "price": 70,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uddc3"
    },
    {
        "id": "mn-153",
        "name": "Mango",
        "category": "Juices",
        "price": 80,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uddc3"
    },
    {
        "id": "mn-154",
        "name": "Grapes (Seasonal)",
        "category": "Juices",
        "price": 75,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uddc3"
    },
    {
        "id": "mn-155",
        "name": "Cocktail Juice",
        "category": "Juices",
        "price": 80,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uddc3"
    },
    {
        "id": "mn-156",
        "name": "Cold Coffee",
        "category": "Milk Shake",
        "price": 70,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-157",
        "name": "Rose Milk Shake",
        "category": "Milk Shake",
        "price": 70,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-158",
        "name": "Chocolate Milk Shake",
        "category": "Milk Shake",
        "price": 75,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-159",
        "name": "Vanila Milk Shake",
        "category": "Milk Shake",
        "price": 80,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-160",
        "name": "Strawberry Milk Shake",
        "category": "Milk Shake",
        "price": 80,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-161",
        "name": "Banana Milk Shake",
        "category": "Milk Shake",
        "price": 60,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-162",
        "name": "Chikku Milk Shake",
        "category": "Milk Shake",
        "price": 80,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-163",
        "name": "Mango Milk Shake",
        "category": "Milk Shake",
        "price": 90,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-164",
        "name": "Gobi Aloo Masala",
        "category": "Main Course",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-165",
        "name": "Aloo Mutter",
        "category": "Main Course",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-166",
        "name": "Plain Palak",
        "category": "Main Course",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-167",
        "name": "Mashroom Masala",
        "category": "Main Course",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-168",
        "name": "Veg. Gravy",
        "category": "Main Course",
        "price": 110,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-169",
        "name": "Staff Tomato",
        "category": "Main Course",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-170",
        "name": "Staff Capsicum",
        "category": "Main Course",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-171",
        "name": "Dum Aloo Punjabi",
        "category": "Main Course",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-172",
        "name": "Dum Aloo Kashmiri",
        "category": "Main Course",
        "price": 180,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-173",
        "name": "Veg. Tiranga",
        "category": "Main Course",
        "price": 250,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-174",
        "name": "Veg. Chilli Milli",
        "category": "Main Course",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-175",
        "name": "Veg. Milli Julli",
        "category": "Main Course",
        "price": 180,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-176",
        "name": "Veg. Malvani Handi",
        "category": "Main Course",
        "price": 180,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-177",
        "name": "Veg Kurma",
        "category": "Main Course",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-178",
        "name": "Veg. Jalfrezi",
        "category": "Main Course",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-179",
        "name": "Veg Do Pyaza",
        "category": "Main Course",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-180",
        "name": "Veg. Basket",
        "category": "Main Course",
        "price": 180,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-181",
        "name": "Veg. Kheema",
        "category": "Main Course",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-182",
        "name": "Kaju Masala",
        "category": "Main Course",
        "price": 190,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-183",
        "name": "Navratan Kurma",
        "category": "Main Course",
        "price": 170,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-184",
        "name": "Bhendi Fry",
        "category": "Main Course",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-185",
        "name": "Bhendi Masala",
        "category": "Main Course",
        "price": 140,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-186",
        "name": "Shev Bhaji",
        "category": "Main Course",
        "price": 140,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-187",
        "name": "Lasoon Methi",
        "category": "Main Course",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-188",
        "name": "Methi Masala",
        "category": "Main Course",
        "price": 140,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-189",
        "name": "Baingan Masala",
        "category": "Main Course",
        "price": 140,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-190",
        "name": "Baingan Bharata",
        "category": "Main Course",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-191",
        "name": "Methi Chaman",
        "category": "Main Course",
        "price": 160,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd58"
    },
    {
        "id": "mn-192",
        "name": "Apple Milk Shake",
        "category": "Milk Shake",
        "price": 90,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-193",
        "name": "Dry Fruit Mix Milk Shake",
        "category": "Milk Shake",
        "price": 130,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-194",
        "name": "Badam Milk Shake",
        "category": "Milk Shake",
        "price": 130,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-195",
        "name": "Pineapple Milk Shake",
        "category": "Milk Shake",
        "price": 100,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\udd64"
    },
    {
        "id": "mn-196",
        "name": "Mango with Dry Fruit Mastani",
        "category": "Mastani",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uddcb"
    },
    {
        "id": "mn-197",
        "name": "Pista with Dry Fruit Mastani",
        "category": "Mastani",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uddcb"
    },
    {
        "id": "mn-198",
        "name": "Rose with Dry Fruit Mastani",
        "category": "Mastani",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uddcb"
    },
    {
        "id": "mn-199",
        "name": "Strawberry with Dry Fruit Mast 150",
        "category": "Mastani",
        "price": 100,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uddcb"
    },
    {
        "id": "mn-200",
        "name": "Chocolate With Dry Fruit Masta 150",
        "category": "Mastani",
        "price": 100,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uddcb"
    },
    {
        "id": "mn-201",
        "name": "Kesar Milk with Dry Fruit Mast 160",
        "category": "Mastani",
        "price": 100,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uddcb"
    },
    {
        "id": "mn-202",
        "name": "Dry Fruit Mastani",
        "category": "Mastani",
        "price": 220,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83e\uddcb"
    },
    {
        "id": "mn-203",
        "name": "Vanilla",
        "category": "Ice Cream",
        "price": 25,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf66"
    },
    {
        "id": "mn-204",
        "name": "Strawberry",
        "category": "Ice Cream",
        "price": 25,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf66"
    },
    {
        "id": "mn-205",
        "name": "Chocobar",
        "category": "Ice Cream",
        "price": 25,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf66"
    },
    {
        "id": "mn-206",
        "name": "Chocolate",
        "category": "Ice Cream",
        "price": 30,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf66"
    },
    {
        "id": "mn-207",
        "name": "Butter Scotch",
        "category": "Ice Cream",
        "price": 40,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf66"
    },
    {
        "id": "mn-208",
        "name": "Mango",
        "category": "Ice Cream",
        "price": 30,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf66"
    },
    {
        "id": "mn-209",
        "name": "Kesar Pista",
        "category": "Ice Cream",
        "price": 40,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf66"
    },
    {
        "id": "mn-210",
        "name": "Kasata Slice",
        "category": "Ice Cream",
        "price": 75,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf66"
    },
    {
        "id": "mn-211",
        "name": "Matka Kulfi",
        "category": "Ice Cream",
        "price": 85,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf66"
    },
    {
        "id": "mn-212",
        "name": "Butter Scotch",
        "category": "Family Pack",
        "price": 150,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf67"
    },
    {
        "id": "mn-213",
        "name": "Vanilla",
        "category": "Family Pack",
        "price": 130,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf67"
    },
    {
        "id": "mn-214",
        "name": "Strawberry",
        "category": "Family Pack",
        "price": 130,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf67"
    },
    {
        "id": "mn-215",
        "name": "Mango",
        "category": "Family Pack",
        "price": 140,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf67"
    },
    {
        "id": "mn-216",
        "name": "Rajbhog",
        "category": "Family Pack",
        "price": 190,
        "description": "",
        "isAvailable": true,
        "isJainAvailable": false,
        "emoji": "\ud83c\udf67"
    }
];

  const defaultTables = [];
  for (let i = 1; i <= 15; i++) {
    defaultTables.push({
      number: i,
      capacity: i <= 5 ? 2 : i <= 10 ? 4 : 6,
      status: 'available', // available | occupied | reserved
      currentOrderId: null
    });
  }

  const defaultSettings = {
    restaurantName: 'Hotel New Sai Sagar',
    tagline: 'Pure Veg Restaurant',
    address: 'Near Babar Petrol Pump, Pune-Nashik Highway, Bhosari, Pimpri-Chinchwad, Pune - 411039',
    phone: '+91 90117 88233',
    gstin: '27XXXXXXXXX1Z5',
    gstRate: 5,
    serviceChargeRate: 0,
    currency: '₹',
    receiptFooter: 'Thank You! Visit Again 🙏',
    receiptNote: 'This is a computer-generated receipt.'
  };

  const categories = ["Chinese Noodles", "Indian Veg Rice", "Chinese Starters", "Chinese Rice", "Ice Cream", "Juices", "Milk Shake", "Roti", "Desserts & Sweet", "Sandwich", "Mastani", "Paneer Special", "Beverages", "Main Course", "Family Pack", "Tandoori Starters"];

  const categoryStickers = {
    'Indian Veg Rice': 'biryani.jpg',
    'Chinese Rice': 'fried_rice.jpg',
    'Chinese Noodles': 'noodles.jpg',
    'Paneer Special': 'paneer.jpg',
    'Roti': 'roti.jpg',
    'Tandoori Starters': 'starters.jpg',
    'Chinese Starters': 'starters.jpg',
    'Beverages': 'drink.jpg',
    'Sandwich': 'sandwich.jpg',
    'Desserts & Sweet': 'icecream.jpg',
    'Juices': 'drink.jpg',
    'Milk Shake': 'drink.jpg',
    'Main Course': 'paneer.jpg',
    'Mastani': 'drink.jpg',
    'Ice Cream': 'icecream.jpg',
    'Family Pack': 'biryani.jpg',
    'General': 'biryani.jpg'
  };

  window.SaiSagar.categoryStickers = categoryStickers;

  window.SaiSagar.defaultMenu = defaultMenu;
  window.SaiSagar.defaultTables = defaultTables;
  window.SaiSagar.defaultSettings = defaultSettings;
  window.SaiSagar.categories = categories;
})();
