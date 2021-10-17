export const getPersonListAPI: () => any = async (): Promise<any> => {
  return new Promise((resolve) => {
    resolve({
      data: [
        {
          key: 1,
          id: 10,
          name: "veloma",
          age: 20,
          sex: "male",
          address: "山东省青岛市",
        },
        {
          key: 2,
          id: 11,
          name: "timer",
          age: 22,
          sex: "female",
          address: "山东省青岛市",
        },
        {
          key: 3,
          id: 12,
          name: "timer",
          age: 22,
          sex: "female",
          address: "山东省青岛市",
        },
        {
          key: 4,
          id: 13,
          name: "timer",
          age: 22,
          sex: "female",
          address: "山东省青岛市",
        },
        {
          key: 5,
          id: 115,
          name: "timer",
          age: 22,
          sex: "female",
          address: "山东省青岛市",
        },
        {
          key: 6,
          id: 116,
          name: "timer",
          age: 22,
          sex: "female",
          address: "山东省青岛市",
        },
        {
          key: 7,
          id: 181,
          name: "timer",
          age: 22,
          sex: "female",
          address: "山东省青岛市",
        },
        {
          key: 8,
          id: 611,
          name: "timer",
          age: 22,
          sex: "female",
          address: "山东省青岛市",
        },
        {
          key: 9,
          id: 511,
          name: "timer",
          age: 22,
          sex: "female",
          address: "山东省青岛市",
        },
        {
          key: 10,
          id: 141,
          name: "timer",
          age: 22,
          sex: "female",
          address: "山东省青岛市",
        },
      ],
      count: 10,
    });
  });
};
