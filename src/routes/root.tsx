import { Typography } from 'antd';

function Root() {
    return (
        <div style={{ padding: 8 }}>
            <Typography.Title>網頁說明</Typography.Title>

            <Typography.Paragraph>
                本網頁為練習專案，嘗試將台灣證券交易所的 API 資料呈現在網頁上，資料內容皆為證交所提供。
            </Typography.Paragraph>

            <Typography.Paragraph>
                證交所 API 文件：<a href="https://openapi.twse.com.tw/" target="_blank" rel="noreferrer">Swagger UI</a>
            </Typography.Paragraph>

            <Typography.Title level={3}>技術堆疊</Typography.Title>
            <ul>
                <li>
                    <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a>
                </li>
                <li>
                    <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">React Router</a>
                </li>
                <li>
                    <a href="https://react.i18next.com/" target="_blank" rel="noreferrer">React i18next</a>
                </li>
                <li>
                    <a href="https://ant.design/" target="_blank" rel="noreferrer">Ant Design</a>
                </li>
            </ul>
        </div>
    );
}

export default Root;
