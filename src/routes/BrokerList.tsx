import { Table } from 'antd';
import { useLoaderData } from 'react-router-dom';

import type { TableColumnsType } from 'antd';
import type { TWExchange } from '../services/types';

const columns: TableColumnsType<TWExchange.Broker> = [
    {
        title: '證券商代號',
        dataIndex: 'Code',
        key: 'Code',
        width: 120,
    },
    {
        title: '證券商名稱',
        dataIndex: 'Name',
        key: 'Name',
        width: 160,
    },
    {
        title: '開業日',
        dataIndex: 'EstablishmentDate',
        key: 'EstablishmentDate',
        render: (text: string) => {
            const date = text.padStart(7, ' ');
            return (+date.slice(0, 3) + 1911) + '/' + date.slice(3, 5) + '/' + date.slice(5);
        },
        width: 120,
    },
    {
        title: '地址',
        dataIndex: 'Address',
        key: 'Address',
    },
    {
        title: '電話',
        dataIndex: 'Telephone',
        key: 'Telephone',
        width: 160,
    },
];

function BrokerList() {
    const data = useLoaderData() as TWExchange.Broker[];

    return (
        <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: 1024 }}
            pagination={{
                position: ['bottomCenter'],
            }}
        />
    );
}

export default BrokerList;
