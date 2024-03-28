import { Flex, Empty, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ROOT_KEY, getRouteMenuItem } from '../router';

function PageNotFound() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const replaceToRootPage = () => {
        const item = getRouteMenuItem(ROOT_KEY);
        if (item?.link) {
            navigate(
                item.link,
                {
                    replace: true,
                    state: { key: item.key },
                },
            );
        }
    };

    return (
        <Flex
            style={{ width: '100dvw' }}
            align="center"
            justify="center"
            vertical
        >
            <Empty />
            <Button
                onClick={replaceToRootPage}
            >{t(`BACK TO MAIN PAGE`)}</Button>
        </Flex>
    );
}

export default PageNotFound;
