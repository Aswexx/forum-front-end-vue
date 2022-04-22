<template>
  <div class="container py-5">
    <NavTabs/>
    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRests :rests="rests"/>
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = {"restaurants": [
        {
            "id": 1,
            "name": "Miss Jeffry Mraz",
            "tel": "298-944-4949 x90103",
            "address": "0828 Will Terrace",
            "opening_hours": "08:00",
            "description": "et sunt at",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.73736295882817",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            }
        },
        {
            "id": 2,
            "name": "Mallory Barrows",
            "tel": "1-837-822-5515",
            "address": "476 Emmerich Drives",
            "opening_hours": "08:00",
            "description": "Ipsa sit rerum quibusdam eos quos eum illum. Aut cum est dolorum est. Inventore eum sit placeat expedita voluptatem non. Libero molestiae consequatur eligendi non sit.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.30434373327225",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            }
        },
        {
            "id": 3,
            "name": "Madison White",
            "tel": "(457) 954-8360 x114",
            "address": "040 Jarrod Route",
            "opening_hours": "08:00",
            "description": "Cumque dolor veritatis doloremque. Dolorem autem maxime earum nostrum rem eos sint qui. Delectus molestias dignissimos.\n \rVero molestiae alias nam modi non nisi. Facere aspernatur consequuntur veniam. Voluptate libero dicta incidunt. Eos nulla tempora cumque ipsum ab. Corporis doloribus omnis deserunt fugiat sed aut. Qui expedita quo vitae aperiam vel blanditiis voluptas.\n \rFugit soluta nulla reprehenderit eos alias fugit. Quia asperiores corporis accusamus qui recusandae et. Odio nobis et. Architecto quos dolorem occaecati sint ducimus qui aperiam ab rerum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.082148633968334",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            }
        },
        {
            "id": 4,
            "name": "Ms. Claude Pacocha",
            "tel": "805-803-3568",
            "address": "64270 O'Reilly Fort",
            "opening_hours": "08:00",
            "description": "Minus eveniet voluptas assumenda aliquam.\nIpsam saepe provident sit odio temporibus dolores reiciendis deleniti odio.\nQuis officiis est in expedita eum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=75.36191959412449",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            }
        },
        {
            "id": 5,
            "name": "Tristian Emmerich",
            "tel": "509.367.3572 x92878",
            "address": "773 Macejkovic Glen",
            "opening_hours": "08:00",
            "description": "Eveniet aut molestias.\nEnim perspiciatis rerum iusto eligendi eius quaerat similique quos numquam.\nRerum itaque natus rerum sunt consequatur debitis.\nQuis dignissimos omnis itaque sapiente aperiam delectus sit dolorem.\nAsperiores quasi dolorem eveniet qui libero.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.4528726258481",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            }
        },
        {
            "id": 6,
            "name": "Isaac Reynolds",
            "tel": "562-905-7284",
            "address": "10658 Tiffany Views",
            "opening_hours": "08:00",
            "description": "Illum et odit temporibus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.09265480341777",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            }
        },
        {
            "id": 7,
            "name": "Abelardo Steuber",
            "tel": "509-836-5281 x18861",
            "address": "796 Rosendo Falls",
            "opening_hours": "08:00",
            "description": "Quam facere molestiae id et perferendis aut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.80306719283912",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            }
        },
        {
            "id": 8,
            "name": "Bridgette Bradtke II",
            "tel": "(318) 867-8916 x8554",
            "address": "4555 Leannon Shore",
            "opening_hours": "08:00",
            "description": "quia",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.86200952266308",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            }
        },
        {
            "id": 9,
            "name": "Eloisa Fritsch",
            "tel": "(694) 873-6615",
            "address": "6602 Ariane Vista",
            "opening_hours": "08:00",
            "description": "Rem voluptatem id voluptatem accusamus beatae at aut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.367422341977775",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            }
        },
        {
            "id": 10,
            "name": "Lera Halvorson",
            "tel": "1-600-991-9647",
            "address": "248 Grady Parkway",
            "opening_hours": "08:00",
            "description": "Eligendi ullam molestias deleniti modi omnis voluptatem error inventore sequi. Iste quis asperiores sequi consequatur unde vero voluptatum sint. Accusantium nihil repellat unde ipsam. Et perferendis temporibus possimus. Amet molestiae qui explicabo maxime natus quas autem est.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.66584739630555",
            "viewCounts": 0,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            }
        }
    ],
    "comments": [
        {
            "id": 10,
            "text": "Totam ut quia blanditiis velit temporibus.",
            "UserId": 1,
            "RestaurantId": 10,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$WtyHL2DW5b/05zfLaapPFelQLj.Wg7PvV1bnlHk2Nd5gMFsfXIlK2",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            },
            "Restaurant": {
                "id": 10,
                "name": "Lera Halvorson",
                "tel": "1-600-991-9647",
                "address": "248 Grady Parkway",
                "opening_hours": "08:00",
                "description": "Eligendi ullam molestias deleniti modi omnis voluptatem error inventore sequi. Iste quis asperiores sequi consequatur unde vero voluptatum sint. Accusantium nihil repellat unde ipsam. Et perferendis temporibus possimus. Amet molestiae qui explicabo maxime natus quas autem est.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.66584739630555",
                "viewCounts": 0,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 43,
            "text": "Ut velit quia aliquam.",
            "UserId": 1,
            "RestaurantId": 43,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$WtyHL2DW5b/05zfLaapPFelQLj.Wg7PvV1bnlHk2Nd5gMFsfXIlK2",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            },
            "Restaurant": {
                "id": 43,
                "name": "Clarabelle Spinka",
                "tel": "1-147-897-5244 x3729",
                "address": "886 Waters Dam",
                "opening_hours": "08:00",
                "description": "Facere porro ratione quod. Nihil unde quia porro adipisci possimus aperiam aut.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.59169032138035",
                "viewCounts": 0,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 67,
            "text": "Culpa voluptatibus animi.",
            "UserId": 1,
            "RestaurantId": 17,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$WtyHL2DW5b/05zfLaapPFelQLj.Wg7PvV1bnlHk2Nd5gMFsfXIlK2",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            },
            "Restaurant": {
                "id": 17,
                "name": "Keenan Schaden",
                "tel": "582.212.0114 x6244",
                "address": "638 Deon Spur",
                "opening_hours": "08:00",
                "description": "Et molestias ut nulla labore ut fugit reiciendis.\nVoluptatibus veniam id incidunt tempore deleniti nihil asperiores.\nVoluptates in sint.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.88051479229466",
                "viewCounts": 0,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 97,
            "text": "Omnis nostrum esse occaecati quibusdam.",
            "UserId": 1,
            "RestaurantId": 47,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$WtyHL2DW5b/05zfLaapPFelQLj.Wg7PvV1bnlHk2Nd5gMFsfXIlK2",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            },
            "Restaurant": {
                "id": 47,
                "name": "Jevon Roberts",
                "tel": "105-647-2186 x90049",
                "address": "23710 Gracie Trail",
                "opening_hours": "08:00",
                "description": "Nisi impedit aut harum odit ut esse. Ullam aliquid quia. Cumque ea eligendi esse repellat voluptates cum.\n \rQuia earum veniam qui aut cumque. Et voluptatem adipisci illo vitae adipisci ratione sunt atque eum. Tempore expedita sed vitae eum et consequatur. Dolores non sequi voluptatem itaque necessitatibus quibusdam. Voluptatem unde consequatur natus. Rerum nihil iusto dolores inventore quo quisquam cumque saepe quia.\n \rMolestiae officia qui reiciendis quasi vel hic labore tenetur. Dolorem temporibus et. Quo assumenda ut dolor velit eum neque.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=80.83442461689737",
                "viewCounts": 0,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 118,
            "text": "Voluptatem iste nulla harum quidem ut perferendis ullam aut.",
            "UserId": 1,
            "RestaurantId": 18,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$WtyHL2DW5b/05zfLaapPFelQLj.Wg7PvV1bnlHk2Nd5gMFsfXIlK2",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            },
            "Restaurant": {
                "id": 18,
                "name": "Miss Amelia Aufderhar",
                "tel": "(384) 914-5714 x8763",
                "address": "319 Bailey Flat",
                "opening_hours": "08:00",
                "description": "sit sint et",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.489460675470877",
                "viewCounts": 0,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 146,
            "text": "Corporis natus est repellat laborum fugit alias voluptates est fuga.",
            "UserId": 1,
            "RestaurantId": 46,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$WtyHL2DW5b/05zfLaapPFelQLj.Wg7PvV1bnlHk2Nd5gMFsfXIlK2",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            },
            "Restaurant": {
                "id": 46,
                "name": "Isaias Bashirian",
                "tel": "756-490-6622 x38643",
                "address": "7068 Bryce Trail",
                "opening_hours": "08:00",
                "description": "et",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.97838049318944",
                "viewCounts": 0,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 8,
            "text": "Non provident est vitae nihil.",
            "UserId": 2,
            "RestaurantId": 8,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$872Xt5tAOXE/G822Juub6uyw09W1qsit5s9bW7qDlIVD5PvoITBQW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            },
            "Restaurant": {
                "id": 8,
                "name": "Bridgette Bradtke II",
                "tel": "(318) 867-8916 x8554",
                "address": "4555 Leannon Shore",
                "opening_hours": "08:00",
                "description": "quia",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.86200952266308",
                "viewCounts": 0,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 21,
            "text": "Aut illo et.",
            "UserId": 2,
            "RestaurantId": 21,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$872Xt5tAOXE/G822Juub6uyw09W1qsit5s9bW7qDlIVD5PvoITBQW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            },
            "Restaurant": {
                "id": 21,
                "name": "Gillian McKenzie",
                "tel": "(241) 892-4084 x8343",
                "address": "8792 Jaida Park",
                "opening_hours": "08:00",
                "description": "Tempora sint laborum voluptatum quo harum tempore. Esse molestias magni. Blanditiis reiciendis molestiae quia nihil.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.226322909285216",
                "viewCounts": 0,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 56,
            "text": "Veritatis hic ullam architecto quia reprehenderit.",
            "UserId": 2,
            "RestaurantId": 6,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$872Xt5tAOXE/G822Juub6uyw09W1qsit5s9bW7qDlIVD5PvoITBQW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            },
            "Restaurant": {
                "id": 6,
                "name": "Isaac Reynolds",
                "tel": "562-905-7284",
                "address": "10658 Tiffany Views",
                "opening_hours": "08:00",
                "description": "Illum et odit temporibus.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.09265480341777",
                "viewCounts": 0,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 83,
            "text": "Quod quod sit cupiditate ut.",
            "UserId": 2,
            "RestaurantId": 33,
            "createdAt": "2022-04-18T10:28:21.000Z",
            "updatedAt": "2022-04-18T10:28:21.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$872Xt5tAOXE/G822Juub6uyw09W1qsit5s9bW7qDlIVD5PvoITBQW",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z"
            },
            "Restaurant": {
                "id": 33,
                "name": "Alexandrine Harber",
                "tel": "(957) 919-0266",
                "address": "32663 Domenico Passage",
                "opening_hours": "08:00",
                "description": "Modi aut ut sed voluptatem omnis inventore ut asperiores et. Dolor ratione quae vero non. Et rerum quas nostrum inventore cumque. Nihil eius voluptatem. Quia recusandae ut labore sunt eos. Reiciendis tempora quam aut porro.\n \rInventore voluptate maxime dignissimos. Quisquam autem sint eveniet. Doloribus sed sint. Quas delectus natus voluptas illum praesentium incidunt praesentium fugit accusantium.\n \rQui asperiores ut aut. Voluptatem soluta veritatis quis. Dicta qui voluptatem aut totam. Quibusdam itaque non rem aliquam natus. Non laborum veritatis eaque quos velit eos perspiciatis rerum laboriosam. Perspiciatis minus eum iste quibusdam et corporis et.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=68.6943172000764",
                "viewCounts": 0,
                "createdAt": "2022-04-18T10:28:21.000Z",
                "updatedAt": "2022-04-18T10:28:21.000Z",
                "CategoryId": 1
            }
        }
    ]}
import NavTabs from './../components/NavTabs.vue'
import NewestRests from './../components/NewestRests.vue'
import NewestComments from './../components/NewestComments.vue'
export default {
  data(){
    return {
      rests:[],
      comments:[]
    }
  },
  components: {
    NavTabs,NewestRests,NewestComments
  },
  methods: {
    fetchFeeds(){
      this.rests = dummyData.restaurants
      this.comments = dummyData.comments
    }
  },
  created(){
    this.fetchFeeds()
  }
}
</script>