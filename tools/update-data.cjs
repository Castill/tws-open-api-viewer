const { join } = require('path');
const { writeFile } = require('fs/promises');
const fetch = (...args) => import('node-fetch')
    .then(({ default: fetch }) => fetch(...args));

const TWS_OPEN_API_URL = 'https://openapi.twse.com.tw/v1';
const OUTPUT_DATA_PATH = join(__dirname, '../public/api');

const updateData = async (path) => {
    console.log('Updating data', path);

    const res = await fetch(
        `${TWS_OPEN_API_URL}/${path}`,
        {
            headers: {
                'accept': 'application/json',
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
            },
        },
    );
    const data = await res.text();

    await writeFile(
        join(OUTPUT_DATA_PATH, `${path}.json`),
        data,
        'utf-8',
    );
};

(async () => {
    await updateData('ETFReport/ETFRank');
    await updateData('brokerService/brokerList');
})();
