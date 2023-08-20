import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>

          <div className='logo'>
            <Link to='/' className='brand'>Food Restaurant</Link>
          </div>

          <nav className='nav nav-pills'>
          <NavLink to='brand'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Brand page </NavLink>
            <NavLink to='/'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Home</NavLink>
            <NavLink to='about'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >About</NavLink>
            <NavLink to='products'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Products</NavLink>
            {/* <NavLink to='login'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Login</NavLink> */}
            <NavLink to='preorder'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Pre-Order</NavLink>

            {/* <NavLink to='cart'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            >Cart<top>56</top></NavLink> */}

            <NavLink to='maincart'
              className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
            > Products carts</NavLink>











          </nav>

        </div>
      </div>
    </header>
  )
}

export default Header