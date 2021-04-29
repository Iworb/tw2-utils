import { Building, BuildingType } from '../models';

export const buildings: Building[] = [
  {
    type: BuildingType.Headquarter,
    isCannotFullyDestroyed: true,
    levels: [
      {
        cost: {
          wood: 0,
          clay: 0,
          iron: 0,
          provisions: 1,
          time: 30,
        },
        hp: 3,
        pts: 10
      },
      {
        cost: {
          wood: 700,
          clay: 750,
          iron: 650,
          provisions: 1,
          time: 120,
        },
        hp: 3,
        pts: 12
      },
      {
        cost: {
          wood: 1000,
          clay: 1300,
          iron: 900,
          provisions: 1,
          time: 180,
        },
        hp: 4,
        pts: 14
      },
      {
        cost: {
          wood: 1400,
          clay: 1500,
          iron: 1300,
          provisions: 1,
          time: 300,
        },
        hp: 4,
        pts: 17
      },
      {
        cost: {
          wood: 1900,
          clay: 2000,
          iron: 1800,
          provisions: 1,
          time: 420,
        },
        hp: 4,
        pts: 21
      },
      {
        cost: {
          wood: 2300,
          clay: 2500,
          iron: 2100,
          provisions: 2,
          time: 540,
        },
        hp: 5,
        pts: 25
      },
      {
        cost: {
          wood: 2800,
          clay: 3000,
          iron: 2600,
          provisions: 2,
          time: 720,
        },
        hp: 5,
        pts: 30
      },
      {
        cost: {
          wood: 3800,
          clay: 4000,
          iron: 3600,
          provisions: 2,
          time: 900,
        },
        hp: 6,
        pts: 36
      },
      {
        cost: {
          wood: 4800,
          clay: 5000,
          iron: 4600,
          provisions: 3,
          time: 1080,
        },
        hp: 6,
        pts: 43
      },
      {
        cost: {
          wood: 5600,
          clay: 6000,
          iron: 5200,
          provisions: 3,
          time: 1260,
        },
        hp: 7,
        pts: 52
      },
      {
        cost: {
          wood: 7600,
          clay: 8000,
          iron: 7200,
          provisions: 3,
          time: 1500,
        },
        hp: 8,
        pts: 62
      },
      {
        cost: {
          wood: 9000,
          clay: 10000,
          iron: 8000,
          provisions: 4,
          time: 1800,
        },
        hp: 9,
        pts: 74
      },
      {
        cost: {
          wood: 14000,
          clay: 15000,
          iron: 13000,
          provisions: 5,
          time: 2100,
        },
        hp: 9,
        pts: 89
      },
      {
        cost: {
          wood: 19000,
          clay: 20000,
          iron: 18000,
          provisions: 5,
          time: 2700,
        },
        hp: 10,
        pts: 107
      },
      {
        cost: {
          wood: 23000,
          clay: 25000,
          iron: 20000,
          provisions: 7,
          time: 3600,
        },
        hp: 11,
        pts: 128
      },
      {
        cost: {
          wood: 27000,
          clay: 30000,
          iron: 22000,
          provisions: 8,
          time: 5400,
        },
        hp: 13,
        pts: 154
      },
      {
        cost: {
          wood: 31000,
          clay: 35000,
          iron: 24000,
          provisions: 9,
          time: 7200,
        },
        hp: 14,
        pts: 185
      },
      {
        cost: {
          wood: 35000,
          clay: 40000,
          iron: 26000,
          provisions: 10,
          time: 10800,
        },
        hp: 15,
        pts: 222
      },
      {
        cost: {
          wood: 38000,
          clay: 45000,
          iron: 28000,
          provisions: 12,
          time: 14400,
        },
        hp: 17,
        pts: 266
      },
      {
        cost: {
          wood: 40000,
          clay: 50000,
          iron: 30000,
          provisions: 15,
          time: 18000,
        },
        hp: 18,
        pts: 319
      },
      {
        cost: {
          wood: 42000,
          clay: 55000,
          iron: 32000,
          provisions: 17,
          time: 21600,
        },
        hp: 20,
        pts: 383
      },
      {
        cost: {
          wood: 44000,
          clay: 60000,
          iron: 34000,
          provisions: 19,
          time: 25200,
        },
        hp: 22,
        pts: 460
      },
      {
        cost: {
          wood: 46000,
          clay: 65000,
          iron: 36000,
          provisions: 23,
          time: 28800,
        },
        hp: 24,
        pts: 552
      },
      {
        cost: {
          wood: 48000,
          clay: 70000,
          iron: 38000,
          provisions: 27,
          time: 32400,
        },
        hp: 27,
        pts: 662
      },
      {
        cost: {
          wood: 50000,
          clay: 75000,
          iron: 40000,
          provisions: 31,
          time: 36000,
        },
        hp: 30,
        pts: 795
      },
      {
        cost: {
          wood: 53000,
          clay: 80000,
          iron: 42000,
          provisions: 37,
          time: 39600,
        },
        hp: 33,
        pts: 954
      },
      {
        cost: {
          wood: 56000,
          clay: 85000,
          iron: 44000,
          provisions: 43,
          time: 43200,
        },
        hp: 36,
        pts: 1145
      },
      {
        cost: {
          wood: 59000,
          clay: 90000,
          iron: 46000,
          provisions: 51,
          time: 46800,
        },
        hp: 39,
        pts: 1374
      },
      {
        cost: {
          wood: 62000,
          clay: 95000,
          iron: 48000,
          provisions: 59,
          time: 50400,
        },
        hp: 43,
        pts: 1648
      },
      {
        cost: {
          wood: 65000,
          clay: 100000,
          iron: 50000,
          provisions: 69,
          time: 54000,
        },
        hp: 48,
        pts: 1978
      }
    ]
  },
  {
    type: BuildingType.TimberCamp,
    levels: [
      {
        cost: {
          wood: 40,
          clay: 50,
          iron: 30,
          provisions: 1,
          time: 30,
        },
        hp: 3,
        pts: 6,
        value: 120
      },
      {
        cost: {
          wood: 50,
          clay: 60,
          iron: 40,
          provisions: 1,
          time: 60,
        },
        hp: 3,
        pts: 7,
        value: 132
      },
      {
        cost: {
          wood: 60,
          clay: 80,
          iron: 50,
          provisions: 1,
          time: 90,
        },
        hp: 4,
        pts: 9,
        value: 146
      },
      {
        cost: {
          wood: 80,
          clay: 100,
          iron: 60,
          provisions: 1,
          time: 120,
        },
        hp: 4,
        pts: 10,
        value: 162
      },
      {
        cost: {
          wood: 100,
          clay: 120,
          iron: 70,
          provisions: 1,
          time: 150,
        },
        hp: 4,
        pts: 12,
        value: 180
      },
      {
        cost: {
          wood: 100,
          clay: 200,
          iron: 100,
          provisions: 1,
          time: 210,
        },
        hp: 5,
        pts: 15,
        value: 200
      },
      {
        cost: {
          wood: 200,
          clay: 200,
          iron: 100,
          provisions: 2,
          time: 300,
        },
        hp: 5,
        pts: 18,
        value: 222
      },
      {
        cost: {
          wood: 200,
          clay: 200,
          iron: 100,
          provisions: 2,
          time: 600,
        },
        hp: 6,
        pts: 21,
        value: 248
      },
      {
        cost: {
          wood: 200,
          clay: 300,
          iron: 200,
          provisions: 2,
          time: 1200,
        },
        hp: 6,
        pts: 26,
        value: 276
      },
      {
        cost: {
          wood: 300,
          clay: 400,
          iron: 200,
          provisions: 2,
          time: 1800,
        },
        hp: 7,
        pts: 31,
        value: 308
      },
      {
        cost: {
          wood: 400,
          clay: 500,
          iron: 300,
          provisions: 3,
          time: 2400,
        },
        hp: 8,
        pts: 37,
        value: 343
      },
      {
        cost: {
          wood: 500,
          clay: 600,
          iron: 300,
          provisions: 3,
          time: 3000,
        },
        hp: 9,
        pts: 45,
        value: 383
      },
      {
        cost: {
          wood: 600,
          clay: 700,
          iron: 400,
          provisions: 4,
          time: 3600,
        },
        hp: 9,
        pts: 53,
        value: 429
      },
      {
        cost: {
          wood: 700,
          clay: 900,
          iron: 500,
          provisions: 5,
          time: 4500,
        },
        hp: 10,
        pts: 64,
        value: 480
      },
      {
        cost: {
          wood: 900,
          clay: 1000,
          iron: 700,
          provisions: 5,
          time: 5400,
        },
        hp: 11,
        pts: 77,
        value: 536
      },
      {
        cost: {
          wood: 1000,
          clay: 1000,
          iron: 800,
          provisions: 5,
          time: 6300,
        },
        hp: 13,
        pts: 92,
        value: 600
      },
      {
        cost: {
          wood: 1000,
          clay: 2000,
          iron: 1000,
          provisions: 7,
          time: 7200,
        },
        hp: 14,
        pts: 111,
        value: 673
      },
      {
        cost: {
          wood: 2000,
          clay: 2000,
          iron: 1000,
          provisions: 8,
          time: 9000,
        },
        hp: 15,
        pts: 133,
        value: 756
      },
      {
        cost: {
          wood: 2000,
          clay: 3000,
          iron: 2000,
          provisions: 9,
          time: 10800,
        },
        hp: 17,
        pts: 160,
        value: 846
      },
      {
        cost: {
          wood: 3000,
          clay: 3000,
          iron: 2000,
          provisions: 10,
          time: 14400,
        },
        hp: 18,
        pts: 192,
        value: 948
      },
      {
        cost: {
          wood: 3000,
          clay: 4000,
          iron: 2000,
          provisions: 12,
          time: 18000,
        },
        hp: 20,
        pts: 230,
        value: 1064
      },
      {
        cost: {
          wood: 4000,
          clay: 5000,
          iron: 3000,
          provisions: 14,
          time: 21600,
        },
        hp: 22,
        pts: 276,
        value: 1194
      },
      {
        cost: {
          wood: 5000,
          clay: 6000,
          iron: 4000,
          provisions: 16,
          time: 25200,
        },
        hp: 24,
        pts: 331,
        value: 1340
      },
      {
        cost: {
          wood: 6000,
          clay: 8000,
          iron: 5000,
          provisions: 19,
          time: 28800,
        },
        hp: 27,
        pts: 397,
        value: 1504
      },
      {
        cost: {
          wood: 8000,
          clay: 10000,
          iron: 6000,
          provisions: 21,
          time: 32400,
        },
        hp: 30,
        pts: 477,
        value: 1690
      },
      {
        cost: {
          wood: 10000,
          clay: 12000,
          iron: 7000,
          provisions: 24,
          time: 36000,
        },
        hp: 33,
        pts: 572,
        value: 1897
      },
      {
        cost: {
          wood: 12000,
          clay: 16000,
          iron: 9000,
          provisions: 29,
          time: 43200,
        },
        hp: 36,
        pts: 687,
        value: 2130
      },
      {
        cost: {
          wood: 16000,
          clay: 19000,
          iron: 12000,
          provisions: 33,
          time: 50400,
        },
        hp: 39,
        pts: 824,
        value: 2392
      },
      {
        cost: {
          wood: 19000,
          clay: 24000,
          iron: 15000,
          provisions: 38,
          time: 57600,
        },
        hp: 43,
        pts: 989,
        value: 2688
      },
      {
        cost: {
          wood: 24000,
          clay: 30000,
          iron: 18000,
          provisions: 43,
          time: 64800,
        },
        hp: 48,
        pts: 1187,
        value: 3020
      }
    ]
  },
  {
    type: BuildingType.ClayPit,
    levels: [
      {
        cost: {
          wood: 50,
          clay: 40,
          iron: 30,
          provisions: 1,
          time: 30,
        },
        hp: 3,
        pts: 6,
        value: 120
      },
      {
        cost: {
          wood: 60,
          clay: 50,
          iron: 40,
          provisions: 1,
          time: 60,
        },
        hp: 3,
        pts: 7,
        value: 132
      },
      {
        cost: {
          wood: 80,
          clay: 60,
          iron: 50,
          provisions: 2,
          time: 90,
        },
        hp: 4,
        pts: 9,
        value: 146
      },
      {
        cost: {
          wood: 100,
          clay: 80,
          iron: 60,
          provisions: 2,
          time: 120,
        },
        hp: 4,
        pts: 10,
        value: 162
      },
      {
        cost: {
          wood: 100,
          clay: 100,
          iron: 70,
          provisions: 2,
          time: 150,
        },
        hp: 4,
        pts: 12,
        value: 180
      },
      {
        cost: {
          wood: 200,
          clay: 100,
          iron: 90,
          provisions: 2,
          time: 210,
        },
        hp: 5,
        pts: 15,
        value: 200
      },
      {
        cost: {
          wood: 200,
          clay: 200,
          iron: 100,
          provisions: 3,
          time: 300,
        },
        hp: 5,
        pts: 18,
        value: 222
      },
      {
        cost: {
          wood: 200,
          clay: 200,
          iron: 100,
          provisions: 3,
          time: 600,
        },
        hp: 6,
        pts: 21,
        value: 248
      },
      {
        cost: {
          wood: 300,
          clay: 200,
          iron: 200,
          provisions: 4,
          time: 1200,
        },
        hp: 6,
        pts: 26,
        value: 276
      },
      {
        cost: {
          wood: 400,
          clay: 300,
          iron: 200,
          provisions: 4,
          time: 1800,
        },
        hp: 7,
        pts: 31,
        value: 308
      },
      {
        cost: {
          wood: 500,
          clay: 400,
          iron: 300,
          provisions: 4,
          time: 2400,
        },
        hp: 8,
        pts: 37,
        value: 343
      },
      {
        cost: {
          wood: 600,
          clay: 500,
          iron: 300,
          provisions: 5,
          time: 3000,
        },
        hp: 9,
        pts: 45,
        value: 383
      },
      {
        cost: {
          wood: 700,
          clay: 600,
          iron: 400,
          provisions: 6,
          time: 3600,
        },
        hp: 9,
        pts: 53,
        value: 429
      },
      {
        cost: {
          wood: 900,
          clay: 700,
          iron: 500,
          provisions: 7,
          time: 4500,
        },
        hp: 10,
        pts: 64,
        value: 480
      },
      {
        cost: {
          wood: 1000,
          clay: 900,
          iron: 700,
          provisions: 8,
          time: 5400,
        },
        hp: 11,
        pts: 77,
        value: 536
      },
      {
        cost: {
          wood: 1000,
          clay: 1000,
          iron: 800,
          provisions: 8,
          time: 6300,
        },
        hp: 13,
        pts: 92,
        value: 600
      },
      {
        cost: {
          wood: 2000,
          clay: 1000,
          iron: 1000,
          provisions: 10,
          time: 7200,
        },
        hp: 14,
        pts: 111,
        value: 673
      },
      {
        cost: {
          wood: 2000,
          clay: 2000,
          iron: 1000,
          provisions: 12,
          time: 9000,
        },
        hp: 15,
        pts: 133,
        value: 756
      },
      {
        cost: {
          wood: 3000,
          clay: 2000,
          iron: 2000,
          provisions: 13,
          time: 10800,
        },
        hp: 17,
        pts: 160,
        value: 846
      },
      {
        cost: {
          wood: 3000,
          clay: 3000,
          iron: 2000,
          provisions: 15,
          time: 14400,
        },
        hp: 18,
        pts: 192,
        value: 948
      },
      {
        cost: {
          wood: 4000,
          clay: 3000,
          iron: 2000,
          provisions: 16,
          time: 18000,
        },
        hp: 20,
        pts: 230,
        value: 1064
      },
      {
        cost: {
          wood: 5000,
          clay: 4000,
          iron: 3000,
          provisions: 20,
          time: 21600,
        },
        hp: 22,
        pts: 276,
        value: 1194
      },
      {
        cost: {
          wood: 6000,
          clay: 5000,
          iron: 4000,
          provisions: 22,
          time: 25200,
        },
        hp: 24,
        pts: 331,
        value: 1340
      },
      {
        cost: {
          wood: 8000,
          clay: 6000,
          iron: 5000,
          provisions: 25,
          time: 28800,
        },
        hp: 27,
        pts: 397,
        value: 1504
      },
      {
        cost: {
          wood: 10000,
          clay: 8000,
          iron: 6000,
          provisions: 28,
          time: 32400,
        },
        hp: 30,
        pts: 477,
        value: 1690
      },
      {
        cost: {
          wood: 12000,
          clay: 10000,
          iron: 7000,
          provisions: 33,
          time: 36000,
        },
        hp: 33,
        pts: 572,
        value: 1897
      },
      {
        cost: {
          wood: 16000,
          clay: 12000,
          iron: 9000,
          provisions: 37,
          time: 43200,
        },
        hp: 36,
        pts: 687,
        value: 2130
      },
      {
        cost: {
          wood: 19000,
          clay: 16000,
          iron: 12000,
          provisions: 42,
          time: 50400,
        },
        hp: 39,
        pts: 824,
        value: 2392
      },
      {
        cost: {
          wood: 24000,
          clay: 19000,
          iron: 15000,
          provisions: 48,
          time: 57600,
        },
        hp: 43,
        pts: 989,
        value: 2688
      },
      {
        cost: {
          wood: 30000,
          clay: 24000,
          iron: 18000,
          provisions: 55,
          time: 64800,
        },
        hp: 48,
        pts: 1187,
        value: 3020
      }
    ]
  },
  {
    type: BuildingType.IronMine,
    levels: [
      {
        cost: {
          wood: 60,
          clay: 50,
          iron: 60,
          provisions: 1,
          time: 30,
        },
        hp: 3,
        pts: 6,
        value: 120
      },
      {
        cost: {
          wood: 70,
          clay: 60,
          iron: 70,
          provisions: 2,
          time: 60,
        },
        hp: 3,
        pts: 7,
        value: 132
      },
      {
        cost: {
          wood: 90,
          clay: 80,
          iron: 90,
          provisions: 2,
          time: 90,
        },
        hp: 4,
        pts: 9,
        value: 146
      },
      {
        cost: {
          wood: 100,
          clay: 100,
          iron: 100,
          provisions: 2,
          time: 120,
        },
        hp: 4,
        pts: 10,
        value: 162
      },
      {
        cost: {
          wood: 100,
          clay: 100,
          iron: 100,
          provisions: 3,
          time: 150,
        },
        hp: 4,
        pts: 12,
        value: 180
      },
      {
        cost: {
          wood: 200,
          clay: 200,
          iron: 200,
          provisions: 3,
          time: 210,
        },
        hp: 5,
        pts: 15,
        value: 200
      },
      {
        cost: {
          wood: 200,
          clay: 200,
          iron: 200,
          provisions: 4,
          time: 300,
        },
        hp: 5,
        pts: 18,
        value: 222
      },
      {
        cost: {
          wood: 300,
          clay: 200,
          iron: 300,
          provisions: 4,
          time: 600,
        },
        hp: 6,
        pts: 21,
        value: 248
      },
      {
        cost: {
          wood: 400,
          clay: 300,
          iron: 400,
          provisions: 5,
          time: 1200,
        },
        hp: 6,
        pts: 26,
        value: 276
      },
      {
        cost: {
          wood: 400,
          clay: 400,
          iron: 400,
          provisions: 6,
          time: 1800,
        },
        hp: 7,
        pts: 31,
        value: 308
      },
      {
        cost: {
          wood: 500,
          clay: 500,
          iron: 500,
          provisions: 7,
          time: 2400,
        },
        hp: 8,
        pts: 37,
        value: 343
      },
      {
        cost: {
          wood: 700,
          clay: 600,
          iron: 700,
          provisions: 8,
          time: 3000,
        },
        hp: 9,
        pts: 45,
        value: 383
      },
      {
        cost: {
          wood: 800,
          clay: 700,
          iron: 800,
          provisions: 10,
          time: 3600,
        },
        hp: 9,
        pts: 53,
        value: 429
      },
      {
        cost: {
          wood: 1000,
          clay: 900,
          iron: 1000,
          provisions: 11,
          time: 4500,
        },
        hp: 10,
        pts: 64,
        value: 480
      },
      {
        cost: {
          wood: 1000,
          clay: 1000,
          iron: 1000,
          provisions: 13,
          time: 5400,
        },
        hp: 11,
        pts: 77,
        value: 536
      },
      {
        cost: {
          wood: 2000,
          clay: 1000,
          iron: 2000,
          provisions: 15,
          time: 6300,
        },
        hp: 13,
        pts: 92,
        value: 600
      },
      {
        cost: {
          wood: 2000,
          clay: 2000,
          iron: 2000,
          provisions: 18,
          time: 7200,
        },
        hp: 14,
        pts: 111,
        value: 673
      },
      {
        cost: {
          wood: 3000,
          clay: 2000,
          iron: 3000,
          provisions: 21,
          time: 9000,
        },
        hp: 15,
        pts: 133,
        value: 756
      },
      {
        cost: {
          wood: 3000,
          clay: 3000,
          iron: 3000,
          provisions: 25,
          time: 10800,
        },
        hp: 17,
        pts: 160,
        value: 846
      },
      {
        cost: {
          wood: 4000,
          clay: 3000,
          iron: 4000,
          provisions: 28,
          time: 14400,
        },
        hp: 18,
        pts: 192,
        value: 948
      },
      {
        cost: {
          wood: 5000,
          clay: 4000,
          iron: 5000,
          provisions: 34,
          time: 18000,
        },
        hp: 20,
        pts: 230,
        value: 1064
      },
      {
        cost: {
          wood: 6000,
          clay: 5000,
          iron: 6000,
          provisions: 39,
          time: 21600,
        },
        hp: 22,
        pts: 276,
        value: 1194
      },
      {
        cost: {
          wood: 8000,
          clay: 6000,
          iron: 8000,
          provisions: 46,
          time: 25200,
        },
        hp: 24,
        pts: 331,
        value: 1340
      },
      {
        cost: {
          wood: 10000,
          clay: 8000,
          iron: 10000,
          provisions: 54,
          time: 28800,
        },
        hp: 27,
        pts: 397,
        value: 1504
      },
      {
        cost: {
          wood: 12000,
          clay: 10000,
          iron: 12000,
          provisions: 63,
          time: 32400,
        },
        hp: 30,
        pts: 477,
        value: 1690
      },
      {
        cost: {
          wood: 15000,
          clay: 12000,
          iron: 15000,
          provisions: 74,
          time: 36000,
        },
        hp: 33,
        pts: 572,
        value: 1897
      },
      {
        cost: {
          wood: 19000,
          clay: 16000,
          iron: 19000,
          provisions: 86,
          time: 43200,
        },
        hp: 36,
        pts: 687,
        value: 2130
      },
      {
        cost: {
          wood: 23000,
          clay: 19000,
          iron: 23000,
          provisions: 100,
          time: 50400,
        },
        hp: 39,
        pts: 824,
        value: 2392
      },
      {
        cost: {
          wood: 29000,
          clay: 24000,
          iron: 29000,
          provisions: 118,
          time: 57600,
        },
        hp: 43,
        pts: 989,
        value: 2688
      },
      {
        cost: {
          wood: 36000,
          clay: 30000,
          iron: 36000,
          provisions: 138,
          time: 64800,
        },
        hp: 48,
        pts: 1187,
        value: 3020
      }
    ]
  },
  {
    type: BuildingType.Farm,
    isCannotFullyDestroyed: true,
    levels: [
      {
        cost: {
          wood: 40,
          clay: 50,
          iron: 30,
          provisions: 0,
          time: 60,
        },
        hp: 5,
        pts: 5,
        value: 240
      },
      {
        cost: {
          wood: 50,
          clay: 70,
          iron: 40,
          provisions: 0,
          time: 90,
        },
        hp: 6,
        pts: 6,
        value: 281
      },
      {
        cost: {
          wood: 70,
          clay: 90,
          iron: 50,
          provisions: 0,
          time: 120,
        },
        hp: 6,
        pts: 7,
        value: 330
      },
      {
        cost: {
          wood: 90,
          clay: 110,
          iron: 70,
          provisions: 0,
          time: 300,
        },
        hp: 7,
        pts: 9,
        value: 386
      },
      {
        cost: {
          wood: 120,
          clay: 150,
          iron: 90,
          provisions: 0,
          time: 450,
        },
        hp: 7,
        pts: 10,
        value: 453
      },
      {
        cost: {
          wood: 150,
          clay: 190,
          iron: 120,
          provisions: 0,
          time: 600,
        },
        hp: 8,
        pts: 12,
        value: 531
      },
      {
        cost: {
          wood: 200,
          clay: 250,
          iron: 150,
          provisions: 0,
          time: 1800,
        },
        hp: 9,
        pts: 15,
        value: 622
      },
      {
        cost: {
          wood: 260,
          clay: 330,
          iron: 200,
          provisions: 0,
          time: 2400,
        },
        hp: 10,
        pts: 18,
        value: 729
      },
      {
        cost: {
          wood: 350,
          clay: 430,
          iron: 260,
          provisions: 0,
          time: 3000,
        },
        hp: 11,
        pts: 21,
        value: 855
      },
      {
        cost: {
          wood: 500,
          clay: 600,
          iron: 300,
          provisions: 0,
          time: 3600,
        },
        hp: 12,
        pts: 26,
        value: 1002
      },
      {
        cost: {
          wood: 600,
          clay: 700,
          iron: 400,
          provisions: 0,
          time: 4500,
        },
        hp: 13,
        pts: 31,
        value: 1175
      },
      {
        cost: {
          wood: 800,
          clay: 1000,
          iron: 600,
          provisions: 0,
          time: 5400,
        },
        hp: 14,
        pts: 37,
        value: 1377
      },
      {
        cost: {
          wood: 1000,
          clay: 1300,
          iron: 800,
          provisions: 0,
          time: 6300,
        },
        hp: 16,
        pts: 45,
        value: 1614
      },
      {
        cost: {
          wood: 1300,
          clay: 1700,
          iron: 1000,
          provisions: 0,
          time: 7200,
        },
        hp: 17,
        pts: 53,
        value: 1891
      },
      {
        cost: {
          wood: 1800,
          clay: 2200,
          iron: 1300,
          provisions: 0,
          time: 9000,
        },
        hp: 19,
        pts: 64,
        value: 2217
      },
      {
        cost: {
          wood: 2300,
          clay: 2900,
          iron: 1700,
          provisions: 0,
          time: 10800,
        },
        hp: 21,
        pts: 77,
        value: 2598
      },
      {
        cost: {
          wood: 3000,
          clay: 3800,
          iron: 2300,
          provisions: 0,
          time: 12600,
        },
        hp: 23,
        pts: 92,
        value: 3046
      },
      {
        cost: {
          wood: 3900,
          clay: 4900,
          iron: 3000,
          provisions: 0,
          time: 14400,
        },
        hp: 25,
        pts: 111,
        value: 3570
      },
      {
        cost: {
          wood: 5200,
          clay: 6500,
          iron: 3900,
          provisions: 0,
          time: 18000,
        },
        hp: 28,
        pts: 133,
        value: 4184
      },
      {
        cost: {
          wood: 6800,
          clay: 8500,
          iron: 5100,
          provisions: 0,
          time: 21600,
        },
        hp: 31,
        pts: 160,
        value: 4904
      },
      {
        cost: {
          wood: 8900,
          clay: 11100,
          iron: 6600,
          provisions: 0,
          time: 25200,
        },
        hp: 34,
        pts: 192,
        value: 5748
      },
      {
        cost: {
          wood: 12000,
          clay: 15000,
          iron: 9000,
          provisions: 0,
          time: 28800,
        },
        hp: 37,
        pts: 230,
        value: 6737
      },
      {
        cost: {
          wood: 15000,
          clay: 19000,
          iron: 11000,
          provisions: 0,
          time: 36000,
        },
        hp: 41,
        pts: 276,
        value: 7897
      },
      {
        cost: {
          wood: 20000,
          clay: 25000,
          iron: 15000,
          provisions: 0,
          time: 43200,
        },
        hp: 45,
        pts: 331,
        value: 9256
      },
      {
        cost: {
          wood: 26000,
          clay: 33000,
          iron: 20000,
          provisions: 0,
          time: 50400,
        },
        hp: 49,
        pts: 397,
        value: 10849
      },
      {
        cost: {
          wood: 34000,
          clay: 43000,
          iron: 26000,
          provisions: 0,
          time: 57600,
        },
        hp: 54,
        pts: 477,
        value: 12716
      },
      {
        cost: {
          wood: 45000,
          clay: 56000,
          iron: 34000,
          provisions: 0,
          time: 64800,
        },
        hp: 60,
        pts: 572,
        value: 14904
      },
      {
        cost: {
          wood: 59000,
          clay: 73000,
          iron: 44000,
          provisions: 0,
          time: 79200,
        },
        hp: 66,
        pts: 687,
        value: 17469
      },
      {
        cost: {
          wood: 77000,
          clay: 96000,
          iron: 58000,
          provisions: 0,
          time: 93600,
        },
        hp: 72,
        pts: 824,
        value: 20476
      },
      {
        cost: {
          wood: 101000,
          clay: 126000,
          iron: 76000,
          provisions: 0,
          time: 108000,
        },
        hp: 79,
        pts: 989,
        value: 24000
      }
    ]
  },
  {
    type: BuildingType.Warehouse,
    isCannotFullyDestroyed: true,
    levels: [
      {
        cost: {
          wood: 200,
          clay: 190,
          iron: 170,
          provisions: 0,
          time: 30,
        },
        hp: 3,
        pts: 6,
        value: 1000
      },
      {
        cost: {
          wood: 240,
          clay: 230,
          iron: 210,
          provisions: 0,
          time: 60,
        },
        hp: 3,
        pts: 7,
        value: 1229
      },
      {
        cost: {
          wood: 290,
          clay: 280,
          iron: 250,
          provisions: 0,
          time: 90,
        },
        hp: 4,
        pts: 9,
        value: 1512
      },
      {
        cost: {
          wood: 350,
          clay: 340,
          iron: 300,
          provisions: 0,
          time: 120,
        },
        hp: 4,
        pts: 10,
        value: 1859
      },
      {
        cost: {
          wood: 430,
          clay: 410,
          iron: 360,
          provisions: 0,
          time: 150,
        },
        hp: 4,
        pts: 12,
        value: 2285
      },
      {
        cost: {
          wood: 520,
          clay: 490,
          iron: 440,
          provisions: 0,
          time: 240,
        },
        hp: 5,
        pts: 15,
        value: 2810
      },
      {
        cost: {
          wood: 630,
          clay: 600,
          iron: 530,
          provisions: 0,
          time: 360,
        },
        hp: 5,
        pts: 18,
        value: 3454
      },
      {
        cost: {
          wood: 760,
          clay: 720,
          iron: 650,
          provisions: 0,
          time: 600,
        },
        hp: 6,
        pts: 21,
        value: 4247
      },
      {
        cost: {
          wood: 920,
          clay: 870,
          iron: 780,
          provisions: 0,
          time: 1200,
        },
        hp: 6,
        pts: 26,
        value: 5222
      },
      {
        cost: {
          wood: 1100,
          clay: 1100,
          iron: 900,
          provisions: 0,
          time: 2400,
        },
        hp: 7,
        pts: 31,
        value: 6420
      },
      {
        cost: {
          wood: 1300,
          clay: 1300,
          iron: 1100,
          provisions: 0,
          time: 3600,
        },
        hp: 8,
        pts: 37,
        value: 7893
      },
      {
        cost: {
          wood: 1600,
          clay: 1500,
          iron: 1400,
          provisions: 0,
          time: 5400,
        },
        hp: 9,
        pts: 45,
        value: 9705
      },
      {
        cost: {
          wood: 2000,
          clay: 1900,
          iron: 1700,
          provisions: 0,
          time: 7200,
        },
        hp: 9,
        pts: 53,
        value: 11932
      },
      {
        cost: {
          wood: 2400,
          clay: 2300,
          iron: 2000,
          provisions: 0,
          time: 9000,
        },
        hp: 10,
        pts: 64,
        value: 14670
      },
      {
        cost: {
          wood: 2900,
          clay: 2700,
          iron: 2500,
          provisions: 0,
          time: 10800,
        },
        hp: 11,
        pts: 77,
        value: 18037
      },
      {
        cost: {
          wood: 3500,
          clay: 3300,
          iron: 3000,
          provisions: 0,
          time: 12600,
        },
        hp: 13,
        pts: 92,
        value: 22177
      },
      {
        cost: {
          wood: 4200,
          clay: 4000,
          iron: 3600,
          provisions: 0,
          time: 14400,
        },
        hp: 14,
        pts: 111,
        value: 27266
      },
      {
        cost: {
          wood: 5100,
          clay: 4900,
          iron: 4300,
          provisions: 0,
          time: 18000,
        },
        hp: 15,
        pts: 133,
        value: 33523
      },
      {
        cost: {
          wood: 6200,
          clay: 5900,
          iron: 5300,
          provisions: 0,
          time: 21600,
        },
        hp: 17,
        pts: 160,
        value: 41217
      },
      {
        cost: {
          wood: 7500,
          clay: 7100,
          iron: 6400,
          provisions: 0,
          time: 25200,
        },
        hp: 18,
        pts: 192,
        value: 50675
      },
      {
        cost: {
          wood: 9100,
          clay: 8600,
          iron: 7700,
          provisions: 0,
          time: 28800,
        },
        hp: 20,
        pts: 230,
        value: 62305
      },
      {
        cost: {
          wood: 11000,
          clay: 10000,
          iron: 9000,
          provisions: 0,
          time: 36000,
        },
        hp: 22,
        pts: 276,
        value: 76604
      },
      {
        cost: {
          wood: 13000,
          clay: 13000,
          iron: 11000,
          provisions: 0,
          time: 43200,
        },
        hp: 24,
        pts: 331,
        value: 94184
      },
      {
        cost: {
          wood: 16000,
          clay: 15000,
          iron: 14000,
          provisions: 0,
          time: 50400,
        },
        hp: 27,
        pts: 397,
        value: 115798
      },
      {
        cost: {
          wood: 19000,
          clay: 18000,
          iron: 16000,
          provisions: 0,
          time: 57600,
        },
        hp: 30,
        pts: 477,
        value: 142373
      },
      {
        cost: {
          wood: 23000,
          clay: 22000,
          iron: 20000,
          provisions: 0,
          time: 64800,
        },
        hp: 33,
        pts: 572,
        value: 175047
      },
      {
        cost: {
          wood: 28000,
          clay: 27000,
          iron: 24000,
          provisions: 0,
          time: 72000,
        },
        hp: 36,
        pts: 687,
        value: 215219
      },
      {
        cost: {
          wood: 34000,
          clay: 33000,
          iron: 29000,
          provisions: 0,
          time: 79200,
        },
        hp: 39,
        pts: 824,
        value: 264610
      },
      {
        cost: {
          wood: 42000,
          clay: 40000,
          iron: 35000,
          provisions: 0,
          time: 93600,
        },
        hp: 43,
        pts: 989,
        value: 325337
      },
      {
        cost: {
          wood: 50000,
          clay: 48000,
          iron: 43000,
          provisions: 0,
          time: 108000,
        },
        hp: 48,
        pts: 1187,
        value: 400000
      }
    ]
  },
  {
    type: BuildingType.Church,
    isCannotFullyDestroyed: true,
    levels: [
      {
        cost: {
          wood: 16000,
          clay: 20000,
          iron: 5000,
          provisions: 5000,
          time: 21600,
        },
        hp: 800,
        pts: 10,
        value: 1
      },
      {
        cost: {
          wood: 20000,
          clay: 25000,
          iron: 7000,
          provisions: 2750,
          time: 54000,
        },
        hp: 800,
        pts: 12,
        value: 1.05
      },
      {
        cost: {
          wood: 25000,
          clay: 25000,
          iron: 32000,
          provisions: 4263,
          time: 86400,
        },
        hp: 800,
        pts: 14,
        value: 1.1
      }
    ]
  },
  {
    type: BuildingType.Chapel,
    levels: [
      {
        cost: {
          wood: 160,
          clay: 200,
          iron: 50,
          provisions: 0,
          time: 30,
        },
        hp: 0,
        pts: 10,
        value: 1
      }
    ]
  },
  {
    type: BuildingType.RallyPoint,
    levels: [
      {
        cost: {
          wood: 50,
          clay: 100,
          iron: 50,
          provisions: 1,
          time: 30,
        },
        hp: 3,
        pts: 2
      },
      {
        cost: {
          wood: 100,
          clay: 150,
          iron: 150,
          provisions: 1,
          time: 300,
        },
        hp: 3,
        pts: 2
      },
      {
        cost: {
          wood: 2500,
          clay: 2500,
          iron: 3000,
          provisions: 3,
          time: 28800,
        },
        hp: 4,
        pts: 3
      },
      {
        cost: {
          wood: 6000,
          clay: 9000,
          iron: 11000,
          provisions: 7,
          time: 57600,
        },
        hp: 4,
        pts: 3
      },
      {
        cost: {
          wood: 13000,
          clay: 18000,
          iron: 25000,
          provisions: 16,
          time: 86400,
        },
        hp: 4,
        pts: 4
      }
    ]
  },
  {
    type: BuildingType.Barracks,
    requiredHeadquartersLevel: 2,
    levels: [
      {
        cost: {
          wood: 400,
          clay: 500,
          iron: 600,
          provisions: 7,
          time: 60,
        },
        hp: 3,
        pts: 16
      },
      {
        cost: {
          wood: 480,
          clay: 600,
          iron: 720,
          provisions: 1,
          time: 150,
        },
        hp: 3,
        pts: 19
      },
      {
        cost: {
          wood: 580,
          clay: 720,
          iron: 860,
          provisions: 2,
          time: 240,
        },
        hp: 4,
        pts: 23
      },
      {
        cost: {
          wood: 700,
          clay: 860,
          iron: 1030,
          provisions: 2,
          time: 330,
        },
        hp: 4,
        pts: 28
      },
      {
        cost: {
          wood: 840,
          clay: 1030,
          iron: 1240,
          provisions: 3,
          time: 420,
        },
        hp: 4,
        pts: 33
      },
      {
        cost: {
          wood: 1800,
          clay: 2000,
          iron: 2200,
          provisions: 2,
          time: 510,
        },
        hp: 5,
        pts: 40
      },
      {
        cost: {
          wood: 2200,
          clay: 2400,
          iron: 2600,
          provisions: 4,
          time: 600,
        },
        hp: 5,
        pts: 48
      },
      {
        cost: {
          wood: 2600,
          clay: 2900,
          iron: 3100,
          provisions: 4,
          time: 720,
        },
        hp: 6,
        pts: 57
      },
      {
        cost: {
          wood: 3100,
          clay: 3500,
          iron: 3700,
          provisions: 5,
          time: 840,
        },
        hp: 6,
        pts: 69
      },
      {
        cost: {
          wood: 3700,
          clay: 4200,
          iron: 4400,
          provisions: 6,
          time: 960,
        },
        hp: 7,
        pts: 83
      },
      {
        cost: {
          wood: 6000,
          clay: 7000,
          iron: 8000,
          provisions: 7,
          time: 1080,
        },
        hp: 8,
        pts: 99
      },
      {
        cost: {
          wood: 7200,
          clay: 8400,
          iron: 9600,
          provisions: 9,
          time: 1200,
        },
        hp: 9,
        pts: 119
      },
      {
        cost: {
          wood: 8600,
          clay: 10100,
          iron: 11500,
          provisions: 10,
          time: 1500,
        },
        hp: 9,
        pts: 143
      },
      {
        cost: {
          wood: 10300,
          clay: 12100,
          iron: 13800,
          provisions: 13,
          time: 1800,
        },
        hp: 10,
        pts: 171
      },
      {
        cost: {
          wood: 12400,
          clay: 14500,
          iron: 16600,
          provisions: 15,
          time: 2700,
        },
        hp: 11,
        pts: 205
      },
      {
        cost: {
          wood: 21000,
          clay: 23000,
          iron: 25000,
          provisions: 18,
          time: 3600,
        },
        hp: 13,
        pts: 247
      },
      {
        cost: {
          wood: 22000,
          clay: 25000,
          iron: 26000,
          provisions: 21,
          time: 7200,
        },
        hp: 14,
        pts: 296
      },
      {
        cost: {
          wood: 23000,
          clay: 28000,
          iron: 27000,
          provisions: 26,
          time: 10800,
        },
        hp: 15,
        pts: 355
      },
      {
        cost: {
          wood: 24000,
          clay: 31000,
          iron: 28000,
          provisions: 31,
          time: 14400,
        },
        hp: 17,
        pts: 426
      },
      {
        cost: {
          wood: 25000,
          clay: 34000,
          iron: 29000,
          provisions: 38,
          time: 18000,
        },
        hp: 18,
        pts: 511
      },
      {
        cost: {
          wood: 26000,
          clay: 37000,
          iron: 30000,
          provisions: 44,
          time: 21600,
        },
        hp: 20,
        pts: 613
      },
      {
        cost: {
          wood: 27000,
          clay: 41000,
          iron: 32000,
          provisions: 54,
          time: 25200,
        },
        hp: 22,
        pts: 736
      },
      {
        cost: {
          wood: 28000,
          clay: 45000,
          iron: 34000,
          provisions: 64,
          time: 28800,
        },
        hp: 24,
        pts: 883
      },
      {
        cost: {
          wood: 29000,
          clay: 50000,
          iron: 36000,
          provisions: 78,
          time: 32400,
        },
        hp: 27,
        pts: 1060
      },
      {
        cost: {
          wood: 30000,
          clay: 55000,
          iron: 38000,
          provisions: 92,
          time: 36000,
        },
        hp: 30,
        pts: 1272
      }
    ]
  },
  {
    type: BuildingType.Statue,
    requiredHeadquartersLevel: 3,
    levels: [
      {
        cost: {
          wood: 100,
          clay: 100,
          iron: 200,
          provisions: 0,
          time: 120,
        },
        hp: 3,
        pts: 6
      },
      {
        cost: {
          wood: 500,
          clay: 500,
          iron: 1000,
          provisions: 0,
          time: 600,
        },
        hp: 3,
        pts: 7
      },
      {
        cost: {
          wood: 2000,
          clay: 2000,
          iron: 4000,
          provisions: 0,
          time: 3600,
        },
        hp: 4,
        pts: 9
      },
      {
        cost: {
          wood: 5000,
          clay: 5000,
          iron: 10000,
          provisions: 0,
          time: 14400,
        },
        hp: 4,
        pts: 10
      },
      {
        cost: {
          wood: 10000,
          clay: 10000,
          iron: 20000,
          provisions: 0,
          time: 28800,
        },
        hp: 4,
        pts: 12
      }
    ]
  },
  {
    type: BuildingType.Hospital,
    requiredHeadquartersLevel: 4,
    levels: [
      {
        cost: {
          wood: 50,
          clay: 80,
          iron: 30,
          provisions: 2,
          time: 180,
        },
        hp: 3,
        pts: 15
      },
      {
        cost: {
          wood: 100,
          clay: 160,
          iron: 60,
          provisions: 3,
          time: 300,
        },
        hp: 3,
        pts: 18
      },
      {
        cost: {
          wood: 200,
          clay: 320,
          iron: 120,
          provisions: 3,
          time: 600,
        },
        hp: 4,
        pts: 22
      },
      {
        cost: {
          wood: 400,
          clay: 640,
          iron: 240,
          provisions: 4,
          time: 900,
        },
        hp: 4,
        pts: 26
      },
      {
        cost: {
          wood: 1000,
          clay: 1600,
          iron: 600,
          provisions: 5,
          time: 1800,
        },
        hp: 4,
        pts: 31
      },
      {
        cost: {
          wood: 2000,
          clay: 3200,
          iron: 1200,
          provisions: 7,
          time: 3600,
        },
        hp: 5,
        pts: 37
      },
      {
        cost: {
          wood: 4000,
          clay: 6400,
          iron: 2400,
          provisions: 8,
          time: 7200,
        },
        hp: 5,
        pts: 45
      },
      {
        cost: {
          wood: 8000,
          clay: 12000,
          iron: 4800,
          provisions: 11,
          time: 14400,
        },
        hp: 6,
        pts: 54
      },
      {
        cost: {
          wood: 16000,
          clay: 24000,
          iron: 9600,
          provisions: 14,
          time: 43200,
        },
        hp: 6,
        pts: 64
      },
      {
        cost: {
          wood: 32000,
          clay: 48000,
          iron: 19200,
          provisions: 17,
          time: 86400,
        },
        hp: 7,
        pts: 77
      }
    ]
  },
  {
    type: BuildingType.Wall,
    requiredHeadquartersLevel: 5,
    levels: [
      {
        cost: {
          wood: 50,
          clay: 100,
          iron: 20,
          provisions: 5,
          time: 150,
        },
        hp: 3,
        pts: 8
      },
      {
        cost: {
          wood: 60,
          clay: 130,
          iron: 30,
          provisions: 1,
          time: 300,
        },
        hp: 3,
        pts: 10
      },
      {
        cost: {
          wood: 80,
          clay: 160,
          iron: 30,
          provisions: 1,
          time: 900,
        },
        hp: 4,
        pts: 12
      },
      {
        cost: {
          wood: 100,
          clay: 210,
          iron: 40,
          provisions: 1,
          time: 1800,
        },
        hp: 4,
        pts: 14
      },
      {
        cost: {
          wood: 130,
          clay: 260,
          iron: 50,
          provisions: 1,
          time: 3000,
        },
        hp: 4,
        pts: 17
      },
      {
        cost: {
          wood: 160,
          clay: 340,
          iron: 60,
          provisions: 2,
          time: 4800,
        },
        hp: 5,
        pts: 20
      },
      {
        cost: {
          wood: 200,
          clay: 430,
          iron: 80,
          provisions: 2,
          time: 7200,
        },
        hp: 5,
        pts: 24
      },
      {
        cost: {
          wood: 250,
          clay: 550,
          iron: 100,
          provisions: 2,
          time: 10800,
        },
        hp: 6,
        pts: 29
      },
      {
        cost: {
          wood: 320,
          clay: 700,
          iron: 130,
          provisions: 3,
          time: 14400,
        },
        hp: 6,
        pts: 34
      },
      {
        cost: {
          wood: 400,
          clay: 890,
          iron: 160,
          provisions: 3,
          time: 18000,
        },
        hp: 7,
        pts: 41
      },
      {
        cost: {
          wood: 500,
          clay: 1100,
          iron: 200,
          provisions: 3,
          time: 21600,
        },
        hp: 8,
        pts: 50
      },
      {
        cost: {
          wood: 640,
          clay: 1400,
          iron: 250,
          provisions: 4,
          time: 25200,
        },
        hp: 9,
        pts: 59
      },
      {
        cost: {
          wood: 800,
          clay: 1800,
          iron: 320,
          provisions: 5,
          time: 32400,
        },
        hp: 9,
        pts: 71
      },
      {
        cost: {
          wood: 1000,
          clay: 2400,
          iron: 400,
          provisions: 5,
          time: 43200,
        },
        hp: 10,
        pts: 86
      },
      {
        cost: {
          wood: 1300,
          clay: 3000,
          iron: 510,
          provisions: 7,
          time: 50400,
        },
        hp: 11,
        pts: 103
      },
      {
        cost: {
          wood: 1600,
          clay: 3800,
          iron: 640,
          provisions: 8,
          time: 64800,
        },
        hp: 13,
        pts: 123
      },
      {
        cost: {
          wood: 2000,
          clay: 4900,
          iron: 810,
          provisions: 9,
          time: 79200,
        },
        hp: 14,
        pts: 148
      },
      {
        cost: {
          wood: 2500,
          clay: 6200,
          iron: 1000,
          provisions: 10,
          time: 93600,
        },
        hp: 15,
        pts: 177
      },
      {
        cost: {
          wood: 3200,
          clay: 7900,
          iron: 1300,
          provisions: 12,
          time: 111600,
        },
        hp: 17,
        pts: 213
      },
      {
        cost: {
          wood: 4000,
          clay: 10100,
          iron: 1600,
          provisions: 15,
          time: 129600,
        },
        hp: 18,
        pts: 256
      }
    ]
  },
  {
    type: BuildingType.Market,
    requiredHeadquartersLevel: 6,
    levels: [
      {
        cost: {
          wood: 100,
          clay: 100,
          iron: 100,
          provisions: 20,
          time: 300,
        },
        hp: 3,
        pts: 10
      },
      {
        cost: {
          wood: 130,
          clay: 130,
          iron: 130,
          provisions: 3,
          time: 900,
        },
        hp: 3,
        pts: 12
      },
      {
        cost: {
          wood: 160,
          clay: 160,
          iron: 160,
          provisions: 4,
          time: 1500,
        },
        hp: 4,
        pts: 14
      },
      {
        cost: {
          wood: 200,
          clay: 210,
          iron: 200,
          provisions: 5,
          time: 2100,
        },
        hp: 4,
        pts: 17
      },
      {
        cost: {
          wood: 250,
          clay: 260,
          iron: 250,
          provisions: 5,
          time: 3000,
        },
        hp: 4,
        pts: 21
      },
      {
        cost: {
          wood: 320,
          clay: 340,
          iron: 320,
          provisions: 7,
          time: 4200,
        },
        hp: 5,
        pts: 25
      },
      {
        cost: {
          wood: 400,
          clay: 430,
          iron: 400,
          provisions: 7,
          time: 5400,
        },
        hp: 5,
        pts: 30
      },
      {
        cost: {
          wood: 500,
          clay: 550,
          iron: 500,
          provisions: 9,
          time: 6600,
        },
        hp: 6,
        pts: 36
      },
      {
        cost: {
          wood: 640,
          clay: 700,
          iron: 640,
          provisions: 10,
          time: 7800,
        },
        hp: 6,
        pts: 43
      },
      {
        cost: {
          wood: 800,
          clay: 890,
          iron: 800,
          provisions: 12,
          time: 9000,
        },
        hp: 7,
        pts: 52
      },
      {
        cost: {
          wood: 1000,
          clay: 1100,
          iron: 1000,
          provisions: 14,
          time: 10800,
        },
        hp: 8,
        pts: 62
      },
      {
        cost: {
          wood: 1300,
          clay: 1400,
          iron: 1300,
          provisions: 16,
          time: 12600,
        },
        hp: 9,
        pts: 74
      },
      {
        cost: {
          wood: 1600,
          clay: 1800,
          iron: 1600,
          provisions: 20,
          time: 14400,
        },
        hp: 9,
        pts: 89
      },
      {
        cost: {
          wood: 2000,
          clay: 2400,
          iron: 2000,
          provisions: 22,
          time: 16200,
        },
        hp: 10,
        pts: 107
      },
      {
        cost: {
          wood: 2500,
          clay: 3000,
          iron: 2500,
          provisions: 26,
          time: 18000,
        },
        hp: 11,
        pts: 128
      },
      {
        cost: {
          wood: 3200,
          clay: 3800,
          iron: 3200,
          provisions: 31,
          time: 21000,
        },
        hp: 13,
        pts: 154
      },
      {
        cost: {
          wood: 4000,
          clay: 4900,
          iron: 4000,
          provisions: 36,
          time: 24000,
        },
        hp: 14,
        pts: 185
      },
      {
        cost: {
          wood: 5100,
          clay: 6200,
          iron: 5100,
          provisions: 42,
          time: 28800,
        },
        hp: 15,
        pts: 222
      },
      {
        cost: {
          wood: 6400,
          clay: 7900,
          iron: 6400,
          provisions: 49,
          time: 34200,
        },
        hp: 17,
        pts: 266
      },
      {
        cost: {
          wood: 8100,
          clay: 10100,
          iron: 8100,
          provisions: 57,
          time: 39600,
        },
        hp: 18,
        pts: 319
      },
      {
        cost: {
          wood: 10200,
          clay: 12900,
          iron: 10200,
          provisions: 67,
          time: 45000,
        },
        hp: 20,
        pts: 383
      },
      {
        cost: {
          wood: 12800,
          clay: 16400,
          iron: 12800,
          provisions: 79,
          time: 54000,
        },
        hp: 22,
        pts: 460
      },
      {
        cost: {
          wood: 16100,
          clay: 21000,
          iron: 16100,
          provisions: 92,
          time: 66600,
        },
        hp: 24,
        pts: 552
      },
      {
        cost: {
          wood: 20300,
          clay: 26700,
          iron: 20300,
          provisions: 107,
          time: 81000,
        },
        hp: 27,
        pts: 662
      },
      {
        cost: {
          wood: 25600,
          clay: 34100,
          iron: 25600,
          provisions: 126,
          time: 100800,
        },
        hp: 30,
        pts: 795
      }
    ]
  },
  {
    type: BuildingType.Tavern,
    requiredHeadquartersLevel: 8,
    levels: [
      {
        cost: {
          wood: 150,
          clay: 100,
          iron: 110,
          provisions: 2,
          time: 300,
        },
        hp: 3,
        pts: 15
      },
      {
        cost: {
          wood: 200,
          clay: 130,
          iron: 140,
          provisions: 3,
          time: 600,
        },
        hp: 3,
        pts: 18
      },
      {
        cost: {
          wood: 250,
          clay: 170,
          iron: 180,
          provisions: 3,
          time: 1200,
        },
        hp: 4,
        pts: 22
      },
      {
        cost: {
          wood: 330,
          clay: 230,
          iron: 230,
          provisions: 4,
          time: 2400,
        },
        hp: 4,
        pts: 26
      },
      {
        cost: {
          wood: 430,
          clay: 300,
          iron: 300,
          provisions: 6,
          time: 3600,
        },
        hp: 4,
        pts: 31
      },
      {
        cost: {
          wood: 560,
          clay: 400,
          iron: 380,
          provisions: 7,
          time: 6000,
        },
        hp: 5,
        pts: 37
      },
      {
        cost: {
          wood: 720,
          clay: 530,
          iron: 480,
          provisions: 9,
          time: 8400,
        },
        hp: 5,
        pts: 45
      },
      {
        cost: {
          wood: 940,
          clay: 700,
          iron: 620,
          provisions: 11,
          time: 12600,
        },
        hp: 6,
        pts: 54
      },
      {
        cost: {
          wood: 1200,
          clay: 900,
          iron: 790,
          provisions: 15,
          time: 18000,
        },
        hp: 6,
        pts: 64
      },
      {
        cost: {
          wood: 1600,
          clay: 1200,
          iron: 1000,
          provisions: 18,
          time: 25200,
        },
        hp: 7,
        pts: 77
      },
      {
        cost: {
          wood: 2100,
          clay: 1600,
          iron: 1300,
          provisions: 23,
          time: 32400,
        },
        hp: 8,
        pts: 93
      },
      {
        cost: {
          wood: 2700,
          clay: 2100,
          iron: 1700,
          provisions: 30,
          time: 39600,
        },
        hp: 9,
        pts: 111
      },
      {
        cost: {
          wood: 3500,
          clay: 2800,
          iron: 2100,
          provisions: 37,
          time: 50400,
        },
        hp: 9,
        pts: 134
      },
      {
        cost: {
          wood: 4500,
          clay: 3700,
          iron: 2700,
          provisions: 48,
          time: 64800,
        },
        hp: 10,
        pts: 160
      },
      {
        cost: {
          wood: 5900,
          clay: 4900,
          iron: 3500,
          provisions: 60,
          time: 86400,
        },
        hp: 11,
        pts: 193
      }
    ]
  },
  {
    type: BuildingType.Academy,
    requiredHeadquartersLevel: 20,
    levels: [
      {
        cost: {
          wood: 60000,
          clay: 75000,
          iron: 60000,
          provisions: 80,
          time: 36000,
        },
        hp: 500,
        pts: 512
      }
    ]
  },
  {
    type: BuildingType.HallOfOrders,
    requiredHeadquartersLevel: 25,
    levels: [
      {
        cost: {
          wood: 35000,
          clay: 50000,
          iron: 30000,
          provisions: 11
          , time: 3600,
        },
        hp: 20,
        pts: 75
      },
      {
        cost: {
          wood: 42000,
          clay: 58500,
          iron: 36900,
          provisions: 14,
          time: 7200,
        },
        hp: 22,
        pts: 90
      },
      {
        cost: {
          wood: 50400,
          clay: 68445,
          iron: 45387,
          provisions: 17,
          time: 10800,
        },
        hp: 24,
        pts: 108
      },
      {
        cost: {
          wood: 60480,
          clay: 80081,
          iron: 55826,
          provisions: 21,
          time: 18000,
        },
        hp: 27,
        pts: 130
      },
      {
        cost: {
          wood: 72576,
          clay: 93694,
          iron: 68666,
          provisions: 28,
          time: 28800,
        },
        hp: 29,
        pts: 156
      },
      {
        cost: {
          wood: 87091,
          clay: 109622,
          iron: 84459,
          provisions: 35,
          time: 43200,
        },
        hp: 32,
        pts: 187
      },
      {
        cost: {
          wood: 104509,
          clay: 128258,
          iron: 103885,
          provisions: 45,
          time: 57600,
        },
        hp: 35,
        pts: 224
      },
      {
        cost: {
          wood: 125411,
          clay: 150062,
          iron: 127778,
          provisions: 56,
          time: 75600,
        },
        hp: 39,
        pts: 296
      },
      {
        cost: {
          wood: 150494,
          clay: 175573,
          iron: 157167,
          provisions: 72,
          time: 100800,
        },
        hp: 43,
        pts: 322
      },
      {
        cost: {
          wood: 180592,
          clay: 205420,
          iron: 193316,
          provisions: 92,
          time: 129600,
        },
        hp: 47,
        pts: 387
      }
    ]
  }
];

export const buildingsMap: { [key in BuildingType]?: Building } = buildings.reduce((acc, curr) => ({ ...acc, [curr.type]: curr }), {});
