import './Subscription.css'

const Subscription = () => {
    return (
        <div className='subscription one'>
        <h2 className='subscription__title'>Monthly Subscription</h2>
        <span>$29</span>
        <span>per month</span>
        <p>Full access for less than $1 a day</p>
        <form>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
}

export default Subscription