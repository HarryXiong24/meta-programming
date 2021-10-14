export const getPersonListFromServer: () => any = async (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
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
            id: 11,
            name: "timer",
            age: 22,
            sex: "female",
            address: "山东省青岛市",
          },
          {
            key: 4,
            id: 11,
            name: "timer",
            age: 22,
            sex: "female",
            address: "山东省青岛市",
          },
          {
            key: 5,
            id: 11,
            name: "timer",
            age: 22,
            sex: "female",
            address: "山东省青岛市",
          },
          {
            key: 6,
            id: 11,
            name: "timer",
            age: 22,
            sex: "female",
            address: "山东省青岛市",
          },
          {
            key: 7,
            id: 11,
            name: "timer",
            age: 22,
            sex: "female",
            address: "山东省青岛市",
          },
          {
            key: 8,
            id: 11,
            name: "timer",
            age: 22,
            sex: "female",
            address: "山东省青岛市",
          },
          {
            key: 8,
            id: 11,
            name: "timer",
            age: 22,
            sex: "female",
            address: "山东省青岛市",
          },
          {
            key: 8,
            id: 11,
            name: "timer",
            age: 22,
            sex: "female",
            address: "山东省青岛市",
          },
        ],
        count: 10,
      });
    }, 500);
  });
};
