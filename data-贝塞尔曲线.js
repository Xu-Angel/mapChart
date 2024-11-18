/**
 * 预设的路线坐标
 */
const linesPoints = {
  1: [
    { x: 521, y: 1165 },
    { x: 711, y: 1165 },
    { x: 883, y: 1165 },
    { x: 954, y: 1057 },
    { x: 1009, y: 910 },
    { x: 1208, y: 866 },
    { x: 1453, y: 788 },
    { x: 1686, y: 788 },
    { x: 1886, y: 788 },
    { x: 2091, y: 788 },
    { x: 2321, y: 788 },
    { x: 2530, y: 788 },
    { x: 2746, y: 896 },
    { x: 2928, y: 1025 },
    { x: 3130, y: 1093 },
    { x: 3335, y: 1093 },
    { x: 3502, y: 1238 },
    { x: 3502, y: 1369 },
  ],
  2: [
    { x: 710.5, y: 766 },
    { x: 886.5, y: 867 },
    { x: 1049, y: 984 },
    { x: 1275, y: 1020 },
    { x: 1507, y: 1020 },
    { x: 1707, y: 1020 },
    { x: 1907, y: 1020 },
    { x: 2162, y: 1020 },
    { x: 2403, y: 1065 },
    { x: 2564, y: 1093 },
    { x: 2775, y: 1169 },
    { x: 2933, y: 1213 },
    { x: 3100, y: 1213 },
  ],
  3: [
    { x: 1836, y: 126 },
    { x: 1836, y: 250 },
    { x: 1836, y: 387 },
    { x: 1836, y: 510 },
    { x: 1888, y: 650 },
    { x: 1994, y: 910 },
    { x: 1994, y: 1143 },
    { x: 1994, y: 1298 },
    { x: 1994, y: 1446 },
    { x: 1994, y: 1724 },
    { x: 2031, y: 1954 },
    { x: 2125, y: 2052 },
  ],
  4: [
    { x: 274, y: 505.5 },
    { x: 446, y: 505.5 },
    { x: 594, y: 505.5 },
    { x: 855, y: 438.5 },
    { x: 994, y: 534.5 },
    { x: 1194, y: 613.5 },
    { x: 1396, y: 688.5 },
    { x: 1566, y: 880.5 },
    { x: 1566, y: 1175.5 },
    { x: 1566, y: 1313.5 },
    { x: 1663, y: 1458.5 },
    { x: 1875, y: 1546.5 },
    { x: 2175, y: 1618.5 },
    { x: 2450, y: 1618.5 },
    { x: 2723, y: 1618.5 },
    { x: 2998, y: 1618.5 },
    { x: 3272, y: 1618.5 },
  ],
  5: [
    { x: 793, y: 1726 },
    { x: 933, y: 1650 },
    { x: 1018, y: 1539 },
    { x: 1099, y: 1387 },
    { x: 1222, y: 1300 },
    { x: 1457, y: 1246 },
    { x: 1753, y: 1217 },
    { x: 2199, y: 1185 },
    { x: 2426, y: 1185 },
    { x: 2818, y: 1061 },
    { x: 3133, y: 1005 },
    { x: 3257, y: 918 },
    { x: 3512, y: 866 },
  ],
  6: [
    { x: 2973.5, y: 314 },
    { x: 2972.5, y: 396 },
    { x: 2899.5, y: 518 },
    { x: 2755.5, y: 562 },
    { x: 2596.5, y: 562 },
    { x: 2452.5, y: 687 },
    { x: 2505.5, y: 929 },
    { x: 2504.5, y: 1014 },
    { x: 2504.5, y: 1284 },
    { x: 2360.5, y: 1432 },
    { x: 2299.5, y: 1752 },
  ],
  7: [
    { x: 520, y: 183 },
    { x: 690, y: 183 },
    { x: 837, y: 183 },
    { x: 1039, y: 183 },
    { x: 1241, y: 183 },
    { x: 1391, y: 228 },
    { x: 1523, y: 277 },
    { x: 1659, y: 277 },
    { x: 1983, y: 329 },
  ],
  8: [
    { x: 272, y: 1447 },
    { x: 423, y: 1448 },
    { x: 591, y: 1501 },
    { x: 781, y: 1501 },
    { x: 1149, y: 1560 },
    { x: 1349, y: 1560 },
    { x: 1549, y: 1560 },
    { x: 1789, y: 1633 },
  ],
  9: [
    { x: 667, y: 1363 },
    { x: 667, y: 1446 },
    { x: 734, y: 1601 },
    { x: 987, y: 1740 },
    { x: 1163, y: 1865 },
    { x: 1363, y: 1954 },
    { x: 1548, y: 1955 },
  ],
  10: [
    { x: 3307, y: 1999 },
    { x: 3152, y: 1914 },
    { x: 2915, y: 1844 },
    { x: 2788, y: 1738 },
    { x: 2788, y: 1551 },
    { x: 2788, y: 1450 },
    { x: 2788, y: 1347 },
    { x: 2698, y: 1236 },
  ],
  11: [
    { x: 3702, y: 721.5 },
    { x: 3551, y: 721.5 },
    { x: 3487, y: 664.5 },
    { x: 3334, y: 602.5 },
    { x: 3159, y: 602.5 },
    { x: 2961, y: 660.5 },
    { x: 2826, y: 701.5 },
    { x: 2685, y: 701.5 },
    { x: 2325, y: 924.5 },
    { x: 2169, y: 1115.5 },
    { x: 2095, y: 1293.5 },
    { x: 1877, y: 1366.5 },
  ],
  12: [
    { x: 2470, y: 220 },
    { x: 2470, y: 301 },
    { x: 2470, y: 392 },
    { x: 2413, y: 538 },
    { x: 2302, y: 635 },
    { x: 2218, y: 878 },
  ],
  13: [
    { x: 3028, y: 2058 },
    { x: 2825, y: 2058 },
    { x: 2597, y: 1986 },
    { x: 2381, y: 1858 },
    { x: 2190, y: 1858 },
    { x: 1857, y: 1858 },
    { x: 1686, y: 1858 },
    { x: 1456, y: 1750 },
    { x: 1456, y: 1661 },
    { x: 1456, y: 1500 },
    { x: 1385, y: 1419 },
  ],
  14: [
    { x: 3695, y: 212 },
    { x: 3557, y: 313 },
    { x: 3461, y: 409 },
    { x: 3364, y: 507 },
    { x: 3169, y: 699 },
    { x: 3080, y: 790 },
    { x: 2878, y: 820 },
  ],
  15: [
    { x: 2232, y: 152 },
    { x: 2232, y: 257 },
    { x: 2165, y: 388 },
    { x: 2030, y: 440 },
    { x: 1708, y: 440 },
    { x: 1544, y: 440 },
    { x: 1394, y: 480 },
  ],
  16: [
    { x: 180, y: 884 },
    { x: 376, y: 884 },
    { x: 529, y: 803 },
    { x: 529, y: 697 },
    { x: 694, y: 579 },
    { x: 875, y: 579 },
    { x: 1319, y: 579 },
    { x: 1497, y: 579 },
    { x: 1698, y: 579 },
  ],
  17: [
    { x: 3696, y: 1967 },
    { x: 3696, y: 1837 },
    { x: 3540, y: 1699 },
    { x: 3331, y: 1699 },
    { x: 3033, y: 1547 },
    { x: 2944, y: 1458 },
    { x: 2647, y: 1401 },
  ],
  18: [
    { x: 373, y: 1983 },
    { x: 544, y: 1984 },
    { x: 678, y: 1937 },
    { x: 774, y: 1840 },
    { x: 943, y: 1789 },
    { x: 1335, y: 1789 },
    { x: 1630, y: 1789 },
    { x: 1882, y: 1688 },
  ],
  19: [
    { x: 3404.5, y: 76 },
    { x: 3273.5, y: 168 },
    { x: 3106.5, y: 246 },
    { x: 2945.5, y: 246 },
    { x: 2768.5, y: 304 },
    { x: 2674.5, y: 397 },
    { x: 2559.5, y: 448 },
    { x: 2263.5, y: 450 },
  ],
  20: [
    { x: 129, y: 1165 },
    { x: 249, y: 1085 },
    { x: 418, y: 993 },
    { x: 563, y: 993 },
    { x: 698, y: 937 },
    { x: 868, y: 770 },
    { x: 1098, y: 728 },
    { x: 1263, y: 728 },
  ],
}

/**
 * 获取基准拿边的起点source
 * 用于生成折线大的path拐的次数
 * 或者自定义边的path
 */
const edgePoitsMap = {
  'line-1-node-2': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x + cr, y: startPoint.y + cr },
    { x: 928, y: startPoint.y + cr }, //折点
    { x: endPoint.x, y: 1150 }, //折点
    endPoint,
    60,
  ],
  'line-1-node-3': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x, y: startPoint.y },
    { x: 955, y: 970 }, //折点
    { x: 969, y: 942 }, //折点
    { x: endPoint.x - cr, y: endPoint.y - cr / 2 },
    90,
  ],
  'line-1-node-4': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x - cr / 2, y: startPoint.y - cr / 2 },
    { x: 1068, y: 872 }, //折点
    { x: 1088, y: 867 }, //折点
    { x: endPoint.x, y: endPoint.y },
    70,
  ],
  'line-1-node-5': ({ startPoint, endPoint, cr = 10 }) => [
    [
      { x: startPoint.x - cr, y: startPoint.y },
      { x: 1276, y: 865 }, //折点
      { x: 1297, y: 859 }, //折点
      { x: 1375, y: 797 },
      80,
    ],
    [
      { x: 1297, y: 859 },
      { x: 1375, y: 797 }, //折点
      { x: 1401, y: 788 }, //折点
      { x: endPoint.x, y: endPoint.y },
      110,
    ],
  ],
  'line-1-node-11': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x - cr / 2, y: startPoint.y },
    { x: 2585, y: 788 }, //折点
    { x: 2608, y: 791 }, //折点
    { x: endPoint.x + cr / 2, y: endPoint.y - cr / 2 },
    70,
  ],
  'line-1-node-12': ({ startPoint, endPoint, cr = 10 }) => [
    {
      x: startPoint.x - cr,
      y: startPoint.y,
    },
    {
      x: endPoint.x + cr / 2,
      y: endPoint.y - cr / 2,
    },
  ],
  'line-1-node-13': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x - cr / 2, y: startPoint.y + cr / 2 },
    { x: 3008, y: 1083 }, //折点
    { x: 3038, y: endPoint.y }, //折点
    { x: endPoint.x + cr / 2, y: endPoint.y },
    110,
  ],
  //line-2-start
  'line-2-node-0': ({ startPoint, endPoint, cr = 10 }) => [
    {
      x: startPoint.x - cr,
      y: startPoint.y + cr / 2 + 3,
    },
    {
      x: endPoint.x + cr / 2,
      y: endPoint.y - cr / 2,
    },
  ],
  'line-2-node-1': ({ startPoint, endPoint, cr = 10 }) => [
    {
      x: startPoint.x - cr,
      y: startPoint.y,
    },
    {
      x: endPoint.x + cr / 2,
      y: endPoint.y - cr / 2,
    },
  ],
  'line-2-node-2': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x - cr / 2, y: startPoint.y + cr / 2 },
    { x: 1090, y: 1013.5 }, //折点
    { x: 1108, y: endPoint.y }, //折点
    { x: endPoint.x + cr / 2, y: endPoint.y },
    50,
  ],
  //line3-start
  'line-3-node-3': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x, y: startPoint.y },
    { x: startPoint.x, y: 584 }, //折点
    { x: 1843, y: 605 }, //折点
    { x: endPoint.x - cr, y: endPoint.y },
    80,
  ],
  'line-3-node-4': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x + cr / 2, y: startPoint.y - cr / 2 },
    { x: 1977, y: 738 }, //折点
    { x: 1991, y: 767 }, //折点
    { x: endPoint.x, y: endPoint.y },
    125,
  ],
  //line4-start
  'line-4-node-2': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x - cr / 2, y: startPoint.y },
    { x: 757, y: 394 }, //折点
    { x: 789, y: 394 }, //折点
    { x: endPoint.x + cr / 2, y: endPoint.y - cr / 2 },
    210,
  ],
  'line-4-node-3': ({ startPoint, endPoint, cr = 10 }) => [
    {
      x: startPoint.x - cr,
      y: startPoint.y,
    },
    {
      x: endPoint.x + cr / 2,
      y: endPoint.y - cr / 2,
    },
  ],
  'line-4-node-4': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x - cr / 2, y: startPoint.y + cr / 2 },
    { x: 1094, y: 607 }, //折点
    { x: 1117, y: 615 }, //折点
    { x: endPoint.x + cr / 2, y: endPoint.y },
    130,
  ],
  'line-4-node-5': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x, y: startPoint.y },
    { x: 1275, y: startPoint.y }, //折点
    { x: 1295, y: 619 }, //折点
    { x: endPoint.x + cr / 2, y: endPoint.y - cr / 2 },
    80,
  ],
  'line-4-node-6': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x + cr / 2, y: startPoint.y - cr },
    { x: 1557.5, y: 802.5 }, //折点
    { x: endPoint.x, y: 823.5 }, //折点
    { x: endPoint.x, y: endPoint.y - cr / 2 },
    210,
  ],
  'line-4-node-9': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x, y: startPoint.y },
    { x: startPoint.x, y: 1381 }, //折点
    { x: 1579, y: 1400 }, //折点
    { x: endPoint.x - cr / 2, y: endPoint.y + cr / 2 },
    70,
  ],
  'line-4-node-10': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x - cr / 2, y: startPoint.y + cr / 2 },
    { x: 1773, y: 1538 }, //折点
    { x: 1801, y: 1548 }, //折点
    { x: endPoint.x + cr / 2, y: endPoint.y },
    140,
  ],
  'line-4-node-11': ({ startPoint, endPoint, cr = 10 }) => [
    [
      { x: startPoint.x - cr, y: startPoint.y },
      { x: 1941, y: startPoint.y }, //折点
      { x: 1957, y: 1551 }, //折点
      { x: 2043, y: 1610 },
      70,
    ],
    [
      { x: 1957, y: 1551 },
      { x: 2046, y: 1612 }, //折点
      { x: 2068, y: 1619 }, //折点
      { x: endPoint.x, y: endPoint.y },
      110,
    ],
  ],
  // line-5-start
  'line-5-node-0': ({ startPoint, endPoint, cr = 10 }) => [
    {
      x: startPoint.x - cr,
      y: startPoint.y - cr,
    },
    {
      x: endPoint.x + cr / 2,
      y: endPoint.y + cr / 2,
    },
  ],
  'line-5-node-1': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x, y: startPoint.y + cr },
    { x: 1008, y: 1599 }, //折点
    { x: 1016, y: 1579 }, //折点
    { x: endPoint.x - 1, y: endPoint.y - cr },
    100,
  ],
  'line-5-node-2': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x, y: startPoint.y + cr },
    { x: 1017.5, y: 1461 }, //折点
    { x: 1030, y: 1438 }, //折点
    { x: endPoint.x - cr / 2, y: endPoint.y - cr / 2 },
    90,
  ],
  'line-5-node-3': ({ startPoint, endPoint, cr = 10 }) => [
    {
      x: startPoint.x - cr / 2,
      y: startPoint.y - cr / 2,
    },
    {
      x: endPoint.x + cr / 2,
      y: endPoint.y + cr / 2,
    },
  ],
  'line-5-node-4': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x - cr / 2, y: startPoint.y - cr / 2 },
    { x: 1293.5, y: 1252 }, //折点
    { x: 1313.5, y: endPoint.y }, //折点
    { x: endPoint.x, y: endPoint.y },
    90,
  ],
  'line-5-node-5': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x, y: startPoint.y },
    { x: 1670.5, y: startPoint.y }, //折点
    { x: 1700.5, y: startPoint.y }, //折点
    { x: endPoint.x + cr, y: endPoint.y },
    40,
  ],
  'line-5-node-6': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x - cr / 2, y: startPoint.y - cr / 2 },
    { x: 1800, y: endPoint.y }, //折点
    { x: 1825, y: endPoint.y }, //折点
    { x: endPoint.x, y: endPoint.y },
    50,
  ],
  'line-5-node-8': ({ startPoint, endPoint, cr = 10 }) => [
    [
      { x: startPoint.x - cr, y: startPoint.y },
      { x: 2541, y: startPoint.y }, //折点
      { x: 2564, y: 1178 }, //折点
      { x: 2608, y: 1143 },
      130,
    ],
    [
      { x: 2608, y: 1143 },
      { x: 2701, y: 1069 }, //折点
      { x: 2721, y: endPoint.y }, //折点
      { x: endPoint.x, y: endPoint.y },
      130,
    ],
  ],
  'line-5-node-9': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x - cr / 2, y: startPoint.y },
    { x: 3040, y: startPoint.y }, //折点
    { x: 3070, y: 1048 }, //折点
    { x: endPoint.x + cr / 2, y: endPoint.y + cr / 2 - 1 },
    230,
  ],
  'line-5-node-10': ({ startPoint, endPoint, cr = 10 }) => [
    {
      x: startPoint.x - cr / 2,
      y: startPoint.y - cr / 2,
    },
    {
      x: endPoint.x + cr / 2,
      y: endPoint.y + cr / 2,
    },
  ],
  'line-5-node-11': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x - cr / 2, y: startPoint.y - cr / 2 },
    { x: 3321, y: 874.5 }, //折点
    { x: 3342, y: endPoint.y }, //折点
    { x: endPoint.x + cr / 2, y: endPoint.y },
    80,
  ],
  // line-6-start
  'line-6-node-0': ({ startPoint, endPoint, cr = 10 }) => [
    {
      x: startPoint.x,
      y: startPoint.y,
    },
    {
      x: endPoint.x,
      y: endPoint.y,
    },
  ],
  'line-6-node-1': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x, y: startPoint.y },
    { x: startPoint.x, y: 447 }, //折点
    { x: 2958.5, y: 479 }, //折点
    { x: endPoint.x + cr, y: endPoint.y + cr },
    60,
  ],
  'line-6-node-2': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x + cr / 2, y: startPoint.y + cr / 2 },
    { x: 2850.5, y: 554 }, //折点
    { x: 2823, y: endPoint.y }, //折点
    { x: endPoint.x - cr / 2, y: endPoint.y },
    70,
  ],
  'line-6-node-4': ({ startPoint, endPoint, cr = 10 }) => [
    [
      { x: startPoint.x, y: startPoint.y },
      { x: 2544, y: startPoint.y }, //折点
      { x: 2517.5, y: 576 }, //折点
      { x: 2499.5, y: 588 },
      50,
    ],
    [
      { x: 2499.5, y: 588 },
      { x: 2472.5, y: 607 }, //折点
      { x: endPoint.x - cr, y: 627 }, //折点
      { x: endPoint.x - cr, y: endPoint.y - cr },
      55,
    ],
  ],
  'line-6-node-5': ({ startPoint, endPoint, cr = 10 }) => [
    [
      { x: startPoint.x, y: startPoint.y },
      { x: startPoint.x, y: 750 }, //折点
      { x: startPoint.x, y: 780 }, //折点
      { x: 2483, y: 825 },
      45,
    ],
    [
      { x: 2483, y: 825 },
      { x: 2490, y: 835 }, //折点
      { x: endPoint.x, y: 858 }, //折点
      { x: endPoint.x, y: endPoint.y },
      40,
    ],
  ],
  'line-6-node-6': ({ startPoint, endPoint, cr = 10 }) => [
    {
      x: startPoint.x,
      y: startPoint.y,
    },
    {
      x: endPoint.x,
      y: endPoint.y,
    },
  ],
  'line-6-node-8': ({ startPoint, endPoint, cr = 10 }) => [
    [
      { x: startPoint.x - cr, y: startPoint.y },
      { x: startPoint.x - cr, y: 1353 }, //折点
      { x: 2488.5, y: 1386 }, //折点
      { x: 2452.5, y: 1386 },
      130,
    ],
    [
      { x: 2452.5, y: 1386 },
      { x: 2439.5, y: 1386 }, //折点
      { x: 2416.5, y: 1396 }, //折点
      { x: endPoint.x, y: endPoint.y },
      130,
    ],
  ],
  'line-6-node-9': ({ startPoint, endPoint, cr = 10 }) => [
    { x: startPoint.x - cr, y: startPoint.y },
    { x: 2316.5, y: 1465 }, //折点
    { x: 2299.5, y: 1497 }, //折点
    { x: endPoint.x, y: endPoint.y },
    130,
  ],
}
/**
 *  获得边类型
 * @param {*} source
 * @param {*} target
 * @returns
 */
function getEdgeType(source, target, isHideNode) {
  function calculateDirection(source, target) {
    const sourceX = source.x
    const sourceY = source.y
    const targetX = target.x
    const targetY = target.y

    // 水平线
    if (targetX === sourceX) {
      // 垂直线
      return targetY > sourceY ? 'S' : 'N'
      // return 'DIR'
    } else if (targetY === sourceY) {
      return targetX > sourceX ? 'E' : 'W'
    } else if (targetX > sourceX && targetY > sourceY) {
      // 东南方向
      return 'ES'
    } else if (targetX < sourceX && targetY > sourceY) {
      // 西南方向
      return 'WS'
    } else if (targetX < sourceX && targetY < sourceY) {
      // 西北方向
      return 'WN'
    } else if (targetX > sourceX && targetY < sourceY) {
      // 东北方向
      return 'EN'
    }
  }
  const directions = {
    E: 'Line', // 东
    S: 'Line', // 南
    W: 'Line', // 西
    N: 'Line', // 北
    ES: 'brokenLine', // 东南
    EN: 'brokenLine', // 东北
    WS: 'brokenLine', // 西南
    WN: 'brokenLine', // 西北
    // ES: 'polyline', // 东南
    // EN: 'polyline', // 东北
    // WS: 'polyline', // 西南
    // WN: 'polyline', // 西北
  }
  const direction = calculateDirection(source, target)
  return directions[direction]
}
function calculateControlPoint(start, end, radius) {
  const dx = end.x - start.x
  const dy = end.y - start.y
  const length = Math.sqrt(dx * dx + dy * dy)
  const controlX = start.x + (dx * radius) / length
  const controlY = start.y + (dy * radius) / length
  return { x: controlX, y: controlY }
}
/**
 *  点 B 和 E 处使用贝塞尔曲线进行圆滑处理，分两段来生成路径：从 A 到 B 使用一段曲线，从 E 到 D 使用另一段曲线。
 * @param {*} A 直线的起点
 * @param {*} B A直线上的折点
 * @param {*} E D直线上的折点
 * @param {*} D 直线的终点
 * @param {*} radius
 * @returns {array} path
 */
function generatePath(A, B, E, D, radius) {
  // 计算控制点
  const controlPoint1 = calculateControlPoint(A, B, radius)
  const controlPoint2 = calculateControlPoint(E, D, radius)
  // 构建路径
  const path = [
    ['M', A.x, A.y], // 移动到起点 A
    ['L', B.x, B.y], // 直线到第一个折点 B
    ['Q', controlPoint1.x, controlPoint1.y, E.x, E.y], // 曲线到折点 E
    ['Q', controlPoint2.x, controlPoint2.y, D.x, D.y], // 曲线到终点 D
    // ['L', E.x, E.y], // 待开放添加一条长线连上去
    // ['L', D.x, D.y],
  ]
  return path
}
function parsePath(arr = []) {
  if (Array.isArray(arr[0])) {
    const p1 = generatePath(...arr[0])
    const p2 = generatePath(...arr[1])
    return [...p1, ...p2]
  } else {
    if (arr.length === 2) {
      return arr
    } else {
      return generatePath(...arr)
    }
  }
}
// 折线
G6.registerEdge('brokenLine', {
  draw(cfg, group) {
    const startPoint = cfg.startPoint
    const endPoint = cfg.endPoint
    const source = cfg.source
    let path = []
    if (edgePoitsMap[source] && edgePoitsMap[source](cfg)) {
      // 通过map获取
      path = parsePath(edgePoitsMap[source](cfg))
    }
    if (path.length !== 0) {
      console.log(path, 'ppp')
    }
    const shape = group.addShape('path', {
      attrs: {
        stroke: cfg.color,
        path:
          Array.isArray(path) && path.length === 2 && !Array.isArray(path[0])
            ? [
                ['M', path[0].x, path[0].y],
                ['L', path[1].x, path[1].y],
              ]
            : startPoint.type === 'rect'
            ? [
                ['M', startPoint.x, startPoint.y],
                ['L', endPoint.x, endPoint.y],
              ]
            : [...path],
        lineWidth: 5,
      },
      label: '边的标签文字',
      labelCfg: {
        refX: 10, // 文本在 x 方向偏移量
        refY: 10, // 文本在 y 方向偏移量
        style: {
          fill: '#595959',
        },
      },
      // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
      name: 'brokenLine',
    })
    return shape
  },
})
// 路线颜色
const colors = [
  '#3F92FE',
  '#00C29F',
  '#5369C0',
  '#29C4D9',
  '#89CA73',
  '#2D7B9C',
  '#3B5F80',
  '#7BB04E',
  '#1C65C6',
  '#4E4C87',
  '#6AB4DA',
  '#7E8CDB',
  '#57A476',
  '#36416C',
  '#7EABD1',
  '#467341',
  '#A4CD3F',
  '#5E3831',
  '#42AA21',
  '#9C9757',
]
/**
 * 获取源节点该启用哪个节点给目标节点连接边
 * @param {*} node1
 * @param {*} node2
 * @returns
 */
function findBestAnchorPoint(node1, node2) {
  const x1 = node1.x
  const y1 = node1.y
  const x2 = node2.x
  const y2 = node2.y

  // 计算向量
  const dx = x2 - x1
  const dy = y2 - y1

  // 归一化向量
  const length = Math.sqrt(dx * dx + dy * dy)
  const nx = dx / length
  const ny = dy / length

  // 找到与向量最接近的锚点
  let bestAnchor = [0.5, 0] // 默认为下
  let maxDotProduct = -Infinity

  const anchorPoints = [
    [0, 0.5], // 左
    [0.5, 1], // 上
    [1, 0.5], // 右
    [0.5, 0], // 下
  ]

  for (const [ax, ay] of anchorPoints) {
    const dotProduct = ax * nx + ay * ny
    if (dotProduct > maxDotProduct) {
      maxDotProduct = dotProduct
      bestAnchor = [ax, ay]
    }
  }

  return {
    anchor: bestAnchor,
    // 计算实际的锚点位置
    position: {
      x: x1 + bestAnchor[0] * length,
      y: y1 + bestAnchor[1] * length,
    },
  }
}

// 严格按照预设路线和每条预设路线的节点数来生成画布数据
function generateDataForLines() {
  const nodes = []
  const edges = []
  const nodeStyle = (idx) => ({
    fill: '#fff',
    stroke: colors[idx], // 描边颜色
    lineWidth: 3, //描边宽度
    fontSize: 12,
    size: [[0, 1].includes(idx) ? 120 : 20, 20],
  })
  Object.keys(linesPoints).forEach((line) => {
    const points = linesPoints[line]
    const idx = line - 1
    points.forEach((point, index) => {
      const nodeId = `line-${line}-node-${index}`

      const nodeObj = {
        id: nodeId,
        label: index === 0 ? line : `line-${line}-node-${index}`,
        type: index === 0 ? 'rect' : 'circle',
        style: {
          ...nodeStyle(idx),
          stroke: colors[idx],
        },
        // 该边连入 source 点的第 0 个 anchorPoint，
        // 因为有圆形  所以只用标准四向
        anchorPoints: [
          // [0, 1], // 左下
          [0, 0.5], // 左
          // [0, 0], // 左上
          [0.5, 0], //上
          // [1, 0], // 右上
          [1, 0.5], // 右
          // [1, 1], //右下
          [0.5, 1], // 下
        ],
        x: point.x,
        y: point.y,
        sourceAnchor: 3,
      }
      if (index === 0) {
        //生成完毕，给第一个方块节点设置锚点数据
        const bestAnchorInfo = findBestAnchorPoint(points[0], points[1])
        // 该节点可选的连接点集合，该点有两个可选的连接点 用于给子节点做连接
        // console.log(bestAnchorInfo.anchor, points[0], points[1])
        nodeObj.anchorPoints = [bestAnchorInfo.anchor]
      }
      nodes.push(nodeObj)

      if (index > 0) {
        if (`line-${line}-node-${index - 1}` === 'line-1-node-2') {
          edges.push({
            source: `line-${line}-node-${index - 1}`,
            target: nodeId,
            type: 'polyline',
            color: colors[idx],
            style: {
              lineWidth: 6,
              radius: 30,
              offset: 50,
            },
            controlPoints: [
              // { x: 931, y: 1170 },
              { x: 956, y: 1169 },
              // { x: 954, y: 1152 },
            ],
          })
        } else if (`line-${line}-node-${index - 1}` === 'line-1-node-5') {
          edges.push({
            source: `line-${line}-node-${index - 1}`,
            target: nodeId,
            type: 'polyline',
            color: colors[idx],
            style: {
              lineWidth: 6,
              radius: 30,
              offset: 50,
            },
            controlPoints: [
              { x: 1289, y: 866 },
              { x: 1390, y: 786 },
            ],
          })
        } else {
          edges.push({
            source: `line-${line}-node-${index - 1}`,
            target: nodeId,
            type: getEdgeType(
              nodes.find((n) => n.id === `line-${line}-node-${index - 1}`),
              nodes.find((n) => n.id === nodeId)
            ),
            color: colors[idx],
            style: {
              lineWidth: 6,
            },
          })
        }
      }
    })
  })

  return { nodes, edges }
}
const { nodes, edges } = generateDataForLines()
var data = {
  nodes,
  edges,
}
window.data = data
console.log(window.data, 'window.data ')
