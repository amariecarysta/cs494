import { styled } from "@mui/material/styles"
import Chip from "@mui/material/Chip"

const StyledAbility = styled(Chip)({
    backgroundColor: "#E3E8F0",
    color: "#334155",
    fontWeight: "bold",
    textTransform: "capitalize",
    cursor: "pointer",
    margin: "3px",
    borderRadius: "8px",

    "&:hover": {
        backgroundColor: "#CBD5E1",

    }
})

export default StyledAbility