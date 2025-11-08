const dataCache = new Map();

const userInputData = (id) => {
    return {
        id: id,
        data: `some data for user : ${id}`,
        timestamp: Date.now()
    };
};

const getData = (id) => {
    if (dataCache.has(id)) {
        console.log("yes have data:", dataCache.get(id));
        return dataCache.get(id);
    }

    const data = userInputData(id);
    dataCache.set(id, data);

    console.log("user input data:", data);
    return data;
};

getData(123);
getData(123);
