import { createStyles } from '@mantine/core';

export default createStyles((theme, _: {}) => ({
    table: {},
    header: {
        borderBottom: `2px solid ${theme.colors.dark[4]}`,
    },
    headerFixed: {
        position: 'sticky',
        top: 0,
        backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'box-shadow 150ms ease',
    },
    body: {
        display: 'block',
        minHeight: '160px',
    },
    row: {
        display: 'flex',
    },
    headerCell: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
    },
    headerCellButtons: {
        display: 'flex',
        gap: '4px',
        alignItems: 'center',
    },
    dataCell: {},
    ellipsis: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    resizer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: 4,
        borderRight: `1px dashed ${theme.colors.dark[5]}`,
        cursor: 'col-resize',
        ':hover': {
            backgroundColor: theme.colors.dark[5],
        },
    },
    sorter: {},
    filter: {},
    globalFilter: {},
    pagination: {},
}));
