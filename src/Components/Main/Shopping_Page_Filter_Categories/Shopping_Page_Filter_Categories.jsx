import { Box } from "@mui/material";
import { PropTypes } from "prop-types"
import { useGetData } from "../../../Hooks/useGetData";

export const Shopping_Page_Filter_Categories = ({ selectedCategory, handleChange}) => {
    const { dataName } = useGetData("/categories")

  
  return (
    <Box>
      <select
        className="filter-by__category"
        value={selectedCategory}
        onChange={handleChange}
      >
        <option value="">All Categories</option>
        {dataName[0]?.typesCategories?.map((option, index) =>{
            return <option key={index} value={option}>{option}</option>
        })}
      </select>
    </Box>
  );
};


Shopping_Page_Filter_Categories.propTypes = {
    handleChange: PropTypes.func,
    selectedCategory: PropTypes.string,
}