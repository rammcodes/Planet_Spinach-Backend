const Products = [
  {
    id: 1,
    name: "Brown Rice (Long Grain) ",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 1,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/100482055-3_6-daawat-basmati-rice-brown-quick-cooking.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/100482055-2_6-daawat-basmati-rice-brown-quick-cooking.jpg"
    ]
  },
  {
    id: 2,
    name: "Brown Rice (Small Grain)",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 1,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40072466-2_4-bb-royal-organic-brown-rice.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40072466-5_2-bb-royal-organic-brown-rice.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40072466-3_4-bb-royal-organic-brown-rice.jpg"
    ]
  },

  {
    id: 3,
    name: "Rolled Oats",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 1,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40082902_11-by-nature-oats-rolled.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40082902-2_8-by-nature-oats-rolled.jpg"
    ]
  },
  {
    id: 4,
    name: "Plane Oats",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 1,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40082903_10-by-nature-oats-steel-cut.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40082903-2_3-by-nature-oats-steel-cut.jpg"
    ]
  },

  {
    id: 5,
    name: "Gluten Free Oats",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 1,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40145270_2-nutriwish-gluten-free-rolled-oats-premium.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40145270-2_4-nutriwish-gluten-free-rolled-oats-premium.jpg"
    ]
  },
  {
    id: 6,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 1,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/40089077_5-prasuma-pork-belly-slice.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },
  {
    id: 7,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 1,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40125071_2-quickees-sausage-pork-cocktail.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 8,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 1,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000908_14-fresho-chicken-curry-cut-without-skin.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },
  {
    id: 9,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 10,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },

  {
    id: 11,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/700110565_1-lazees-chicken-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 12,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000928_9-fresho-chicken-lollipop.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/700110577_1-lazees-chicken-chicken-drumsticks-skinless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },

  {
    id: 13,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg"
    ]
  },
  {
    id: 14,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/40089077_5-prasuma-pork-belly-slice.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },
  {
    id: 15,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40125071_2-quickees-sausage-pork-cocktail.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 16,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000908_14-fresho-chicken-curry-cut-without-skin.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },
  {
    id: 101,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 102,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 103,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 104,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 105,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 106,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 107,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 108,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 109,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 17,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 3,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 18,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 3,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },

  {
    id: 19,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 3,

    images: [
      "https://www.bigbasket.com/media/uploads/p/l/700110565_1-lazees-chicken-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 20,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 3,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000928_9-fresho-chicken-lollipop.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/700110577_1-lazees-chicken-chicken-drumsticks-skinless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },

  {
    id: 21,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 3,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg"
    ]
  },
  {
    id: 22,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 3,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/40089077_5-prasuma-pork-belly-slice.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },
  {
    id: 23,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 3,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40125071_2-quickees-sausage-pork-cocktail.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 24,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 3,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000908_14-fresho-chicken-curry-cut-without-skin.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },
  {
    id: 25,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 4,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 26,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 4,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },

  {
    id: 27,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 4,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/700110565_1-lazees-chicken-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 28,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 4,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000928_9-fresho-chicken-lollipop.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/700110577_1-lazees-chicken-chicken-drumsticks-skinless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },

  {
    id: 29,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 4,

    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg"
    ]
  },
  {
    id: 30,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 4,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/40089077_5-prasuma-pork-belly-slice.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },
  {
    id: 31,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 4,

    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40125071_2-quickees-sausage-pork-cocktail.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 32,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 4,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000908_14-fresho-chicken-curry-cut-without-skin.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },
  {
    id: 33,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 5,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 34,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 5,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },

  {
    id: 35,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 5,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/700110565_1-lazees-chicken-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 36,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 5,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000928_9-fresho-chicken-lollipop.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/700110577_1-lazees-chicken-chicken-drumsticks-skinless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },

  {
    id: 37,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 5,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg"
    ]
  },
  {
    id: 38,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 5,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/40089077_5-prasuma-pork-belly-slice.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },
  {
    id: 39,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 5,

    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40125071_2-quickees-sausage-pork-cocktail.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 40,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 5,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000908_14-fresho-chicken-curry-cut-without-skin.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },
  {
    id: 41,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 6,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 42,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 6,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },

  {
    id: 43,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 6,

    images: [
      "https://www.bigbasket.com/media/uploads/p/l/700110565_1-lazees-chicken-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 44,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 6,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000928_9-fresho-chicken-lollipop.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/700110577_1-lazees-chicken-chicken-drumsticks-skinless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },

  {
    id: 45,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 6,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg"
    ]
  },
  {
    id: 46,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 6,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/40089077_5-prasuma-pork-belly-slice.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },
  {
    id: 47,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 6,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40125071_2-quickees-sausage-pork-cocktail.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 48,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 6,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000908_14-fresho-chicken-curry-cut-without-skin.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },
  {
    id: 49,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 7,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 50,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 7,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },

  {
    id: 51,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 7,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/700110565_1-lazees-chicken-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 52,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 7,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000928_9-fresho-chicken-lollipop.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/700110577_1-lazees-chicken-chicken-drumsticks-skinless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },

  {
    id: 53,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 7,

    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg"
    ]
  },
  {
    id: 54,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 7,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/40089077_5-prasuma-pork-belly-slice.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },
  {
    id: 55,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 7,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40125071_2-quickees-sausage-pork-cocktail.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 56,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 7,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000908_14-fresho-chicken-curry-cut-without-skin.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },
  {
    id: 57,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 8,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 58,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 8,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },

  {
    id: 59,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 8,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/700110565_1-lazees-chicken-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 60,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 8,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000928_9-fresho-chicken-lollipop.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/700110577_1-lazees-chicken-chicken-drumsticks-skinless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },

  {
    id: 61,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 8,

    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40068151_1-big-sams-atlantic-salmon-portion-single.jpg"
    ]
  },
  {
    id: 62,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 8,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/40089077_5-prasuma-pork-belly-slice.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  },
  {
    id: 63,
    name: "Boneless High Protein Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 8,

    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40125071_2-quickees-sausage-pork-cocktail.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000900_8-fresho-chicken-breast-boneless.jpg"
    ]
  },
  {
    id: 64,
    name: "High Protein Sea Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 8,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000908_14-fresho-chicken-curry-cut-without-skin.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20003673_5-fresho-basa-fish-fillet.jpg"
    ]
  }
];

module.exports = Products;
