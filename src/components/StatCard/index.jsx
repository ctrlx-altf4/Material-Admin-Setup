import Grid from "@material-ui/core/Grid";
import Stack from "@material-ui/core/Stack";
import { StatTitle, Item, StatValue } from "./styled";

export default function DirectionStack(props) {
  const { stats } = props;
  return (
    <Grid container spacing={4}>
      {stats?.map(({ label, value, icon }) => {
        return (
          <Grid item md={4} spacing={4}>
            <Item>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                {icon}
                <Stack direction="column" alignItems="flex-end">
                  <StatTitle variant="subtitle1" component="p">
                    {label}
                  </StatTitle>
                  <StatValue variant="h5">{value}</StatValue>
                </Stack>
              </Stack>
            </Item>
          </Grid>
        );
      })}
    </Grid>
  );
}
