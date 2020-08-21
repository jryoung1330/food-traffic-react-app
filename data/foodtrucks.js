import FoodTruck from '../models/FoodTruck';
import Menu from '../models/Menu';
import MenuItem from '../models/MenuItem';

export const TAGS = [
    'American',
    'Grilled',
    'Subs & Sandwiches',
    'Fast-Food',
    'Spanish',
    'Hispanic',
    'Mexican',
    'Desserts',
    'Cakes',
    'Tapas',
];

export const MENUS = [
    new Menu(1000, 100, 'Toasties', [
        new MenuItem(
            10000,
            1000,
            'Classic Toasty',
            "If you don't know what to get, get this",
            7.0,
            800,
            "bread, cheese, garlic, chives, Todd's sauce",
            null,
            false,
            true,
            false,
            false,
            false,
            'https://cdn.craftbeer.com/wp-content/uploads/grilledcheese1-900x600.jpg'
        ),
        new MenuItem(
            10001,
            1000,
            'Grilled Chicken Toasty',
            'Grilled chicken, grilled cheese',
            8.0,
            850,
            'bread, cheese, cilantro, grilled chicken, grill marks',
            null,
            false,
            false,
            false,
            false,
            false,
            'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps186341_SD153320D12_10_5b.jpg'
        ),
        new MenuItem(
            10002,
            1000,
            'Pulled Pork Toasty',
            'Pulled pork in a toasty. Period.',
            10.0,
            1000,
            'bread, cheese, pulled pork, mac and cheese, BBQ sauce',
            null,
            false,
            false,
            false,
            false,
            false,
            'https://www.closetcooking.com/wp-content/uploads/2013/04/BBQ-Pulled-Pork-Grilled-Cheese-500-9117.jpg'
        ),
    ]),
    new Menu(1001, 101, 'Entrees', [
        new MenuItem(
            10003,
            1001,
            'Chicago-style Hot Dog',
            'The Classic Chicago Dog',
            6.0,
            800,
            'everything except ketchup',
            null,
            false,
            false,
            false,
            false,
            false,
            'https://media.timeout.com/images/101561483/630/472/image.jpg'
        ),
        new MenuItem(
            10004,
            1001,
            'Cheese Fries',
            "You won't regret it",
            7.0,
            950,
            'french fries, melted cheese, bacon',
            null,
            false,
            false,
            false,
            false,
            false,
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cheese-fries-1544543066.jpg'
        ),
        new MenuItem(
            10005,
            1001,
            'Italian Beef',
            'Hangover cure',
            9.0,
            1000,
            'bread, Italian beef, peppers',
            null,
            false,
            false,
            false,
            false,
            false,
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/11/27/DV2907_Jimmys-Wrigleyville-Grill-San-Antonio-Italian-Beef_s4x3.jpg.rend.hgtvcom.826.620.suffix/1543329865456.jpeg'
        ),
    ]),
    new Menu(1002, 102, 'Tacos', [
        new MenuItem(
            10006,
            1002,
            'Carne Asada',
            'Three Steak Tacos',
            8.0,
            900,
            'steak tacos with cilantro, onion',
            null,
            false,
            false,
            false,
            true,
            false,
            'https://www.wellplated.com/wp-content/uploads/2018/07/Grilled-Flank-Steak-Tacos-600x833.jpg'
        ),
        new MenuItem(
            10007,
            1002,
            'Pollo',
            'Three Chicken Tacos',
            8.0,
            800,
            'chicken tacos with lettuce, tomatoes, and queso',
            null,
            false,
            false,
            false,
            false,
            false,
            'https://www.dinneratthezoo.com/wp-content/uploads/2017/10/slow-cooker-chicken-tacos-14.jpg'
        ),
        new MenuItem(
            10008,
            1002,
            'Carnitas',
            'Three Pulled Pork Tacos',
            8.0,
            950,
            'carnitas tacos with pico de gallo, lettuce, and sour cream',
            null,
            false,
            false,
            false,
            false,
            false,
            'https://www.recipetineats.com/wp-content/uploads/2016/08/Pulled-Pork-Tacos_3.jpg'
        ),
    ]),
    new Menu(1003, 103, 'Main Desserts', [
        new MenuItem(
            10009,
            1003,
            'Velveteer',
            'Red Velvet Cupcake',
            3.0,
            500,
            'red velvet cake with vanilla frosting',
            null,
            false,
            false,
            false,
            false,
            false,
            'https://www.gimmesomeoven.com/wp-content/uploads/2011/02/red-velvet-cupcakes1.jpg'
        ),
        new MenuItem(
            10010,
            1003,
            'The Dark & Rich',
            'Chocolate',
            3.0,
            500,
            'chocolate cake with dark chocolate frosting',
            null,
            false,
            false,
            false,
            false,
            false,
            'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg'
        ),
    ]),
    new Menu(1004, 104, 'Tapas', [
        new MenuItem(
            10011,
            1004,
            'Uno',
            'Spanish Omelette',
            8.0,
            900,
            'omelette',
            null,
            false,
            false,
            false,
            true,
            false,
            'https://www.seriouseats.com/recipes/images/2016/06/20160603-tortilla-espanola-vicky-wasik-16-1500x1125.jpg'
        ),
        new MenuItem(
            10012,
            1004,
            'Dos',
            'Papas',
            8.0,
            800,
            'potatoes',
            null,
            false,
            false,
            false,
            false,
            false,
            'https://spanishsabores.com/wp-content/uploads/2016/03/DSC07129.jpg'
        ),
        new MenuItem(
            10013,
            1004,
            'Tres',
            'Cured Ham',
            8.0,
            950,
            'ham',
            null,
            false,
            false,
            false,
            false,
            false,
            'https://previews.123rf.com/images/fabrikacrimea/fabrikacrimea1709/fabrikacrimea170901007/85816706-jamon-slices-of-bread-with-spanish-serrano-ham-served-as-tapas-cured-ham-spanish-appetizer-prosciutt.jpg'
        ),
    ]),
    new Menu(1005, 105, 'Entrees', [
        new MenuItem(
            10014,
            1005,
            'Big Burger',
            '1/2 lb hamburger',
            8.0,
            900,
            'hamburger patties, lettuce, ketchup, mustard, and cheese (optional)',
            null,
            false,
            false,
            false,
            false,
            false,
            'https://nationaltoday.com/wp-content/uploads/2019/09/cheeseburger3.jpg'
        ),
        new MenuItem(
            10015,
            1005,
            'Big Vegan',
            '1/4 vegan burger',
            8.0,
            700,
            'vegan patty, kale, spinach',
            null,
            true,
            true,
            true,
            true,
            false,
            'https://sweetsimplevegan.com/wp-content/uploads/2019/06/Easy-5-Ingredient-Veggie-Burgers-Sweet-Simple-Vegan-thumbnail.jpg'
        ),
        new MenuItem(
            10016,
            1005,
            'Big Dog',
            'Hot Dog + fries',
            8.0,
            950,
            'hot dog with fries',
            null,
            false,
            false,
            false,
            false,
            false,
            'https://previews.123rf.com/images/markstout/markstout1402/markstout140200051/25759942-a-hot-dog-with-french-fries-closeup-served-in-a-basket.jpg'
        ),
    ]),
    new Menu(1006, 105, 'Milkshakes', [
        new MenuItem(
            10017,
            1006,
            'Big Oreo Shake',
            'Oreo and Chocolate Milkshake',
            4.0,
            450,
            'milkshake made with chocolate, fudge, and oreos',
            null,
            false,
            true,
            false,
            false,
            true,
            'https://www.marbleslab.com/wp-content/uploads/2018/10/Oreo-Shake-e1538488371852.jpg',
        )
    ]),
];

export const FAVORITES = [
    new FoodTruck(
        101,
        'maxwells',
        "Maxwell's",
        'Maxwells & Co.',
        -80.3452,
        90.141,
        '123 Tryon St',
        'Charlotte',
        'NC',
        'Mecklenburg',
        '28202',
        'Corner of Tryon and 1st',
        'Chicago style hotdogs and more',
        'ACTIVE',
        'https://news12li.images.worldnow.com/images/17228663_G.jpg',
        ['American', 'Fast-Food', 'Subs & Sandwiches']
    ),
    new FoodTruck(
        103,
        'marcups',
        'Marcy Cupcakes',
        'Marcy Bakery Co.',
        -81.41,
        20.7637,
        '700 Tryon St',
        'Charlotte',
        'NC',
        'Mecklenburg',
        '28202',
        'At zoo entrance',
        'Cupcakes and small deserts fresh everyday',
        'ACTIVE',
        'https://326193.smushcdn.com/137681/wp-content/uploads/2018/04/House-of-Cupcakes_Food-Truck-e1523992752202-696x438.jpg?lossy=1&strip=1&webp=1',
        ['Desserts', 'Cakes']
    ),
];

export const FOODTRUCKS = [
    new FoodTruck(
        100,
        'todds_toasties',
        "Todd's Toasties",
        "Todd's Toasties Co.",
        1.0,
        1.0,
        '123 Main St',
        'Charlotte',
        'NC',
        'Mecklenburg',
        '28202',
        'In front of the bank',
        'Cart of the best toasties on the East Coasties',
        'ACTIVE',
        'https://assets.visitmilwaukee.org/visitmke/media/global/General%20Images/Gallery%20Size/VM-SummerSoulstice-004.jpg?ext=.jpg&mode=crop&width=1920&height=1080&scale=both',
        ['Grilled', 'American', 'Subs & Sandwiches']
    ),
    new FoodTruck(
        101,
        'maxwells',
        "Maxwell's",
        'Maxwells & Co.',
        -80.3452,
        90.141,
        '123 Tryon St',
        'Charlotte',
        'NC',
        'Mecklenburg',
        '28202',
        'Corner of Tryon and 1st',
        'Chicago style hotdogs and more',
        'ACTIVE',
        'https://news12li.images.worldnow.com/images/17228663_G.jpg',
        ['American', 'Fast-Food', 'Subs & Sandwiches']
    ),
    new FoodTruck(
        102,
        'THE_tacotruck',
        'THE Taco Truck',
        'Clt Tacos Inc.',
        -81.41,
        20.7637,
        '700 Tryon St',
        'Charlotte',
        'NC',
        'Mecklenburg',
        '28202',
        'At the zoo',
        'Authentic Mexican-style tacos, burritos, and tortas',
        'ACTIVE',
        'https://www.pcma.org/wp-content/uploads/2018/11/fort-worth-food-trucks-event-meetings.jpg',
        ['Spanish', 'Hispanic', 'Mexican']
    ),
    new FoodTruck(
        103,
        'marcups',
        'Marcy Cupcakes',
        'Marcy Bakery Co.',
        -81.41,
        20.7637,
        '700 Tryon St',
        'Charlotte',
        'NC',
        'Mecklenburg',
        '28202',
        'At zoo entrance',
        'Cupcakes and small deserts fresh everyday',
        'ACTIVE',
        'https://326193.smushcdn.com/137681/wp-content/uploads/2018/04/House-of-Cupcakes_Food-Truck-e1523992752202-696x438.jpg?lossy=1&strip=1&webp=1',
        ['Desserts', 'Cakes']
    ),
    new FoodTruck(
        104,
        'fuegofood',
        'Fuego Food Cart',
        'Fuego Food Cart Co.',
        -87.1,
        45.0,
        '532 Caldwell St',
        'Charlotte',
        'NC',
        'Mecklenburg',
        '28202',
        'Outside of the museum',
        'Spicy Spanish small plates from all over South America',
        'ACTIVE',
        'https://i.pinimg.com/originals/72/ec/80/72ec80b4d325be398397f8a287ae339e.jpg',
        ['Tapas', 'Spanish']
    ),
    new FoodTruck(
        105,
        'bigbites',
        'Big Bites',
        'Big Bites Inc.',
        -1.0,
        -1.0,
        '308 3rd St',
        'Charlotte',
        'NC',
        'Mecklenburg',
        '28202',
        "Next to Starbuck's",
        'Big food from a small truck',
        'ACTIVE',
        'https://cdn.vox-cdn.com/thumbor/rgzZTV5tPP8DiOY0WfOe1KAN1Wk=/0x0:4032x3024/1200x675/filters:focal(1792x1977:2436x2621)/cdn.vox-cdn.com/uploads/chorus_image/image/66552440/2020_03_24.0.jpg',
        ['Sandwiches', 'American']
    ),
];
