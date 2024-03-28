import { Layout, Flex, Typography, Menu, Spin, theme } from 'antd';
import { Outlet, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { Location } from 'react-router-dom';

import type { MenuProps } from 'antd';

import { ROOT_KEY, routeItems, getRouteMenuItem } from './router';

const {
    Header,
    Content,
    Sider,
} = Layout;

function App() {
    const { t } = useTranslation();
    const {
        token: {
            colorBgContainer,
            borderRadiusLG,
        },
    } = theme.useToken();
    const navigation = useNavigation();
    const location = useLocation() as Location<{ key: string }>;
    const navigate = useNavigate();

    const onMenuClick: MenuProps['onClick'] = (event) => {
        const target = getRouteMenuItem(event.key);
        if (target?.link) {
            navigate(target.link, { state: { key: target.key } });
        }
    };

    const current = location.state?.key || ROOT_KEY;

    const currentItem = getRouteMenuItem(current);

    return (
        <Layout>
            <Sider
                width={296}
                style={{ background: colorBgContainer }}
            >
                <Flex align="center" justify="center">
                    <Typography.Title
                        level={3}
                    >{t(`TWS Open API Viewer`)}</Typography.Title>
                </Flex>
                <Menu
                    onClick={onMenuClick}
                    selectedKeys={[current]}
                    mode="inline"
                    items={routeItems}
                />
            </Sider>
            <Content>
                <Header
                >
                    <Typography.Text
                        style={{ color: '#fdfdfd', fontSize: '1.2rem' }}
                    >{currentItem?.label}</Typography.Text>
                </Header>
                {
                    navigation.state === 'loading' ?
                        (
                            <Flex align="center" justify="center" style={{ width: '100dvw' }}>
                                <Spin />
                            </Flex>
                        ) : (
                            <Content style={{ margin: '16px 16px 0', overflow: 'initial' }}>
                                <div
                                    style={{
                                        background: colorBgContainer,
                                        borderRadius: borderRadiusLG,
                                    }}
                                >
                                    <Outlet />
                                </div>
                            </Content>
                        )
                }
            </Content>
        </Layout>
    );
}

export default App;
