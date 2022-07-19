import { Stack, Table, Title, Text, Code } from '@mantine/core';

const Required = () => (
    <Text style={{ display: 'inline' }} color="red" children="*" />
);

export default function Properties() {
    return (
        <Stack p="md">
            <Title order={2} style={{ display: 'flex' }}>
                {'DataGrid<'}
                <Text
                    inherit
                    inline
                    color="orange"
                    children="T extends object = any"
                />
                {'> component props'}
            </Title>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            columns
                            <Required />
                        </td>
                        <td>
                            <Text
                                size="sm"
                                color="orange"
                                children="(table: Table) => ColumnDef[]"
                            />
                        </td>
                        <td>DataGrid column factory</td>
                    </tr>
                    <tr>
                        <td>
                            data
                            <Required />
                        </td>
                        <td>
                            <Text
                                size="sm"
                                color="orange"
                                children="Array<T>"
                            />
                        </td>
                        <td>Grid data</td>
                    </tr>
                    <tr>
                        <td>filterFns</td>
                        <td>
                            <Text
                                size="sm"
                                color="orange"
                                children="Record<string, DataGridFilterFn>"
                            />
                        </td>
                        <td>Custom filter functions</td>
                    </tr>
                    <tr>
                        <td>withGlobalFilter</td>
                        <td>
                            <Text size="sm" color="orange" children="boolean" />
                        </td>
                        <td>Show global filter</td>
                    </tr>
                    <tr>
                        <td>noEllipsis</td>
                        <td>
                            <Text size="sm" color="orange" children="boolean" />
                        </td>
                        <td>Disable text ellipsis</td>
                    </tr>
                    <tr>
                        <td>spacing</td>
                        <td>
                            <Text
                                size="sm"
                                color="orange"
                                children='number | "xs" | "sm" | "md" | "lg" | "xl"'
                            />
                        </td>
                        <td>Space between elements</td>
                    </tr>
                    <tr>
                        <td>withPagination</td>
                        <td>
                            <Text size="sm" color="orange" children="boolean" />
                        </td>
                        <td>Enable pagination feature</td>
                    </tr>
                    <tr>
                        <td>onPageChange</td>
                        <td>
                            <Text
                                size="sm"
                                color="orange"
                                children="({ pageIndex, pageSize, pageCount }) => void;"
                            />
                        </td>
                        <td>
                            Callback function on pagination data changed.
                            <br />
                            Need <Code>withPagination</Code> set to true
                        </td>
                    </tr>
                    <tr>
                        <td>pagination</td>
                        <td>
                            <Text
                                size="sm"
                                color="orange"
                                children="{ initialPageIndex: number; initialPageSize: number; }"
                            />
                        </td>
                        <td>
                            Callback function on pagination data changed.
                            <br />
                            Need <Code>withPagination</Code> set to true
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            <Title order={4}>
                                Mantine Table component props
                            </Title>
                        </td>
                    </tr>
                    <tr>
                        <td>fontSize</td>
                        <td>
                            <Text
                                size="sm"
                                color="orange"
                                children='number | "xs" | "sm" | "md" | "lg" | "xl"'
                            />
                        </td>
                        <td>Sets font size of all text inside table</td>
                    </tr>
                    <tr>
                        <td>highlightOnHover</td>
                        <td>
                            <Text size="sm" color="orange" children="boolean" />
                        </td>
                        <td>If true row will have hover color</td>
                    </tr>
                    <tr>
                        <td>horizontalSpacing</td>
                        <td>
                            <Text
                                size="sm"
                                color="orange"
                                children='number | "xs" | "sm" | "md" | "lg" | "xl"'
                            />
                        </td>
                        <td>
                            Horizontal cells spacing from theme.spacing or
                            number to set value in px
                        </td>
                    </tr>
                    <tr>
                        <td>striped</td>
                        <td>
                            <Text size="sm" color="orange" children="boolean" />
                        </td>
                        <td>
                            If true every odd row of table will have gray
                            background color
                        </td>
                    </tr>
                    <tr>
                        <td>verticalSpacing</td>
                        <td>
                            <Text
                                size="sm"
                                color="orange"
                                children='number | "xs" | "sm" | "md" | "lg" | "xl"'
                            />
                        </td>
                        <td>
                            Vertical cells spacing from theme.spacing or number
                            to set value in px
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Stack>
    );
}
