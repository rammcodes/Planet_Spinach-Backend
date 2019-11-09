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
      "https://www.bigbasket.com/media/uploads/p/l/100482055-2_6-daawat-basmati-rice-brown-quick-cooking.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/100482055-3_6-daawat-basmati-rice-brown-quick-cooking.jpg"
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
    name: "Whole Wheat Flour",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 1,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/1205371_1-bb-royal-organic-whole-wheat-atta.jpg"
    ]
  },
  {
    id: 7,
    name: "Jowar Flour",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 1,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40125920_6-bb-royal-organic-jowar-flour.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40125920-2_1-bb-royal-organic-jowar-flour.jpg"
    ]
  },
  {
    id: 8,
    name: "Broken Whole Wheat",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 1,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40026597-4_2-bb-royal-wheat-brokendalia.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40026597-3_2-bb-royal-wheat-brokendalia.jpg"
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
    name: "Chicken Leg",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/30000888_1-fresho-chicken-leg-without-skin.jpg"
    ]
  },
  {
    id: 12,
    name: "Atlantic Salmon Fillet",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/800364596_1-fresho-atlantic-salmon-fillet.jpg"
    ]
  },

  {
    id: 13,
    name: "Bombay Duck",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/30000787_2-fresho-bombay-duck.jpg"
    ]
  },
  {
    id: 14,
    name: "Chicken Drumstick",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10001003_2-fresho-chicken-drumstick-without-skin.jpg"
    ]
  },
  {
    id: 15,
    name: "Tuna Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000753_26-fresho-tuna-fish-boneless.jpg"
    ]
  },
  {
    id: 16,
    name: "Catla Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000755_25-fresho-catla-fish-large-curry-cutbengali-cut.jpg"
    ]
  },
  {
    id: 101,
    name: "Mackerel Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000735_31-fresho-mackerel-fish-medium-6-8-pcskg-whole-cleaned.jpg"
    ]
  },
  {
    id: 102,
    name: "Pomfret Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40068220_1-cambay-tiger-pomfret-whole.jpg"
    ]
  },
  {
    id: 103,
    name: "Arabic Chicken Breast",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/30001407_5-zorabian-chicken-breast-skinless.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/30001407-2_2-zorabian-chicken-breast-skinless.jpg"
    ]
  },
  {
    id: 104,
    name: "Chicken Cubes",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40041809_2-zorabian-chicken-cubes.jpg"
    ]
  },
  {
    id: 105,
    name: "Basa Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40003145_2-cambay-tiger-basa-fish-chunks.jpg"
    ]
  },
  {
    id: 106,
    name: "Seer Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40068222_1-cambay-tiger-seer-fish-medium.jpg",
      ""
    ]
  },
  {
    id: 107,
    name: "Tilapia Fish",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40075994_1-fresho-tilapia-fish-fillet.jpg"
    ]
  },
  {
    id: 108,
    name: "Smoked Chicken",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40041059_1-alf-farms-smoked-chicken.jpg"
    ]
  },
  {
    id: 109,
    name: "Sausages",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40063444_1-la-carne-sausage-cocktail-chicken-frankfurters.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40063444-2_1-la-carne-sausage-cocktail-chicken-frankfurters.jpg"
    ]
  },
  {
    id: 110,
    name: "Chicken Luncheon Slices",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 2,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/40157514_1-alf-farms-chicken-luncheon-slices.jpg",
      "https://www.bigbasket.com/media/uploads/p/xxl/40157514-2_1-alf-farms-chicken-luncheon-slices.jpg"
    ]
  },
  {
    id: 17,
    name: "",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 3,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/40139755_2-kapiva-ayurveda-100-plant-protein-superfood-with-greens-nutrition-powder-berry.jpg",
      "https://www.bigbasket.com/media/uploads/p/xxl/40139755-2_2-kapiva-ayurveda-100-plant-protein-superfood-with-greens-nutrition-powder-berry.jpg"
    ]
  },
  {
    id: 18,
    name: "Next Level Plant Protein",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 3,
    images: [
      "https://cdn.shopify.com/s/files/1/2393/2199/products/IMG_3000_4000x.progressive.JPG?v=1553079788",
      "https://cdn.shopify.com/s/files/1/2393/2199/products/IMG_3004_4000x.progressive.JPG?v=1553079788"
    ]
  },

  {
    id: 19,
    name: "White Chickpeas",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 3,

    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000461_12-bb-royal-channa-kabuli.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000461-2_2-bb-royal-channa-kabuli.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000461-3_2-bb-royal-channa-kabuli.jpg"
    ]
  },
  {
    id: 20,
    name: "Kidney Beans",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 3,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000437_14-bb-royal-rajma-whitechitra.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000437-2_8-bb-royal-rajma-whitechitra.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000437-3_8-bb-royal-rajma-whitechitra.jpg"
    ]
  },

  {
    id: 21,
    name: "Black Chickpeas",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 3,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40135838_5-bb-royal-organic-brown-chanachanna-brown.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40135838-2_2-bb-royal-organic-brown-chanachanna-brown.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40135838-3_2-bb-royal-organic-brown-chanachanna-brown.jpg"
    ]
  },
  {
    id: 22,
    name: "Mix Protein Pulses",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 3,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/30010466_4-bb-royal-mix-dal.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/30010466-2_4-bb-royal-mix-dal.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/30010466-3_4-bb-royal-mix-dal.jpg"
    ]
  },
  {
    id: 23,
    name: "Protein Peanuts",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 3,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/30000120_10-bb-royal-peanutsmungaphalishengdana-raw.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/30000120-2_4-bb-royal-peanutsmungaphalishengdana-raw.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/30000120-3_4-bb-royal-peanutsmungaphalishengdana-raw.jpg"
    ]
  },
  {
    id: 24,
    name: "High Protein Corn Seeds",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 3,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/20000566_8-bb-royal-popcorn-seeds.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20000566-2_5-bb-royal-popcorn-seeds.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20000566-3_5-bb-royal-popcorn-seeds.jpg"
    ]
  },
  {
    id: 25,
    name: "Salt Free Butter",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 4,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/30009708_2-parsi-dairy-farm-butter-white.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/30009708-2_1-parsi-dairy-farm-butter-white.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/30009708-4_1-parsi-dairy-farm-butter-white.jpg"
    ]
  },
  {
    id: 26,
    name: "Lactose Free Milk",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 4,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/1202754_1-amul-lactose-free-milk.jpg"
    ]
  },

  {
    id: 27,
    name: "Sugar Free Brown Bread",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 4,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/40020506_2-fresho-multigrain-bread-safe-preservative-free.jpg"
    ]
  },
  {
    id: 28,
    name: "Paneer (Indian Cheese)",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 4,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40080059_1-punjab-sind-malai-paneer-premium.jpg"
    ]
  },

  {
    id: 29,
    name: "Low Fat Curd",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 4,

    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/206701_10-nestle-a-slim-dahi-low-fat-curd.jpg",
      "https://www.bigbasket.com/media/uploads/p/xxl/206701-2_6-nestle-a-slim-dahi-low-fat-curd.jpg"
    ]
  },
  {
    id: 30,
    name: "Sugar Free Brown Buns",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 4,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/40025356_2-fresho-burger-buns-safe-preservative-free.jpg"
    ]
  },
  {
    id: 31,
    name: "Salt Free Cheese",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 4,

    images: [
      "https://www.bigbasket.com/media/uploads/p/l/100356589_1-gowardhan-cheese-slice-plain.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/100356589-2_1-gowardhan-cheese-slice-plain.jpg"
    ]
  },
  {
    id: 32,
    name: "Probiotic Curd",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 4,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/212533_9-nestle-a-actiplus-dahi-probiotic-curd.jpg",
      "https://www.bigbasket.com/media/uploads/p/xxl/212533-3_4-nestle-a-actiplus-dahi-probiotic-curd.jpg"
    ]
  },
  {
    id: 33,
    name: "Our Favorite Spinach",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 5,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/20000979_10-fresho-palak.jpg"
    ]
  },
  {
    id: 34,
    name: "Organic Carrot",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 5,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000271_13-fresho-carrot-ooty.jpg"
    ]
  },

  {
    id: 35,
    name: "Organic Tomato",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 5,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000200_17-fresho-tomato-hybrid.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000200-2_2-fresho-tomato-hybrid.jpg"
    ]
  },
  {
    id: 36,
    name: "Organic Cucumber",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 5,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000103_16-fresho-cucumber.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000103-2_1-fresho-cucumber.jpg"
    ]
  },

  {
    id: 37,
    name: "Organic Beetroot",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 5,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/50000464_5-fresho-beetroot-organically-grown.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/50000464-2_2-fresho-beetroot-organically-grown.jpg"
    ]
  },
  {
    id: 38,
    name: "Organic Green Peas",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 5,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40005817_3-fresho-green-peas-peeled.jpg"
    ]
  },
  {
    id: 39,
    name: "Mexican Cucumber",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 5,

    images: [
      "https://www.bigbasket.com/media/uploads/p/l/50000493_3-fresho-cucumber-white-organically-grown.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/50000493-2_1-fresho-cucumber-white-organically-grown.jpg"
    ]
  },
  {
    id: 40,
    name: "Carrots and Beas Bowl",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 5,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40010013_3-fresho-carrot-strips-and-beans-strip.jpg"
    ]
  },
  {
    id: 41,
    name: "Organic Red Apple",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 6,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/40033824_17-fresho-apple-red-delicious-regular.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40033824-2_10-fresho-apple-red-delicious-regular.jpg"
    ]
  },
  {
    id: 42,
    name: "Organic Kiwi",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 6,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/20000911_28-fresho-kiwi-green.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/20000911-3_9-fresho-kiwi-green.jpg"
    ]
  },

  {
    id: 43,
    name: "Organic Coconut",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 6,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40023478_4-fresho-coconut-organically-grown.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40023478-2_1-fresho-coconut-organically-grown.jpg"
    ]
  },
  {
    id: 44,
    name: "Organic Raw Banana",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 6,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000167-2_2-fresho-banana-raw-green.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000167-4_2-fresho-banana-raw-green.jpg"
    ]
  },

  {
    id: 45,
    name: "Organic Guava",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 6,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000370_13-fresho-guava.jpg"
    ]
  },
  {
    id: 46,
    name: "Organic American Oranges",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 6,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/20003956_3-fresho-baby-orange.jpg"
    ]
  },
  {
    id: 47,
    name: "Organic Green Pears",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 6,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40048445_2-fresho-pear-green-imported.jpg"
    ]
  },
  {
    id: 48,
    name: "Organic Raw Papaya",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 6,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/30000605_12-fresho-papaya-raw.jpg"
    ]
  },
  {
    id: 49,
    name: "Organic Virgin Coconut Oil",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 7,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/40160708_2-onelife-virgin-coconut-oil.jpg",
      "https://www.bigbasket.com/media/uploads/p/xxl/40160708-2_2-onelife-virgin-coconut-oil.jpg"
    ]
  },
  {
    id: 50,
    name: "Unsweetened Peanut Butter",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 7,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/40127455_3-pintola-all-natural-peanut-butter-unsweetened-crunchy.jpg",
      "https://www.bigbasket.com/media/uploads/p/xxl/40127455-2_3-pintola-all-natural-peanut-butter-unsweetened-crunchy.jpg"
    ]
  },

  {
    id: 51,
    name: "Extra Virgin Oleev Oil",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 7,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/40007327-2_8-oleev-extra-virgin-olive-oil-garnishing-salad-dressing.jpg"
    ]
  },
  {
    id: 52,
    name: "Organic Walnuts",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 7,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/40168549_5-bb-royal-organic-whole-walnut.jpg",
      "https://www.bigbasket.com/media/uploads/p/xxl/40168549-3_5-bb-royal-organic-whole-walnut.jpg"
    ]
  },

  {
    id: 53,
    name: "Natural Almonds",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 7,

    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40101871_8-bb-royal-organic-almondbadam.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40101871-3_3-bb-royal-organic-almondbadam.jpg"
    ]
  },
  {
    id: 54,
    name: "Natural Avocado",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 7,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/10000012_23-fresho-avocado.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/10000012-2_26-fresho-avocado.jpg"
    ]
  },
  {
    id: 55,
    name: "Organic Flax Seeds",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 7,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40072470_11-bb-royal-organic-flax-seeds.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40072470-3_4-bb-royal-organic-flax-seeds.jpg"
    ]
  },
  {
    id: 56,
    name: "Coldpressed Coconut Oil",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 7,
    images: [
      "https://www.bigbasket.com/media/uploads/p/xxl/40179104_6-gooddiet-organic-cold-pressed-virgin-coconut-oil.jpg",
      "https://www.bigbasket.com/media/uploads/p/xxl/40179104-2_7-gooddiet-organic-cold-pressed-virgin-coconut-oil.jpg"
    ]
  },
  {
    id: 57,
    name: "100% Natural Honey",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 8,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/30005019_4-under-the-mango-tree-honey-organic-certified.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/30005019-2_3-under-the-mango-tree-honey-organic-certified.jpg"
    ]
  },
  {
    id: 58,
    name: "Organic Jaggery",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 8,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40014747_3-pristine-fields-of-gold-organic-jaggery.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40014747-2_2-pristine-fields-of-gold-organic-jaggery.jpg"
    ]
  },

  {
    id: 59,
    name: "Arabic Natural Dates",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 8,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/20000727_10-fresho-dates-kimia-with-seed.jpg"
    ]
  },
  {
    id: 60,
    name: "Wild Forest Honey",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 8,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40085773_3-nutriwish-100-pure-organic-honey-wild-forest.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40085773-2_3-nutriwish-100-pure-organic-honey-wild-forest.jpg"
    ]
  },

  {
    id: 61,
    name: "100% Natural Raw Honey",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 8,

    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40042041_10-true-elements-honey-raw.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/40042041-2_9-true-elements-honey-raw.jpg"
    ]
  },
  {
    id: 62,
    name: "Jaggery Powder",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 8,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/1203097_1-bb-royal-jaggery-kolhapuri-900-g-till-regular-500-g.jpg"
    ]
  },
  {
    id: 63,
    name: "Natural Deseeded Dry Dates",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 8,

    images: [
      "https://www.bigbasket.com/media/uploads/p/l/163582_2-lion-dates-deseeded.jpg",
      "https://www.bigbasket.com/media/uploads/p/l/163582-2_3-lion-dates-deseeded.jpg"
    ]
  },
  {
    id: 64,
    name: "Natural Seedless Dates",
    price: {
      amount: 10,
      unit: "kg"
    },
    catId: 8,
    images: [
      "https://www.bigbasket.com/media/uploads/p/l/40093662_1-falcon-dates-dates-uae-seedless.jpg"
    ]
  }
];

module.exports = Products;
