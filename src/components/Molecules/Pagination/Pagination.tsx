import { memo } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./pagination.css";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const PaginationOutlined = memo(
    ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
        const handlePageChange = (
            event: React.ChangeEvent<unknown>,
            value: number
        ) => {
            onPageChange(value);
            console.log(value);
        };

        return (
            <Stack spacing={2}>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    variant="outlined"
                    size="large"
                    sx={{
                        padding: "20px 0",
                        "& .css-wjh20t-MuiPagination-ul": {
                            justifyContent: "center",
                        },
                        "& .css-ax94ij-MuiButtonBase-root-MuiPaginationItem-root":
                            {
                                color: "#FFF",
                                borderColor: "#FFF",
                            },
                    }}
                />
            </Stack>
        );
    }
);

export default PaginationOutlined;
