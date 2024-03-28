import type { TWExchange } from './types';

const API_URL = '/api';
const API_ENTRY = {
    ETFRank: 'ETFReport/ETFRank.json',
    BrokerList: 'brokerService/brokerList.json',
};

class StockAPIImplement implements TWExchange.Stock {

    private url: string;
    private caches: Record<string, unknown> = {};

    constructor(url: string) {
        this.url = url;
    }

    private async get<T extends unknown[]>(path: string, keyName: string): Promise<T | undefined> {
        try {
            if (this.caches[path]) {
                return Promise.resolve(this.caches[path] as T);
            }

            const response = await fetch(
                `${this.url}/${path}`,
                {
                    method: 'GET',
                    mode: 'no-cors',
                    headers: {
                        'accept': 'application/json',
                        'Cache-Control': 'no-cache',
                    },
                },
            );

            const data = (await response.json()) as Record<string, unknown>[];

            this.caches[path] = data.map((item: Record<string, unknown>) => {
                item.key = item[keyName] as string;
                return item;
            });

            return data as T;
        } catch (error) {
            console.error('fetch', path, 'failed', error);
            return undefined;
        }
    }

    async getETFRank(): Promise<TWExchange.ETFRank[]> {
        return await this.get<TWExchange.ETFRank[]>(API_ENTRY.ETFRank, 'No') ?? [];
    }

    async getBrokers(): Promise<TWExchange.Broker[]> {
        return await this.get<TWExchange.Broker[]>(API_ENTRY.BrokerList, 'Code') ?? [];
    }

}

export default new StockAPIImplement(API_URL);
