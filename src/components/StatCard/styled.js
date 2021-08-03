import Paper from "@material-ui/core/Paper";

import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StatTitle = styled(Typography)`
  text-transform: uppercase;
`;
const StatValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightBold,
}));

export { Item, StatTitle, StatValue };
