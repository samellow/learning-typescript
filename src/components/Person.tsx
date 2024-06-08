type PersonProps = {
    name: {
        first: String,
        last: string
    }
}

const Person = (props: PersonProps) => {
  return (
    <div>
        {props.name.first} {props.name.last}
    </div>
  )
}

export default Person