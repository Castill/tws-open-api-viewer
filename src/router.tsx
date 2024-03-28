import { createBrowserRouter } from "react-router-dom";

import Stock from './services/stock';

import App from './App';

import Root from './routes/Root';
import ETFRank from './routes/ETFRank';
import BrokerList from './routes/BrokerList';
import PageNotFound from "./routes/PageNotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <PageNotFound />,
        children: [
            {
                index: true,
                element: <Root />,
            },
            {
                path: "ETFReport",
                children: [
                    {
                        path: "ETFRank",
                        loader: async () => {
                            return await Stock.getETFRank();
                        },
                        element: <ETFRank />,
                    },
                ],
            },
            {
                path: "brokerService",
                children: [
                    {
                        path: "brokerList",
                        loader: async () => {
                            return await Stock.getBrokers();
                        },
                        element: <BrokerList />,
                    },
                ],
            },
        ],
    },
]);

interface RouteMenuItem {
    type?: 'group';
    key: string;
    label: string;
    link?: string;
    children?: RouteMenuItem[];
}

const ROOT_KEY = 'ROOT';

const routeItems: RouteMenuItem[] = [
    {
        label: '首頁',
        key: ROOT_KEY,
        link: '/',
    },
    {
        type: 'group',
        label: '券商資料',
        key: 'broker_data',
        children: [
            {
                label: '定期定額前十名交易戶數證券統計',
                key: 'ETFRank',
                link: '/ETFReport/ETFRank',
            },
            {
                label: '證券商總公司基本資料',
                key: 'brokerList',
                link: '/brokerService/brokerList',
            },
        ],
    },
];

const keyToRouteMenuItem: Record<string, RouteMenuItem> = routeItems
    .flatMap((item) => {
        if (item.type === 'group') {
            return item.children || [];
        }

        return item;
    })
    .reduce<Record<string, RouteMenuItem>>((acc, item) => {
        if (item.link) {
            acc[item.key] = item;
        }
        return acc;
    }, {});

const getRouteMenuItem = (key: string): RouteMenuItem | undefined => {
    return keyToRouteMenuItem[key];
};

export {
    router,
    ROOT_KEY,
    routeItems,
    getRouteMenuItem,
};
