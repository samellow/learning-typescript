type StatusProps = {
    status: 'loading' | 'success'  | 'error'
}

const Status = (props: StatusProps) => {
    let message 

    if (props.status === 'loading') {
        message = 'Loading...'
    }else if (props.status === 'success'){
        message = 'Data fetched successfully'
    }
    else if (props.status === 'error'){
        message = 'Data not found'
    }
  return (
    <div>
        {message}
    </div>
  )
}

export default Status