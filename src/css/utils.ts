const utils = {
  m: () => (value: any) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value
  }),
  mt: () => (value: any) => ({ marginTop: value }),
  mr: () => (value: any) => ({ marginRight: value }),
  mb: () => (value: any) => ({ marginBottom: value }),
  ml: () => (value: any) => ({ marginLeft: value }),
  mx: () => (value: any) => ({ marginLeft: value, marginRight: value }),
  my: () => (value: any) => ({ marginTop: value, marginBottom: value }),
  p: () => (value: any) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value
  }),
  pt: () => (value: any) => ({ paddingTop: value }),
  pr: () => (value: any) => ({ paddingRight: value }),
  pb: () => (value: any) => ({ paddingBottom: value }),
  pl: () => (value: any) => ({ paddingLeft: value }),
  px: () => (value: any) => ({ paddingLeft: value, paddingRight: value }),
  py: () => (value: any) => ({ paddingTop: value, paddingBottom: value }),
  size: () => (value: any) => ({ width: value, height: value }),
  linearGradient: () => (value: any) => ({
    backgroundImage: `linear-gradient(${value})`
  }),
  br: () => (value: any) => ({ borderRadius: value })
}

export default utils
