type HeadingProps = {
    children: string
}
const Heading = (props: HeadingProps) => {
  return (
    <p>{props.children}</p>
  )
}

export default Heading