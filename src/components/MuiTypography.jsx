import { Typography } from "@mui/material";

function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>

      <Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        iusto labore quam reprehenderit consequuntur mollitia facilis error
        blanditiis cumque, obcaecati similique, minima tempore eius totam
        officia magnam assumenda perferendis fugiat?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At recusandae
        illo nam similique. Eius nisi sit deserunt adipisci, molestiae totam
        consectetur distinctio necessitatibus beatae minima non consequatur,
        iusto fuga excepturi!
      </Typography>
    </div>
  );
}

export default MuiTypography;
