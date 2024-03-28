import { Table } from 'antd';
import { useLoaderData } from 'react-router-dom';

import type { TableColumnsType } from 'antd';
import type { TWExchange } from '../services/types';

const columns: TableColumnsType<TWExchange.ETFRank> = [
    {
        title: '排序',
        dataIndex: 'No',
        key: 'Order',
        width: 60,
        fixed: 'left',
    },
    {
        title: '股票代號',
        dataIndex: 'STOCKsSecurityCode',
        key: 'STOCKsSecurityCode',
    },
    {
        title: '股票名稱',
        dataIndex: 'STOCKsName',
        key: 'STOCKsName',
    },
    {
        title: '股票交易戶數',
        dataIndex: 'STOCKsNumberofTradingAccounts',
        key: 'STOCKsNumberofTradingAccounts',
    },
    {
        title: 'ETF 代號',
        dataIndex: 'ETFsSecurityCode',
        key: 'ETFsSecurityCode',
    },
    {
        title: 'ETF 名稱',
        dataIndex: 'ETFsName',
        key: 'ETFsName',
    },
    {
        title: 'ETF 交易戶數',
        dataIndex: 'ETFsNumberofTradingAccounts',
        key: 'ETFsNumberofTradingAccounts',
    },
];

function ETFRank() {
    const data = useLoaderData() as TWExchange.ETFRank[];

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

export default ETFRank;
